var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({})
    .addJSON(protobuf.common["google/protobuf/timestamp.proto"].nested)
    .resolveAll();

var Long = protobuf.util.Long;

var Timestamp = root.lookupType("protobuf.Timestamp");

tape.test("google.protobuf.Timestamp", function(test) {
    var isoTimestamp = "2019-06-28T00:00:00.010Z";
    var timestampObj = {
        seconds: new Long(1561680000),
        nanos: 10000000
    }
    var timestamp = Timestamp.create(timestampObj)

    var timestampFromObj = Timestamp.fromObject(timestampObj);

    test.ok(timestampFromObj instanceof Timestamp.ctor, "should be of the type Timestamp.");
    test.same(timestampFromObj, timestamp, "Conversion from object should work.");

    var timestampFromIso = Timestamp.fromObject(isoTimestamp)
    test.ok(timestampFromIso instanceof Timestamp.ctor, "should be of the type Timestamp.");

    test.same(timestampFromIso, timestamp, "Conversion from iso date string should work.");

    var convertedIsoTimestamp = Timestamp.toObject(timestamp, { standard: true });
    test.same(convertedIsoTimestamp, isoTimestamp, "Conversion to iso date should work.");

    var convertedTimestamp = Timestamp.toObject(timestamp);
    test.same(convertedTimestamp, timestampObj, "Conversion to the object should work");

    test.end();
});
