var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({
    nested: {
        Foo: {
            fields: {
                foo: {
                    id: 1,
                    type: "google.protobuf.Struct"
                }
            }
        }
    }
})
    .addJSON(protobuf.common["google/protobuf/struct.proto"].nested)
    .resolveAll();

var Struct = root.lookupType("protobuf.Struct"),
    Value = root.lookupType("protobuf.Value"),
    Foo = root.lookupType(".Foo");

tape.test("google.protobuf.Struct", function(test) {
    var foo = Foo.fromObject({foo: {
        a: null,
        b: 1,
        c: 'd',
        e: false,
        f: {g: 2},
        h: [null, 3, 'i', true]
    }});

    test.ok(foo.foo instanceof Struct.ctor, "foo should be Struct");
    Object.keys(foo.foo.fields).forEach(function(k) {
        test.ok(foo.foo.fields[k] instanceof Value.ctor, "foo." + k + " should be Value");
    });
    test.same(foo, {foo: {
        fields: {
            a: {nullValue: 0 },
            b: {numberValue: 1},
            c: {stringValue: "d"},
            e: {boolValue: false},
            f: {structValue: {fields: {
                g: {numberValue: 2}
            }}},
            h: {listValue: {values: [
                {nullValue: 0},
                {numberValue: 3},
                {stringValue: "i"},
                {boolValue: true}
            ]}}
        }
    }});

    var obj = Foo.toObject(foo);
    test.same(obj, {foo: {
        a: null,
        b: 1,
        c: 'd',
        e: false,
        f: {g: 2},
        h: [null, 3, 'i', true]
    }});

    test.end();
});
