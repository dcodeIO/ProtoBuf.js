const tape = require("tape");

const protobuf = require("..");

const proto = `
package greeter;

syntax = "proto2";

service greeter {
    rpc SayHello (HelloRequest) returns (HelloReply) {}
}
message HelloRequest {
    optional string name = 1;
}
message HelloReply {
    optional string message = 1;
}
`
tape.test("test when package name is the same with service name", function(test) {

    const root = protobuf.parse(proto).root;

    test.ok(root.lookupService("greeter"), "should lookup services");

    test.end();
});
