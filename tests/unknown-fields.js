var tape = require("tape");

var protobuf  = require("..");

tape.test("unknown-fields", function(test) {

    protobuf.load("tests/data/unknown-fields.proto", function(err, root) {
        if (err)
            return test.fail(err.message);

        var MessageV1 = root.lookup("MessageV1");
        var MessageV2 = root.lookup("MessageV2");

        test.plan(2);

        test.test("basic v2 to v1 to v2 reencoding", function(test) {
            var v2 = MessageV2.encode({
                field1: 1,
                field2: true,
                field3: "hello",
            }).finish();

            var v1 = MessageV1.decode(v2);

            test.equal(v1.field1, 1, "should set field1");
            test.same(v1.$unknownFields, [
                MessageV2.encode({ field2: true }).finish(),
                MessageV2.encode({ field3: "hello" }).finish(),
            ], "should set $unknownFields");

            var reencoded = MessageV1.encode(v1).finish();
            var redecoded = MessageV2.decode(reencoded);

            test.equal(redecoded.field1, 1, "should set field1");
            test.equal(redecoded.field2, true, "should set field2");
            test.equal(redecoded.field3, "hello", "should set field3");

            test.end();
        });

        test.test("encoding of recently supported fields", function(test) {
            var encoded = MessageV2.encode({
                field1: 1,
                $unknownFields: [
                    MessageV2.encode({ field2: true }).finish(),
                    MessageV2.encode({ field3: "hello" }).finish(),
                ],
            }).finish();

            var decoded = MessageV2.decode(encoded);

            test.equal(decoded.field1, 1, "should set field1");
            test.equal(decoded.field2, true, "should set field2");
            test.equal(decoded.field3, "hello", "should set field3");

            test.end();
        });

        test.end();
    });

});
