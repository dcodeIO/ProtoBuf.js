var tape = require("tape");

var protobuf = require("..");

var root = protobuf.Root.fromJSON({
    nested: {
        Foo: {
            fields: {
                foo: {
                    id: 1,
                    type: "google.protobuf.Value"
                }
            }
        }
    }
})
    .addJSON(protobuf.common["google/protobuf/struct.proto"].nested)
    .resolveAll();

var Value = root.lookupType("protobuf.Value"),
    Foo = root.lookupType(".Foo");

tape.test.only("google.protobuf.Value", function(test) {
    // null
    var foo = Foo.fromObject({foo: null});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "nullValue");
    test.same(foo.foo.nullValue, 0);

    var obj = Foo.toObject(foo);
    test.same(obj.foo, null);

    // number
    foo = Foo.fromObject({foo: 1});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "numberValue");
    test.same(foo.foo.numberValue, 1);

    obj = Foo.toObject(foo);
    test.same(obj.foo, 1);

    // string
    foo = Foo.fromObject({foo: "a"});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "stringValue");
    test.same(foo.foo.stringValue, "a");

    obj = Foo.toObject(foo);
    test.same(obj.foo, "a");

    // boolean
    foo = Foo.fromObject({foo: false});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "boolValue");
    test.same(foo.foo.boolValue, false);

    obj = Foo.toObject(foo);
    test.same(obj.foo, false);

    // object
    foo = Foo.fromObject({foo: {a: 1}});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "structValue");
    test.same(foo.foo.structValue, {fields: {a: {numberValue: 1}}});

    obj = Foo.toObject(foo);
    test.same(obj.foo, {a: 1});

    // list
    foo = Foo.fromObject({foo: [null, 1, "a", true]});
    test.ok(foo.foo instanceof Value.ctor, "foo should be Value");
    test.same(foo.foo.kind, "listValue");
    test.same(foo.foo.listValue, {values: [{nullValue: 0}, {numberValue: 1}, {stringValue: "a"}, {boolValue: true}]});

    obj = Foo.toObject(foo);
    test.same(obj.foo, [null, 1, "a", true]);

    test.end();
});
