var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({})
    .addJSON(protobuf.common["google/protobuf/duration.proto"].nested)
    .resolveAll();

var Long = protobuf.util.Long;

var Duration = root.lookupType("protobuf.Duration");

tape.test("google.protobuf.Duration", function(test) {
    var durationString = "1.234s";
    var durationObj = {
        seconds: new Long(1),
        nanos: 234000000
    }
    var duration = Duration.create(durationObj)

    var durationFromObj = Duration.fromObject(durationObj);

    test.ok(durationFromObj instanceof Duration.ctor, "should be of the type Duration.");
    test.same(durationFromObj, duration, "Conversion from object should work.");

    var durationFromstr = Duration.fromObject(durationString);
    test.ok(durationFromstr instanceof Duration.ctor, "should be of the type Duration.");

    test.same(durationFromstr, duration, "Conversion from string should work.");

    var convertedDurationString = Duration.toObject(duration, { standard: true });
    test.same(convertedDurationString, durationString, "Conversion to string should work.");

    var convertedDuration = Duration.toObject(duration);
    test.same(convertedDuration, durationObj, "Conversion to the object should work");

    // Long(-1, -1) is -1
    var durationString = "-1.234s";
    var durationObj = {
        seconds: new Long(-1, -1),
        nanos: -234000000
    }
    var duration = Duration.create(durationObj)

    var durationFromObj = Duration.fromObject(durationObj);

    test.ok(durationFromObj instanceof Duration.ctor, "should be of the type Duration.");
    test.same(durationFromObj, duration, "Conversion from object should work.");

    var durationFromstr = Duration.fromObject(durationString);
    test.ok(durationFromstr instanceof Duration.ctor, "should be of the type Duration.");

    test.same(durationFromstr, duration, "Conversion from string should work.");

    var convertedDurationString = Duration.toObject(duration, { standard: true });
    test.same(convertedDurationString, durationString, "Conversion to string should work.");

    var convertedDuration = Duration.toObject(duration);
    test.same(convertedDuration, durationObj, "Conversion to the object should work");

    test.end();
});
