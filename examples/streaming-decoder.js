// proof of concept for streaming decoding message-by-message
var protobuf = require("..");
const { utf8 } = require("../src/util");

// test protocol
var proto = `
syntax="proto3";
message RootMessage {
	uint32 field = 1;
	repeated SubMessage msg_list = 2;
}
message SubMessage {
	float field = 1;
}
`;

var root = protobuf.parse(proto, {keepCase:true}).root,
	RootMessage = root.lookupType("RootMessage");

// generate a test example to decode
var msg = {field:99, msg_list:[]};
for (var i=0; i<30; i++)
	msg.msg_list.push({
		field: Math.random()
	});
var msg_str = RootMessage.encodeDelimited(msg).finish();

// NORMAL DECODE
console.log("One-shot decoding:")
var msg_decoded = RootMessage.decodeDelimited(msg_str);
console.log(msg_decoded);

// STREAMING DECODE >>>>>
console.log("\nStreamed decoding:")

// simulated mesage chunks, as would come from network/disk
function chunkify(str, num_chunks){
	str = new Uint8Array(str);
	var chunk_size = Math.ceil(str.length/num_chunks);
	num_chunks = Math.ceil(str.length/chunk_size);
	var chunks = [];
	for (var i=0, o=0; i<num_chunks; ++i)
		chunks.push(str.slice(o, o += chunk_size));
	return chunks;
}
var chunks = chunkify(msg_str, 10);

var discard = 0;
function onmessage(msg, stack){
	// console.log("Got msg:", msg, stack);
	// add to DOM tree?
	var keep = msg.field > .5;
	if (!keep)
		discard++;
	return keep;	
}
var decoder = RootMessage.StreamingDecoderDelimited(onmessage);
for (let i=0; i<chunks.length; i++){
	// current root message is returned for each call;
	// also accessible via decoder.root
	console.log("decoding chunk", i);
	var partial_root = decoder.write(chunks[i]);
}
// finalized DOM tree (also accessible via decoder.root)
var complete_root = decoder.end();
console.log(complete_root);
console.log(discard+" message(s) discarded on-the-fly");
