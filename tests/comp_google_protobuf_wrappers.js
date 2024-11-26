var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({})
    .addJSON(protobuf.common["google/protobuf/wrappers.proto"].nested)
    .resolveAll();

var Long = protobuf.util.Long;

var DoubleValue = root.lookupType("protobuf.DoubleValue");

tape.test("google.protobuf.DoubleValue", function(test) {
    var doubleVal = 12.345;
    var doubleObj = {
        value: doubleVal
    }
    var double = DoubleValue.create(doubleObj)

    var doubleValueFromObj = DoubleValue.fromObject(doubleObj);

    test.ok(doubleValueFromObj instanceof DoubleValue.ctor, "should be of the type DoubleValue.");
    test.same(doubleValueFromObj, double, "Conversion from object should work.");

    var doubleValueFromVal = DoubleValue.fromObject(doubleVal)
    test.ok(doubleValueFromVal instanceof DoubleValue.ctor, "should be of the type DoubleValue.");

    test.same(doubleValueFromVal, double, "Conversion from double string should work.");

    var convertedDoubleValue = DoubleValue.toObject(double, { standard: true });
    test.same(convertedDoubleValue, doubleVal, "Conversion to double should work.");

    var convertedDoubleValue = DoubleValue.toObject(double);
    test.same(convertedDoubleValue, doubleValueFromObj, "Conversion to the object should work");

    test.end();
});

var FloatValue = root.lookupType("protobuf.FloatValue");

tape.test("google.protobuf.FloatValue", function(test) {
    var floatVal = 12.345;
    var floatObj = {
        value: floatVal
    }
    var float = FloatValue.create(floatObj)

    var floatValueFromObj = FloatValue.fromObject(floatObj);

    test.ok(floatValueFromObj instanceof FloatValue.ctor, "should be of the type FloatValue.");
    test.same(floatValueFromObj, float, "Conversion from object should work.");

    var floatValueFromVal = FloatValue.fromObject(floatVal)
    test.ok(floatValueFromVal instanceof FloatValue.ctor, "should be of the type FloatValue.");

    test.same(floatValueFromVal, float, "Conversion from float string should work.");

    var convertedFloatValue = FloatValue.toObject(float, { standard: true });
    test.same(convertedFloatValue, floatVal, "Conversion to float should work.");

    var convertedFloatValue = FloatValue.toObject(float);
    test.same(convertedFloatValue, floatValueFromObj, "Conversion to the object should work");

    test.end();
});

var Int64Value = root.lookupType("protobuf.Int64Value");

tape.test("google.protobuf.Int64Value", function(test) {
    var int64Val = "12";
    var int64Obj = {
        value: new Long(12, 0)
    }
    var int64 = Int64Value.create(int64Obj)

    var int64ValueFromObj = Int64Value.fromObject(int64Obj);

    test.ok(int64ValueFromObj instanceof Int64Value.ctor, "should be of the type Int64Value.");
    test.same(int64ValueFromObj, int64, "Conversion from object should work.");

    var int64ValueFromVal = Int64Value.fromObject(int64Val)
    test.ok(int64ValueFromVal instanceof Int64Value.ctor, "should be of the type Int64Value.");

    test.same(int64ValueFromVal, int64, "Conversion from int64 string should work.");

    var convertedInt64Value = Int64Value.toObject(int64, { standard: true });
    test.same(convertedInt64Value, int64Val, "Conversion to int64 should work.");

    var convertedInt64Value = Int64Value.toObject(int64);
    test.same(convertedInt64Value, int64ValueFromObj, "Conversion to the object should work");

    var int64Val = "-1";
    var int64Obj = {
        value: new Long(-1, -1)
    }
    var int64 = Int64Value.create(int64Obj)

    var int64ValueFromObj = Int64Value.fromObject(int64Obj);

    test.ok(int64ValueFromObj instanceof Int64Value.ctor, "should be of the type Int64Value.");
    test.same(int64ValueFromObj, int64, "Conversion from object should work.");

    var int64ValueFromVal = Int64Value.fromObject(int64Val)
    test.ok(int64ValueFromVal instanceof Int64Value.ctor, "should be of the type Int64Value.");

    test.same(int64ValueFromVal, int64, "Conversion from int64 string should work.");

    var convertedInt64Value = Int64Value.toObject(int64, { standard: true });
    test.same(convertedInt64Value, int64Val, "Conversion to int64 should work.");

    var convertedInt64Value = Int64Value.toObject(int64);
    test.same(convertedInt64Value, int64ValueFromObj, "Conversion to the object should work");

    test.end();
});

var UInt64Value = root.lookupType("protobuf.UInt64Value");

