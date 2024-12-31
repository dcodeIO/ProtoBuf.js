var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({
}).addJSON(protobuf.common["google/protobuf/timestamp.proto"].nested).resolveAll();

var Timestamp = root.lookupType("protobuf.Timestamp");
var Long = protobuf.util.Long;

tape.test("google.protobuf.Timestamp", function(test) {
    var timestamp = Timestamp.fromObject({
        seconds: 5,
        nanos: 1001,
    });
    test.ok(timestamp instanceof Timestamp.ctor, "should convert to Timestamp in fromObject");
    test.same(timestamp, Timestamp.create({ seconds: new Long(5), nanos: 1001 }), "fromObject should work with raw object representation");

    var jsonObj = Timestamp.toObject(timestamp, { json: true });
    test.same(jsonObj, '1970-01-01T00:00:05.000Z', "correctly follows proto3 serialization for timestamps when requested");

    var obj =  Timestamp.toObject(timestamp);
    test.same(obj, { seconds: new Long(5), nanos: 1001 }, "correctly follows non proto3 serialization for timestamps when not requested");

    test.end();
});
