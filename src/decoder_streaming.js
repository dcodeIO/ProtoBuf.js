"use strict";
module.exports = {
	StreamingDecoder,
	streaming_decode,
};

var Enum    = require("./enum"),
	types   = require("./types"),
	util    = require("./util"),
	StreamingReader = require("./reader_streaming");

/**
 * Wrapper class around the streaming_decode generator
 * 
 * @param {Type} type The message type object which this StreamingDecoder should decode for
 * @param {Function} [onmessage] Callback for completed messages. This can be undefined/null/falsey
 * 	if you don't want a callback. This matches the behavior of a callback `function(){ return true; }`.
 * @param {int} [length] Hint about the length of the message. You can use -1 to indicate
 * 	that the message is length delimited, meaning it is preceded on the wire by a uint32
 * 	indicating the length of the message. Can also be undefined, meaning it will keep
 * 	decoding until there is no more input left.
 */
function StreamingDecoder(type, onmessage, length){
	if (!(onmessage instanceof Function || !onmessage))
		throw Error("StreamingDecoder callback must be a function if specified");
	/** The message Type class the decoder is for  */
	this.type = type;
	/** The onmessage callback */
	this.onmessage = onmessage;
	/** Hint about the message's length for decoding  */
	this.limit = length;
	/** Message tree stack used for onmessage callback */
	this.stack = [];
	/** The root message, which also gets returned by calls to write() and end() */
	this.root = null;
	/** The StreamingReader object used by the generator */
	this.reader = null;
	/** The generator used internally to pause decoding for more data */
	this.generator = null;
	/** Whether user has manually specified that this is the last input */
	this.eof = false;
};
/**
 * Decode a chunk of data
 * @param {Array|Uin8Array|String|Buffer} [data] Data to be decoded by the decoder. If not provided
 *  then this is equivalent to calling `end()`, signaling the end of input.
 * @param {bool} [eof] Whether this is the last data input. Equivalent to calling `write()`, no
 *  arguments, or `end(data)`.
 * @returns {Message} The partially, or fully completed root message; same as this.root
 */
StreamingDecoder.prototype.write = function StreamingDecoder_write(data, eof){
	// end of input reached prior
	if (this.eof)
		return this.root;
	// first data we receive, we start the generator
	if (!this.generator){
		this.reader = new StreamingReader(data);
		this.generator = this.type._streaming_decode(this.reader, this.limit, this.stack, this.onmessage);
		// note, first next() call's args are ignored
		this.root = this.generator.next().value;
	}
	// requesting additional data
	else this.generator.next(data);
	// signal end of input
	if (data !== undefined && eof)
		this.generator.next();
	// end of input signaled by user
	if (data === undefined || eof)
		this.eof = true;
	return this.root;
}
/**
 * Alias for `write(data, true)`
 */
StreamingDecoder.prototype.end = function StreamingDecoder_end(data){
	return this.write(data, true);
}


/**
 * Creates a new codegen object, which can be used to obtain a custom function for
 * streamed decoding type `mtype` specifically
 */
