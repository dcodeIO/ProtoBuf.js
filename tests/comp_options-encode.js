var tape = require("tape");

var protobuf = require("..");


tape.test("Encoder options", function(test) {
  var defaultOrderRoot = protobuf.loadSync("tests/data/options_test_default_order.proto");
  var originalOrderRoot = protobuf.loadSync("tests/data/options_test_original_order.proto");

  test.test(test.name + " - default order", function(test) {
    var TestUnordered = defaultOrderRoot.lookup('TestUnordered')
    var obj = TestUnordered.fromObject({ fieldA: 1, fieldB: 2, fieldC: 3 });
    var encodedObj = TestUnordered.encode(obj).finish();
    var encodedObjBase64 = protobuf.util.base64.encode(encodedObj, 0, encodedObj.length);
    test.equal(encodedObjBase64,
      "CAEQAxgC",
      "should encode with fields sorted by ID"
    );

    test.end();
  });

  test.test(test.name + " - original order", function(test) {
    var TestUnordered = originalOrderRoot.lookup('TestUnordered')
    var obj = TestUnordered.fromObject({ fieldA: 1, fieldB: 2, fieldC: 3 });
    var encodedObj = TestUnordered.encode(obj).finish();
    var encodedObjBase64 = protobuf.util.base64.encode(encodedObj, 0, encodedObj.length);
    test.equal(encodedObjBase64,
      "CAEYAhAD",
      "should encode with fields left with their original order"
    );

    test.end();
  });
});