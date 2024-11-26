var tape = require("tape");

var protobuf = require("..");
var long = require("long")

tape.test("maps long key", function(test) {
    var root = protobuf.Root.fromJSON({
        nested: {
            Test: {
                fields: {
                    foo: {
                        keyType: "uint64",
                        type: "uint64",
                        id: 1
                    }
                }
            }
        }
    });

    var Test = root.lookup("Test");
    var input = {
        "1": new long(2, 0, true)
    };
    var buffer = Test.encode({foo: input}).finish();
    var decoded = Test.decode(buffer);
    test.deepEqual(decoded.foo, input, "should decode back to the original map");

    var altInput = {
        "1": "2"
    };
    buffer = Test.encode({foo: altInput}).finish();
    decoded = Test.decode(buffer);
    test.deepEqual(decoded.foo, input, "alt input should decode")

    test.end();
});