function streaming_decode(mtype) {
	/* This is a private method, to be called by a wrapper class with arguments all initialized
		reader: StreamingReader
		limit: limit to number of bytes to be read (total); this is passed to reader.done,
			so if it is undefined, it will read until eof is reached
		stack: array of objects of the form:
				[{
					message: (Message) parent message,
					field: (str) field name for child / next item in stack,
					repeated: (bool) whether field is repeated
				}, ...]
			This is a stack indicating the current messages in the tree; the first element
			is the root element, while the last element is the parent which triggered the current
			message decoding, and will is the target of the field
		cbk: the onmessage callback to be called whenever a message is completed;
			the signature for the cbk will be (message, stack) -> bool; it should
			return true if the message should be added to its parent, or false if
			it should not be added 
	*/

	// I've aligned all G(...) code generation lines, so they're more easily identifiable; also
	// I've added tabs to the generated code and renamed variables so that the source code is easier
	// to read and debug; I think the any performance hit on runtime will be minimal, and makes it easier to
	// maintain. Other than that, everything is very much the same as the traditional "decode.js", with small
	// changes to handle the streaming generator (via yield) and the onmessage callback.
	var G = util.codegen(["reader", "limit", "stack", "cbk"], mtype.name + "$_streaming_decode", true);

	G("var msg = new this.ctor;");
	G("var stack_item = {message: msg};");
	// We set a reference of the root message on the StreamingReader, so that the reader can
	// yield the current progress of that root message whenever it pauses for more data
	G("if (stack.push(stack_item) === 1){");
	G("	reader.root = msg;");
		// Is it a length delimited message? -1 is our magic number for indicating length delimited
	G("	if (limit == -1)");
	G("		limit = yield* reader.uint32();");
	G("}");
	
	// Decoding loop;
	// non-packed repeated fields (including map fields, which are implicity repeated), are accumulated
	// across iterations of this loop; when a field is seen the first time, it is initialized to empty array (or object for maps);
	// subsequent loop iterations will push/add to the array/object
	G("while (!reader.done(limit)){");
		// Field identifier
	G("	var tag = yield* reader.uint32();");
		// End of group; stop here
	if (mtype.group)
	G("	if ((tag & 7) === 4) break;");
	
		// Field number
	G("	switch (tag >>> 3){");

	// Hardcoded logic for each field [number]; generated code will be a bit more verbose and repeated,
	// but potentially a bit faster since we don't need to check as many branches
	for (var i=0; i<mtype.fieldsArray.length; ++i){
		var field = mtype._fieldsArray[i].resolve(),
			type = field.resolvedType instanceof Enum ? "int32" : field.type,
			field_str = util.safePropString(field.name),
			ref = "msg" + util.safeProp(field.name);

	G("		case %i:", field.id);

		// Map fields; equivalent to an embedded message with {key=1, value=2};
		if (field.map){
				// First time seeing this field; initialize the map container object
	G("			if (%s === util.emptyObject)", ref);
	G("				%s = {};", ref);

				// Initial value for key/value fields of the map
				if (types.defaults[field.keyType] !== undefined)
	G("				var key = %j;", types.defaults[field.keyType]);
				else
	G("				var key = null;");
				if (types.defaults[type] !== undefined)
	G("				var value = %j;", types.defaults[type]);
				else
	G("				var value = null;");

				// Whether the value (if it is a message) should be included
	G("				var incl = true;");

				// Maps fields are like messages, so have multiple fields within;
				// here we're looping through to find the two fields key=1, value=2
	G("				var map_limit = (yield* reader.uint32()) + reader.bytes_read();");
	G("				while (!reader.done(map_limit)){");
	G("					var map_tag = yield* reader.uint32();");
	G("					switch (map_tag >>> 3){");
							// key (primitive only)
	G("						case 1: key = yield* reader.%s(); break;", field.keyType)
	G("						case 2:");
							// value, message; field value cannot be a group, so no need to handle that side case
		   					if (types.basic[type] === undefined){
	G("							var field_limit = (yield* reader.uint32()) + reader.bytes_read();")
	G("							stack_item.repeated = false;")
	G("							stack_item.field = %s;", field_str)
	G("							value = yield* types[%i]._streaming_decode(reader, field_limits, stack, cbk);", i);
								// did cbk request this message [not] be included?
	G("							incl = value;");
							}
							// value, primitive
							else
	G("							value = yield* reader.%s();", type);
	G("							break;");
							// unknown type; shouldn't occur in practice
	G("						default:");
	G("							yield* r.skipType(tag2&7);");
	G("							break;");
	G("					}");
	G("				}");
			// Add key-value pair to the map container
			if (types.long[field.keyType] !== undefined)
	G("				incl && (%s[typeof key === 'object' ? util.longToHash(key) : key] = value);", ref);
			else
	G("				incl && (%s[key] = value);", ref);        
		}
		// Repeated fields
		else if (field.repeated){
				// First time seeing this field; initialize the repeated container array
	G("			if (!(%s && %s.length))", ref, ref)
	G("				%s = []", ref);

			// Packable, meaning we can parse N primitive types in a row (always check for forward and backward compatiblity)
			if (types.packed[type] !== undefined){
	G("			if ((tag & 7) === 2){");
	G("				var field_limit = (yield* reader.uint32()) + reader.bytes_read();");
	G("				while (!reader.done(field_limit))")
	G("					%s.push(yield* reader.%s())", ref, type)
	G("			} else");
			}
			// Non-packed; we just push a single item
	G("			{");
				// Non-packed message
			if (types.basic[type] === undefined){
					// Groups have their own "end group" marker, so no need for decoding byte limit
				if (field.resolvedType.group)
	G("				var field_limit = undefined;");
				else
	G("				var field_limit = (yield* reader.uint32()) + reader.bytes_read();");

	G("				stack_item.repeated = true;")
	G("				stack_item.field = %s;", field_str)
	G("				var value = yield* types[%i]._streaming_decode(reader, field_limit, stack, cbk);", i);
					// Note here we check if cbk requested the message [not] be included
	G("				value && %s.push(value)", ref)
				}
				// Non-packed primitive
				else
	G("				%s.push(yield* reader.%s())", ref, type);
	G("			}")
		}
		// Single message
		else if (types.basic[type] === undefined){
			// Nearly identical to logic for "non-packed repeated message" above
			if (field.resolvedType.group)
	G("			var field_limit = undefined;");
			else
	G("			var field_limit = (yield* reader.uint32()) + reader.bytes_read();");

	G("			stack_item.repeated = false;");
	G("			stack_item.field = %s;", field_str);
	G("			var value = yield* types[%i]._streaming_decode(reader, field_limit, stack, cbk);", i);
	G("			value && %s = value;", ref)
		}
		// Single primitive
		else
	G("			%s = yield* reader.%s();", ref, type);


	G("			break;");
	}
	// Any remaining unknown fields
	G("		default:")
	G("			yield* reader.skipType(tag & 7);")
	G("			break;")

	G("	}")
	G("}");

	// Throw errors if "required" fields are not present
	for (var i = 0; i < mtype._fieldsArray.length; ++i) {
		var rfield = mtype._fieldsArray[i];
		if (rfield.required){
	G("if (!msg.hasOwnProperty(%j))", rfield.name)
	G("	throw util.ProtocolError(%j, {instance:\"missing required '%s'\"});", rfield.name);
		}
	}

	// Message decoding complete; call streaming cbk to handle it
	G("var incl = !cbk || cbk(msg, stack);");
	G("stack.pop();");
	G("return incl ? msg : undefined;");

	return G;
}