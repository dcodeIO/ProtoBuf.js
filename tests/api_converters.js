var tape = require("tape");

var protobuf  = require("..");

tape.test("converters", function(test) {

    protobuf.load("tests/data/convert.proto", function(err, root) {
        if (err)
            return test.fail(err.message);

        var Message = root.lookup("Message");

        test.test(test.name + " - Message#toObject", function(test) {

            test.plan(6);

            test.test(test.name + " - called with defaults = true", function(test) {
                var obj = Message.toObject(Message.create(), { defaults: true });

                test.equal(obj.stringVal, "", "should set stringVal");
                test.same(obj.stringRepeated, [], "should set stringRepeated");

                test.same(obj.uint64Val, { low: 0, high: 0, unsigned: true }, "should set uint64Val");
                test.same(obj.uint64Repeated, [], "should set uint64Repeated");

                test.same(obj.bytesVal, protobuf.util.newBuffer(0), "should set bytesVal");
                test.same(obj.bytesRepeated, [], "should set bytesRepeated");

                test.equal(obj.enumVal, 1, "should set enumVal to the first defined value");
                test.same(obj.enumRepeated, [], "should set enumRepeated");

                test.same(obj.int64Map, {}, "should set int64Map");

                test.end();
            });

            test.test(test.name + " - called with defaults = undefined", function(test) {
                var obj = Message.toObject(Message.create());

                test.equal(obj.stringVal, undefined, "should not set stringVal");
                test.equal(obj.stringRepeated, undefined, "should not set stringRepeated");

                test.equal(obj.uint64Val, undefined, "should not set uint64Val");
                test.equal(obj.uint64Repeated, undefined, "should not set uint64Repeated");

                test.equal(obj.bytesVal, undefined, "should not set bytesVal");
                test.equal(obj.bytesRepeated, undefined, "should not set bytesRepeated");

                test.equal(obj.enumVal, undefined, "should not set enumVal");
                test.equal(obj.enumRepeated, undefined, "should not set enumRepeated");

                test.equal(obj.int64Map, undefined, "should not set int64 map");

                test.end();
            });

            test.test(test.name + " - called with arrays = true", function(test) {
                var obj = Message.toObject(Message.create(), { arrays: true });

                test.equal(obj.stringVal, undefined, "should not set stringVal");
                test.same(obj.stringRepeated, [], "should set stringRepeated");

                test.equal(obj.uint64Val, undefined, "should not set uint64Val");
                test.same(obj.uint64Repeated, [], "should set uint64Repeated");

                test.equal(obj.bytesVal, undefined, "should not set bytesVal");
                test.same(obj.bytesRepeated, [], "should set bytesRepeated");

                test.equal(obj.enumVal, undefined, "should not set enumVal");
                test.same(obj.enumRepeated, [], "should set enumRepeated");

                test.equal(obj.int64Map, undefined, "should not set int64Map");

                test.end();
            });

            test.test(test.name + " - called with objects = true", function(test) {
                var obj = Message.toObject(Message.create(), { objects: true });

                test.equal(obj.stringVal, undefined, "should not set stringVal");
                test.equal(obj.stringRepeated, undefined, "should not set stringRepeated");

                test.equal(obj.uint64Val, undefined, "should not set uint64Val");
                test.same(obj.uint64Repeated, undefined, "should not set uint64Repeated");

                test.equal(obj.bytesVal, undefined, "should not set bytesVal");
                test.same(obj.bytesRepeated, undefined, "should not set bytesRepeated");

                test.equal(obj.enumVal, undefined, "should not set enumVal");
                test.same(obj.enumRepeated, undefined, "should not set enumRepeated");

                test.same(obj.int64Map, {}, "should set int64Map");

                test.end();
            });

            test.test(test.name + " - should convert", function(test) {
                var buf = protobuf.util.newBuffer(3);
                buf[0] = buf[1] = buf[2] = 49; // "111"
                var msg = Message.create({
                    uint64Val: protobuf.util.Long.fromNumber(1),
                    uint64Repeated: [2, 3],
                    bytesVal: buf,
                    bytesRepeated: [buf, buf],
                    enumVal: 2,
                    enumRepeated: [1, 100, 2],
                    int64Map: {
                        a: protobuf.util.Long.fromNumber(2),
                        b: protobuf.util.Long.fromNumber(3)
                    }
                });

                var msgLongsToNumber = Message.toObject(msg, { longs: Number }),
                    msgLongsToString = Message.toObject(msg, { longs: String });

                test.same(Message.ctor.toObject(msg, { longs: Number}), msgLongsToNumber, "should convert the same using the static and the instance method");
                test.same(Message.ctor.toObject(msg, { longs: String}), msgLongsToString, "should convert the same using the static and the instance method");

                test.equal(msgLongsToNumber.uint64Val, 1, "longs to numbers");
                test.equal(msgLongsToString.uint64Val, "1", "longs to strings");
                test.same(msgLongsToNumber.int64Map, { a: 2, b: 3}, "long map values to numbers");
                test.same(msgLongsToString.int64Map, { a: "2", b: "3"}, "long map values to strings");

                test.equal(Object.prototype.toString.call(Message.toObject(msg, { bytes: Array }).bytesVal), "[object Array]", "bytes to arrays");
                test.equal(Message.toObject(msg, { bytes: String }).bytesVal, "MTEx", "bytes to base64 strings");
                test.equal(Message.toObject(msg, { bytes: 'utf8' }).bytesVal, "111", "bytes to utf8 strings");
                if (protobuf.util.isNode)
                    test.ok(Buffer.isBuffer(Message.toObject(msg, { bytes: Buffer }).bytesVal), "bytes to buffers");

                test.equal(Message.toObject(msg, { enums: String }).enumVal, "TWO", "enums to strings");
                test.equal(Message.toObject(msg, { enums: String }).enumRepeated[1], 100, "enums to strings does not change unknown values");

                test.end();
            });

            test.test(test.name + " - Message.toObject with empty buffers", function(test) {
                var msg = Message.create({
                    bytesVal: protobuf.util.newBuffer(0),
                });

                test.equal(Message.toObject(msg, { bytes: String }).bytesVal, "", "bytes to base64 strings");

                if (protobuf.util.isNode) {
                    const bytesVal = Message.toObject(msg, { bytes: Buffer }).bytesVal; 
                    test.ok(Buffer.isBuffer(bytesVal), "bytes to buffers");
                    test.equal(bytesVal.length, 0, "empty buffer");
                }

                test.end();
            });            

        });

        test.test(test.name + " - Message.fromObject", function(test) {

            var obj = {
                uint64Val: 1,
                uint64Repeated: [1, "2"],
                bytesVal: "MTEx",
                bytesRepeated: ["MTEx", [49, 49, 49]],
                enumVal: "ONE",
                enumRepeated: [2, "TWO", 100],
                int64Map: {
                    a: 2,
                    b: "3"
                }
            };
            var msg = Message.fromObject(obj);

            test.same(Message.ctor.fromObject(obj), msg, "should convert the same using the static and the instance method");
            test.equal(Message.fromObject(msg), msg, "should just return the object if already a runtime message");

            var buf = protobuf.util.newBuffer(3);
            buf[0] = buf[1] = buf[2] = 49; // "111"

            test.same(msg.uint64Val, { low: 1, high: 0, unsigned: true }, "should set uint64Val from a number");
            test.same(msg.uint64Repeated, [ { low: 1, high: 0, unsigned: true}, { low: 2, high: 0, unsigned: true } ], "should set uint64Repeated from a number and a string");
            test.same(msg.bytesVal, buf, "should set bytesVal from a base64 string");
            test.same(msg.bytesRepeated, [ buf, buf ], "should set bytesRepeated from a base64 string and a plain array");
            test.equal(msg.enumVal, 1, "should set enumVal from a string");
            test.same(msg.enumRepeated, [ 2, 2, 100 ], "should set enumRepeated from a number and a string and preserve unknown value");
            test.same(msg.int64Map, { a: { low: 2, high: 0, unsigned: false }, b: { low: 3, high: 0, unsigned: false } }, "should set int64Map from a number and a string");

            test.end();
        });

        test.test(test.name + " - Message#toJSON", function(test) {
            var msg = Message.create();
            msg.$type = {
                toObject: function(obj, opt) {
                    test.same(opt, protobuf.util.toJSONOptions, "should use toJSONOptions with toJSON");
                    test.end();
                }
            };
            msg.toJSON();
        });

        test.end();
    });

});
