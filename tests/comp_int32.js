var tape = require("tape");

var protobuf  = require("..");

tape.test("int32 values with padding", function(test) {
    // 12345 encoded as a varint with 7 extra 0 bytes on the end
    var buf = Uint8Array.from([185, 224, 128, 128, 128, 128, 128, 128, 0]);

    var reader = protobuf.Reader.create(buf);

    test.equal(reader.int32(), 12345, "should decode padded varint");

    test.equal(reader.pos, 9, "should have consumed the entire test buffer");

    test.end();
});