tape.test("google.protobuf.UInt64Value", function(test) {
    var uint64Val = "12";
    var uint64Obj = {
        value: new Long(12, 0, true)
    }
    var uint64 = UInt64Value.create(uint64Obj)

    var uint64ValueFromObj = UInt64Value.fromObject(uint64Obj);

    test.ok(uint64ValueFromObj instanceof UInt64Value.ctor, "should be of the type UInt64Value.");
    test.same(uint64ValueFromObj, uint64, "Conversion from object should work.");

    var uint64ValueFromVal = UInt64Value.fromObject(uint64Val)
    test.ok(uint64ValueFromVal instanceof UInt64Value.ctor, "should be of the type UInt64Value.");

    test.same(uint64ValueFromVal, uint64, "Conversion from uint64 string should work.");

    var convertedUInt64Value = UInt64Value.toObject(uint64, { standard: true });
    test.same(convertedUInt64Value, uint64Val, "Conversion to uint64 should work.");

    var convertedUInt64Value = UInt64Value.toObject(uint64);
    test.same(convertedUInt64Value, uint64ValueFromObj, "Conversion to the object should work");

    test.end();
});

var Int32Value = root.lookupType("protobuf.Int32Value");

tape.test("google.protobuf.Int32Value", function(test) {
    var int32Val = -12;
    var int32Obj = {
        value: int32Val
    }
    var int32 = Int32Value.create(int32Obj)

    var int32ValueFromObj = Int32Value.fromObject(int32Obj);

    test.ok(int32ValueFromObj instanceof Int32Value.ctor, "should be of the type Int32Value.");
    test.same(int32ValueFromObj, int32, "Conversion from object should work.");

    var int32ValueFromVal = Int32Value.fromObject(int32Val)
    test.ok(int32ValueFromVal instanceof Int32Value.ctor, "should be of the type Int32Value.");

    test.same(int32ValueFromVal, int32, "Conversion from int32 string should work.");

    var convertedInt32Value = Int32Value.toObject(int32, { standard: true });
    test.same(convertedInt32Value, int32Val, "Conversion to int32 should work.");

    var convertedInt32Value = Int32Value.toObject(int32);
    test.same(convertedInt32Value, int32ValueFromObj, "Conversion to the object should work");

    test.end();
});

var UInt32Value = root.lookupType("protobuf.UInt32Value");

tape.test("google.protobuf.UInt32Value", function(test) {
    var uint32Val = 12;
    var uint32Obj = {
        value: uint32Val
    }
    var uint32 = UInt32Value.create(uint32Obj)

    var uint32ValueFromObj = UInt32Value.fromObject(uint32Obj);

    test.ok(uint32ValueFromObj instanceof UInt32Value.ctor, "should be of the type UInt32Value.");
    test.same(uint32ValueFromObj, uint32, "Conversion from object should work.");

    var uint32ValueFromVal = UInt32Value.fromObject(uint32Val)
    test.ok(uint32ValueFromVal instanceof UInt32Value.ctor, "should be of the type UInt32Value.");

    test.same(uint32ValueFromVal, uint32, "Conversion from uint32 string should work.");

    var convertedUInt32Value = UInt32Value.toObject(uint32, { standard: true });
    test.same(convertedUInt32Value, uint32Val, "Conversion to uint32 should work.");

    var convertedUInt32Value = UInt32Value.toObject(uint32);
    test.same(convertedUInt32Value, uint32ValueFromObj, "Conversion to the object should work");

    test.end();
});

var StringValue = root.lookupType("protobuf.StringValue");

tape.test("google.protobuf.StringValue", function(test) {
    var stringVal = "random";
    var stringObj = {
        value: stringVal
    }
    var string = StringValue.create(stringObj)

    var stringValueFromObj = StringValue.fromObject(stringObj);

    test.ok(stringValueFromObj instanceof StringValue.ctor, "should be of the type StringValue.");
    test.same(stringValueFromObj, string, "Conversion from object should work.");

    var stringValueFromVal = StringValue.fromObject(stringVal)
    test.ok(stringValueFromVal instanceof StringValue.ctor, "should be of the type StringValue.");

    test.same(stringValueFromVal, string, "Conversion from string string should work.");

    var convertedStringValue = StringValue.toObject(string, { standard: true });
    test.same(convertedStringValue, stringVal, "Conversion to string should work.");

    var convertedStringValue = StringValue.toObject(string);
    test.same(convertedStringValue, stringValueFromObj, "Conversion to the object should work");

    test.end();
});

var BoolValue = root.lookupType("protobuf.BoolValue");

tape.test("google.protobuf.BoolValue", function(test) {
    var boolVal = false;
    var boolObj = {
        value: boolVal
    }
    var bool = BoolValue.create(boolObj)

    var boolValueFromObj = BoolValue.fromObject(boolObj);

    test.ok(boolValueFromObj instanceof BoolValue.ctor, "should be of the type BoolValue.");
    test.same(boolValueFromObj, bool, "Conversion from object should work.");

    var boolValueFromVal = BoolValue.fromObject(boolVal)
    test.ok(boolValueFromVal instanceof BoolValue.ctor, "should be of the type BoolValue.");

    test.same(boolValueFromVal, bool, "Conversion from bool bool should work.");

    var convertedBoolValue = BoolValue.toObject(bool, { standard: true });
    test.same(convertedBoolValue, boolVal, "Conversion to bool should work.");

    var convertedBoolValue = BoolValue.toObject(bool);
    test.same(convertedBoolValue, boolValueFromObj, "Conversion to the object should work");

    test.end();
});
