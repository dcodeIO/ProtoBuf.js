var tape = require("tape");

var protobuf = require("..");

var proto = ";\
message A { ; required string a = 2;; }\
enum B { ; b = 1;; };;\
service C { ; rpc c0 (A) returns (A) { ; };; };;";

tape.test("empty statements", function(test) {
    protobuf.parse(proto);
    test.pass("should parse without errors");
    test.end();
});
