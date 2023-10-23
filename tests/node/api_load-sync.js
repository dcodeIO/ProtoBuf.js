var tape = require("tape");

var protobuf = require("../..");

tape.test("load sync", function(test) {
    var root = protobuf.loadSync("tests/data/common.proto");

    test.ok(root.lookup("Something"), "should parse message Something");

    test.throws(function() {
        protobuf.loadSync("tests/data/__NOTFOUND__", root);
    }, Error, "should throw if not found");

    var isNode = protobuf.util.isNode;
    try {
        protobuf.util.isNode = false;
        test.throws(function() {
            protobuf.loadSync("tests/data/common.proto");
        }, "should throw when not running under node");
    } finally {
        protobuf.util.isNode = isNode;
    }

    test.throws(function() {
        protobuf.loadSync("tests/data/invalid.proto");
    }, Error, "should throw when trying to load an invalid proto");

    test.throws(function() {
        protobuf.loadSync("tests/data/indirect-invalid.proto");
    }, Error, "should throw when trying to load an indirectly invalid proto");

    test.throws(function() {
        protobuf.loadSync("tests/data/invalid.json");
    }, Error, "should throw when trying to load invalid json");

    root = protobuf.loadSync("tests/data/weak.proto");
    test.ok(root.files.indexOf("tests/data/NOT_FOUND") > -1, "should ignore missing weak protos and remember them");
    test.ok(root.files.indexOf("google/protobuf/any.proto") > -1, "should still load other protos when ignoring weak protos");

    test.end();
});

tape.test("should load bundled definitions even if resolvePath method was overrided", function(test) {
    var protoFilePath = "tests/data/common.proto";
    var root = new protobuf.Root();
    root.resolvePath = (origin, target) => origin === "" && target === protoFilePath ? target : null;

    root.loadSync(protoFilePath);

    test.ok(root.lookup("Something"), "should parse message Something");
    test.end();
});
