var tape = require("tape");
var protobuf = require("..");

tape.test("Options", function (test) {
    var root = protobuf.loadSync("tests/data/options_test.proto");

    test.test(test.name + " - field options (Int)", function (test) {
        var TestFieldOptionsInt = root.lookup("TestFieldOptionsInt");
        test.equal(TestFieldOptionsInt.fields.field1.options["(fo_rep_int)"], 2, "should take second repeated int option");
        test.same(TestFieldOptionsInt.fields.field1.parsedOptions, [{"(fo_rep_int)": 1}, {"(fo_rep_int)": 2}], "should take all repeated int option");

        test.equal(TestFieldOptionsInt.fields.field2.options["(fo_single_int)"], 3, "should correctly parse single int option");
        test.same(TestFieldOptionsInt.fields.field2.parsedOptions, [{"(fo_single_int)": 3}], "should correctly parse single int option");
        test.end();
    });

    test.test(test.name + " - message options (Int)", function (test) {
        var TestMessageOptionsInt = root.lookup("TestMessageOptionsInt");
        test.equal(TestMessageOptionsInt.options["(mo_rep_int)"], 2, "should take second repeated int message option");
        test.equal(TestMessageOptionsInt.options["(mo_single_int)"], 3, "should correctly parse single int message option");
        test.same(TestMessageOptionsInt.parsedOptions, [{"(mo_rep_int)": 1}, {"(mo_rep_int)": 2}, {"(mo_single_int)": 3}], "should take all int message option");
        test.end();
    });

    test.test(test.name + " - field options (Message)", function (test) {
        var TestFieldOptionsMsg = root.lookup("TestFieldOptionsMsg");
        test.equal(TestFieldOptionsMsg.fields.field1.options["(fo_rep_msg).value"], 4, "should take second repeated message option");
        test.equal(TestFieldOptionsMsg.fields.field1.options["(fo_rep_msg).rep_value"], 6, "should take second repeated int in second repeated option");
        test.same(TestFieldOptionsMsg.fields.field1.parsedOptions, [
            {"(fo_rep_msg)": {value: 1, rep_value: [2, 3]}},
            {"(fo_rep_msg)": {value: 4, rep_value: [5, 6]}}], "should take all repeated message option");
        test.equal(TestFieldOptionsMsg.fields.field2.options["(fo_single_msg).value"], 7, "should correctly parse single msg option");
        test.equal(TestFieldOptionsMsg.fields.field2.options["(fo_single_msg).rep_value"], 9, "should take second repeated int in single msg option");
        test.same(TestFieldOptionsMsg.fields.field2.parsedOptions, [{"(fo_single_msg)": {value: 7, rep_value: [8,9]}}], "should take all repeated message option");
        test.end();
    });

    test.test(test.name + " - message options (Message)", function (test) {
        var TestMessageOptionsMsg = root.lookup("TestMessageOptionsMsg");
        test.equal(TestMessageOptionsMsg.options["(mo_rep_msg).value"], 5, "should take last repeated message option");
        test.equal(TestMessageOptionsMsg.options["(mo_rep_msg).rep_value"], 8, "should take last repeated int in last repeated option");
        test.equal(TestMessageOptionsMsg.options["(mo_single_msg).value"], 7, "should correctly parse single msg option");
        test.equal(TestMessageOptionsMsg.options["(mo_single_msg).rep_value"], 9, "should take second repeated int in single msg option");
        test.same(TestMessageOptionsMsg.parsedOptions, [
            {"(mo_rep_msg)": {value: 1, rep_value: [2, 3]}},
            {"(mo_rep_msg)": {value: 4, rep_value: [5, 6]}},
            {"(mo_rep_msg)": {value: 5, rep_value: [7, 8]}},
            {"(mo_single_msg)": {value: 7, rep_value: [8, 9]}},
        ], "should take all message options");
        test.end();
    });

    test.test(test.name + " - field options (Nested)", function (test) {
        var TestFieldOptionsNested = root.lookup("TestFieldOptionsNested");
        test.equal(TestFieldOptionsNested.fields.field1.options["(fo_rep_msg).value"], 1, "should merge repeated options messages");
        test.equal(TestFieldOptionsNested.fields.field1.options["(fo_rep_msg).rep_value"], 3, "should parse in any order");
        test.equal(TestFieldOptionsNested.fields.field1.options["(fo_rep_msg).nested.nested.value"], "x", "should correctly parse nested field options");
        test.equal(TestFieldOptionsNested.fields.field1.options["(fo_rep_msg).rep_nested.value"], "z", "should take second repeated nested options");
        test.equal(TestFieldOptionsNested.fields.field1.options["(fo_rep_msg).nested.value"], "w", "should merge nested options");
        test.same(TestFieldOptionsNested.fields.field1.parsedOptions,[
            {"(fo_rep_msg)": {value: 1, nested: { nested: { value: "x"}}, rep_nested: [{value: "y"},{value: "z"}], rep_value: 3}},
            {"(fo_rep_msg)": { nested: { value: "w"}}},
        ],"should parse all options including nested");

        test.equal(TestFieldOptionsNested.fields.field2.options["(fo_single_msg).nested.value"], "x", "should correctly parse nested property name");
        test.equal(TestFieldOptionsNested.fields.field2.options["(fo_single_msg).rep_nested.value"], "y", "should take second repeated nested options");
        test.same(TestFieldOptionsNested.fields.field2.parsedOptions, [{
            "(fo_single_msg)": {
                nested: {value: "x"},
                rep_nested: [{value: "x"}, {value: "y"}]
            }
        }
        ], "should parse single nested option correctly");

        test.equal(TestFieldOptionsNested.fields.field3.options["(fo_single_msg).nested.value"], "x", "should correctly parse nested field options");
        test.equal(TestFieldOptionsNested.fields.field3.options["(fo_single_msg).nested.nested.nested.value"], "y", "should correctly parse several nesting levels");
        test.same(TestFieldOptionsNested.fields.field3.parsedOptions, [{
            "(fo_single_msg)": {
                nested: {
                    value: "x",
                    nested: {nested: {value: "y"}}
                }
            }
        }], "should correctly parse several nesting levels");

        test.end();
    });

    test.test(test.name + " - message options (Nested)", function (test) {
        var TestMessageOptionsNested = root.lookup("TestMessageOptionsNested");
        test.equal(TestMessageOptionsNested.options["(mo_rep_msg).value"], 1, "should merge repeated options messages");
        test.equal(TestMessageOptionsNested.options["(mo_rep_msg).rep_value"], 3, "should parse in any order");
        test.equal(TestMessageOptionsNested.options["(mo_rep_msg).nested.nested.value"], "x", "should correctly parse nested field options");
        test.equal(TestMessageOptionsNested.options["(mo_rep_msg).rep_nested.value"], "z", "should take second repeated nested options");
        test.equal(TestMessageOptionsNested.options["(mo_rep_msg).nested.value"], "w", "should merge nested options");

        test.equal(TestMessageOptionsNested.options["(mo_single_msg).nested.value"], "x", "should correctly parse nested property name");
        test.equal(TestMessageOptionsNested.options["(mo_single_msg).rep_nested.value"], "y", "should take second repeated nested options");
        test.equal(TestMessageOptionsNested.options["(mo_single_msg).rep_nested.nested.nested.value"], "y", "should correctly parse several nesting levels");

        test.same(TestMessageOptionsNested.parsedOptions, [
            {
                "(mo_rep_msg)": {
                    value: 1,
                    nested: {nested: {value: "x"}},
                    rep_nested: [{value: "y"}, {value: "z"}],
                    rep_value: 3
                }
            },
            {"(mo_rep_msg)": {nested: {value: "w"}}},
            {
                "(mo_single_msg)": {
                    nested: {value: "x"},
                    rep_nested: [{value: "x", nested: {nested: {value: "y"}}}, {value: "y"}]
                }
            }
        ], "should correctly parse all nested message options");
        test.end();
    });

    test.test(test.name + " - rpc options (Nested)", function (test) {
        var TestOptionsRpc = root.lookup("TestOptionsRpc");
        test.equal(TestOptionsRpc.options["(method_rep_msg).value"], 1, "should merge repeated options messages");
        test.equal(TestOptionsRpc.options["(method_rep_msg).rep_value"], 3, "should parse in any order");
        test.equal(TestOptionsRpc.options["(method_rep_msg).nested.nested.value"], "x", "should correctly parse nested field options");
        test.equal(TestOptionsRpc.options["(method_rep_msg).rep_nested.value"], "z", "should take second repeated nested options");
        test.equal(TestOptionsRpc.options["(method_rep_msg).nested.value"], "w", "should merge nested options");

        test.equal(TestOptionsRpc.options["(method_single_msg).nested.value"], "x", "should correctly parse nested property name");
        test.equal(TestOptionsRpc.options["(method_single_msg).rep_nested.value"], "y", "should take second repeated nested options");
        test.equal(TestOptionsRpc.options["(method_single_msg).rep_nested.nested.nested.value"], "y", "should correctly parse several nesting levels");

        var expectedParsedOptions = [
            {
                "(method_rep_msg)": {
                    value: 1,
                    empty_repeated: [],
                    nested: {nested: {value: "x"}},
                    rep_nested: [{value: "y"}, {value: "z"}],
                    rep_value: 3
                }
            },
            {"(method_rep_msg)": {nested: {value: "w"}}},
            {
                "(method_single_msg)": {
                    nested: {value: "x"},
                    rep_nested: [{value: "x", nested: {nested: {value: "y"}}}, {value: "y"}]
                }
            }
        ];

        test.same(TestOptionsRpc.parsedOptions, expectedParsedOptions, "should correctly parse all nested message options");
        var jsonTestOptionsRpc = TestOptionsRpc.toJSON();
        test.same(jsonTestOptionsRpc.parsedOptions, expectedParsedOptions, "should correctly store all nested method options in JSON");
        var rootFromJson = protobuf.Root.fromJSON(root.toJSON());
        var TestOptionsRpcFromJson = rootFromJson.lookup("TestOptionsRpc");
        test.same(TestOptionsRpcFromJson.parsedOptions, expectedParsedOptions, "should correctly read all nested method options from JSON");
        test.end();
    });

    test.test(test.name + " - invalid option", function (test) {
        test.throws(() => { protobuf.parse("option (foo).whatever = {")});
        test.end();
    });

    test.end();
});
