"use strict";
module.exports = StreamingReader;

const Reader = require("./reader");
const BufferReader = require("./reader_buffer");

/**
 * A StreamingReader mimics the same API as Reader and BufferReader, except each
 * tokenizing method has been converted to a generator. The generator will pause
 * when the underlying buffer is exhuasted, and the user can use gen.next(buffer)
 * to feed in additional streamed input to be read.
 * 
 * @param {*} buffer Initial data to be read; this is forwarded to Reader.create internally
 * @todo
 * 	- Some kind of 'reset_bytes_read', in case there are multiple message concatenated in the
 * 		same stream. We could reset the bytes read (and eof) and just continue decoding using the same
 * 		StreamingReader
 *  - Allow them to pass a Reader/BufferReader to the constructor or generator.next()?
 */
function StreamingReader(buffer){
	/**
     * The root message of the input data that we are decoding. The partially (or completed for
	 * final iteration) root is yielded each time we pause for more data
     * @type {Message}
     */
	this.root = null;
	/**
	 * Reader currently being used to read tokens. This can be the same as nxt_reader.
	 * If it is *not* nxt_reader, it will be a temporary reader created internally to
	 * buffer bytes while we transition between the previous data input(s) and nxt_reader's
	 * data input.
	 * @type {Reader}
	 */
	this.cur_reader = Reader.create(buffer);
	/**
     * Internal reader object that holds the next (or possibly current) data input
     * @type {Reader}
     */
	this.nxt_reader = this.cur_reader;
	/**
	 * The byte position in cur_reader.buf, indicating where nxt_reader.buf begins. You can use
	 * !nxt_pos to check if cur_reader == nxt_reader (e.g. cur_reader is not a temp buffer). If
	 * we drain `cur_reader` and it needs to buffer more data, if cur_reader.pos is >= this nxt_pos,
	 * we can just start reading from nxt_reader, instead of doing another buffer operation.
	 * @type {int}
	 */
	this.nxt_pos = 0;
	/**
	 * Whether cur_reader is the last input provided by the user. When true, nxt_reader is
	 * not used and nxt_pos must be zero.
	 * @type {bool}
	 */
	this.eof = false;
	/**
	 * Bytes read from all previous readers; use bytes_read to get total bytes read thus far
	 * @type {int}
	 */
	this.prev_bytes = 0;
}

/**
 * Whether reading has finished
 * @param {int} bytes If specified, reading is considered done when >= bytes have been read
 */
StreamingReader.prototype.done = function(bytes){
	if (bytes !== undefined)
		return this.bytes_read() >= bytes;
	return this.eof && this.cur_reader.pos >= this.cur_reader.len;
}
/**
 * How many bytes have been read (e.g. equivalent to Reader.pos). Note
 * that cur_reader.pos is not clamped, so may be > cur_reader.len
 */
StreamingReader.prototype.bytes_read = function(){
	return this.prev_bytes + this.cur_reader.pos;
}

/**
 * Ensure the internal reader being used can read at least N bytes. The
 * reader will yield, accepting additional input until the byte count is
 * satisifed, or no additional input is available.
 *
 * Reader is not a traditional parser which parses each byte individually
 * and maintains state machine. Unfortunately that makes it troublesome to
 * pause/resume parsing. If the N bytes requested straddles 2+ buffers, we need
 * to create a temporary reader with N bytes copied from those straddled buffers.
 * The alternative would be to rewrite the parser, but it would likely mean slower
 * parsing for the general case (general case being where we do not stream input,
 * and so don't need to yield for additional input)
 * 
 * @param {int} n maximum number of bytes needed to read the token
 * @param {int} excess if > 0, it will buffer up to excess-1 extra
 * 	bytes when buffering, so that we are not repeatedly copying data to a temporary buffer every
 *	time we need to parse another token. Example: we have 9 bytes but need 10; we
 *	can buffer the minimal amount 10, but if only 1 byte is actually required, on
 *	the next iteration we will be back where we started, 9 bytes but need 10; thus,
 *	repeated buffering until we can swap out our temporary cur_reader for nxt_reader.
 *
 *	A good value for this is 10, since that is the max bytes needed for a primitive type;
 *	though if the data inputs happen to be in very small chunks (< 10 bytes... unlikely in
 *	practice) a larger value would be better.
 */
