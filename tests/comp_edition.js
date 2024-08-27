var tape = require("tape");

var protobuf  = require("..");

var proto = "edition = \"2023\";\
import \"google/protobuf/cpp_features.proto\";\
import \"google/protobuf/go_features.proto\";\
import \"google/protobuf/java_features.proto\";\
option features.field_presence = EXPLICIT;\
option features.enum_type = CLOSED;\
option features.repeated_field_encoding = EXPANDED;\
option features.json_format = LEGACY_BEST_EFFORT;\
option features.utf8_validation = NONE;\
option features.(pb.cpp).legacy_closed_enum = true;\
option features.(pb.go).legacy_unmarshal_json_enum = true;\
option features.(pb.java).legacy_closed_enum = true;\
message A {\
    repeated int32 b = 1 [features.repeated_field_encoding = EXPANDED];\
}";

tape.test("edition", function(test) {
    var result = protobuf.parse(proto);
    test.equal(result.edition, "2023", "should parse edition");
    test.equal(result.syntax, "proto3", "should fall back to proto3 for now");
    var root = result.root;
    root.resolveAll();
    test.pass("should resolve without errors");
    test.same(root.options, {
        'features.field_presence': 'EXPLICIT',
        'features.enum_type': 'CLOSED',
        'features.repeated_field_encoding': 'EXPANDED',
        'features.json_format': 'LEGACY_BEST_EFFORT',
        'features.utf8_validation': 'NONE',
        'features.(pb.cpp).legacy_closed_enum': true,
        'features.(pb.go).legacy_unmarshal_json_enum': true,
        'features.(pb.java).legacy_closed_enum': true
    }, "should parse file-level edition options");
    test.same(root.lookup("A.b").options, {
        'features.repeated_field_encoding': 'EXPANDED'
    }, "should parse field-level edition options");
    test.end();
});