StreamingReader.prototype._buffer_bytes = function* StreamingReader_buffer_bytes(n, excess=0){
	// cur_reader meets byte reqs
	var cur_avail = this.cur_reader.len-this.cur_reader.pos;
	if (cur_avail >= n || this.eof || !n)
		return;
	
	// if cur_reader is a temp buffer, check if it still contains data that needs to be processed
	if (this.nxt_pos){
		// cur_reader no longer needed, swap out for nxt_reader
		if (this.cur_reader.pos >= this.nxt_pos){
			this.prev_bytes += this.nxt_pos;
			this.nxt_reader.pos = this.cur_reader.pos-this.nxt_pos;
			this.cur_reader = this.nxt_reader;
			this.nxt_pos = 0;
			cur_avail = this.cur_reader.len-this.cur_reader.pos;
			// nxt_reader (now the cur_reader) meets byte reqs
			if (cur_avail >= n)
				return;
		}
	}
	// if cur_reader is temp buffer, we now know it has data still;
	// otherwise, if *not* a temp buffer, we need to check if it has data or not
	if (!this.nxt_pos){
		if (cur_avail <= 0){
			this.prev_bytes += this.cur_reader.len;
			yield* this._fetch_nxt_reader();
			this.cur_reader = this.nxt_reader;
			if (this.eof)
				return;
			// now we have a non-empty, non-temp-buffer cur_reader; does it meet byte reqs?
			cur_avail = this.cur_reader.len-this.cur_reader.pos;
			if (cur_avail >= n)
				return;
		}
		// make sure nxt_reader is set, to mirror the tmp buffer case so we can use the same logic for both
		yield* this._fetch_nxt_reader();
		if (this.eof)
			return;
	}

	// data required straddles cur_reader and nxt_reader (and may require 1+ additional nxt_readers as well)
	var tmp_reader = Reader.create(new this.cur_reader.buf.constructor(n+(excess ? excess-1 : 0)));
	var ti = 0;
	// copy bytes from cur_reader
	this.prev_bytes += this.cur_reader.len-cur_avail;
	for (var si=this.cur_reader.pos; ti<cur_avail; ++si, ++ti)
		tmp_reader.buf[ti] = this.cur_reader.buf[si];
	this.cur_reader = tmp_reader;
	// if cur_reader is temp buffer and partially contains nxt_reader, we don't need to copy the first nxt_reader fully
	cur_avail = this.nxt_reader.len - this.nxt_reader.pos;
	// repeatedly buffer from nxt_reader until we have required bytes, or eof reached
	while (true){
		this.nxt_pos = ti; // start position of nxt_reader.buf, as copied into cur_reader.buf
		var bytes2copy = this.cur_reader.len - ti,
			insufficient = cur_avail < bytes2copy;
		if (insufficient)
			bytes2copy = cur_avail;
		for (var si=0; si<bytes2copy; ++si, ++ti)
			this.cur_reader.buf[ti] = this.nxt_reader.buf[si];
		// still need more input?
		if (insufficient){
			yield* this._fetch_nxt_reader();
			// the temp reader will be our eof reader
			if (this.eof){
				// pretend it is a non-temp reader
				this.nxt_pos = 0;
				// artificially decrease length
				this.cur_reader.len = ti;
				return;
			}
			cur_avail = this.nxt_reader.len;
		}
		else return;
	}
}

/**
 * Retrieves additional input from user, via next() of the yielded generator
 */
StreamingReader.prototype._fetch_nxt_reader = function* StreamingReader_fetch_nxt_reader(){
	// repeatedly fetch input from user (generator's next() method) until we get something
	do {
		var nxt = yield this.root;
		if (nxt === undefined){
			this.eof = true;
			return;
		}
		this.nxt_reader = Reader.create(nxt);
	} while (this.nxt_reader.len <= 0);
}

var max_bytes = {
	// All these use uint32 internally, which is max 10 bytes
	uint32: 10,
	int32: 10,
	sint32: 10,
	bool: 10,
	// All these use Long internally, which is max 10 bytes
	int64: 10,
	uint64: 10,
	sint64: 10,
	// These have fixed 4 byte length
	fixed32: 4,
	sfixed32: 4,
	float: 4,
	// These have fixed 8 byte length
	fixed64: 8,
	sfixed64: 8,
	double: 8
};
for (var primitive in max_bytes){
	// closure, since we aren't using "let" in this lib
	StreamingReader.prototype[primitive] = (function(p){
		var bytes = max_bytes[p];
		return function*(){
			yield* this._buffer_bytes(bytes, 10);
			return this.cur_reader[p]();
		}
	})(primitive);
}

// Byte/string is a little more complicated; can't just delegate to base Reader/BufferReader method
StreamingReader.prototype._bytes_or_string = function* StreamingReader_bytes_or_string(convert_string){
	// code adapted from Reader/BufferReader classes
	var length = yield* this.uint32();
	var value;
	// empty bytes
	if (!length)
		return new this.cur_reader.buf.constructor(0);
	// otherwise buffer and slice
	yield* this._buffer_bytes(length);
	var cur_avail = this.cur_reader.len - this.cur_reader.pos;
	if (cur_avail < length)
		throw indexOutOfRange(this.cur_reader, length);
	// no slicing needed if we've created a temporary specifically for this token
	if (this.nxt_pos && !this.cur_reader.pos && cur_avail == len){
		value = this.cur_reader.buf;
		this.cur_reader.pos = len;
	}
	// safer to make slice/copy of data
	else{
		var buf = this.cur_reader.buf,
			start = this.cur_reader.pos,
			end = (this.cur_reader.pos += length);
		if (Array.isArray(buf))
			value = buf.slice(start, end);
        else if (convert_string && cur_reader instanceof BufferReader){
			// can do a fused slice + string convert for buffers
			return (buf.utf8Slice ?
				buf.utf8Slice(start, end) :
				buf.toString("utf-8", start, end)
			);
		}
		else
			value = this.cur_reader._slice.call(buf, start, end);
	}
	if (!convert_string)
		return value;
	// convert to string
	if (cur_reader instanceof BufferReader){
		return (buf.utf8Slice ?
			value.utf8Slice(0, value.length) :
			value.toString("utf-8")
		);
	}
	return utf8.read(value, 0, value.length);
}
StreamingReader.prototype.bytes = function* StreamingReader_bytes(){
	return yield* this._bytes_or_string(false);
}
StreamingReader.prototype.string = function* StreamingReader_string(){
	return yield* this._bytes_or_string(true);
}

// Skip we handle differently, since we don't need to read any data, just move the pointer
StreamingReader.prototype.skip = function* StreamingReader_skip(length) {
	// skip N bytes
    if (typeof length === "number"){
		if (length <= 0)
			return;
		while (true) {
			var cur_avail = this.cur_reader.len - this.cur_reader.pos;
			if (cur_avail >= length){
				this.cur_reader.pos += length;
				return;
			}
			length -= Math.max(0, cur_avail); // max, in case current position > length makes avail negative
			// this trick will fetch the next batch of input without buffering
			this.cur_reader.pos = this.cur_reader.len;
			yield* this._buffer_bytes(1);
			if (this.eof)
				throw indexOutOfRange(this.cur_reader, length);
		}
    }
	// skip a varlength number
	while (true){
		while (this.cur_reader.pos < this.cur_reader.len){
			if (!(this.cur_reader.buf[this.cur_reader.pos++] & 128))
				return
		}
		// this trick will fetch the next batch of input without buffering
		yield* this._buffer_bytes(1);
		if (this.eof)
			throw indexOutOfRange(this.cur_reader);
	}
};

StreamingReader.prototype.skipType = function* StreamingReader_skipType(wireType){
    switch (wireType) {
        case 0:
            yield* this.skip();
            break;
        case 1:
            yield* this.skip(8);
            break;
        case 2: {
			var bytes = yield* this.uint32();
            yield* this.skip(bytes);
            break;
		}
        case 3:
            while (true){
				var bytes = yield* this.uint32();
				wireType = bytes & 7;
				if (wireType == 4)
					return;
                yield* this.skipType(wireType);
            }
        case 5:
            yield* this.skip(4);
            break;
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.cur_reader.pos);
    }
};