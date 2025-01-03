"use strict";
module.exports = typescript;

var UglifyJS   = require("uglify-js"),
    espree     = require("espree"),
    escodegen  = require("escodegen"),
    estraverse = require("estraverse"),
    protobuf   = require("protobufjs");

var Type      = protobuf.Type,
    Service   = protobuf.Service,
    Enum      = protobuf.Enum,
    Namespace = protobuf.Namespace,
    util      = protobuf.util;

var out = [];
var indent = 0;
var config = {};

typescript.description = "TypeScript module without reflection";

function typescript(root, options, callback) {
    config = options;
    try {
        var aliases = [];
        if (config.decode)
            aliases.push("Reader");
        if (config.encode)
            aliases.push("Writer");
        aliases.push("util");
        if (aliases.length) {
            push("/* eslint-disable */");
            push("import * as $protobuf from \"protobufjs/minimal\"");
            if (config.comments)
                push("// Common aliases");
            push("const " + aliases.map(function(name) { return "$" + name + " = $protobuf." + name; }).join(", ") + ";");
            push("");
        }
        if (config.comments) {
            if (root.comment) {
                pushComment("@fileoverview " + root.comment);
                push("");
            }
        }
        buildNamespace(null, root);
        return callback(null, out.join("\n"));
    } catch (err) {
        return callback(err);
    } finally {
        out = [];
        indent = 0;
        config = {};
    }
}

function push(line) {
    if (line === "")
        return out.push("");
    var ind = "";
    for (var i = 0; i < indent; ++i)
        ind += "    ";
    return out.push(ind + line);
}

function pushComment(lines) {
    if (!config.comments)
        return;
    var split = [];
    for (var i = 0; i < lines.length; ++i)
        if (lines[i] != null && lines[i].substring(0, 8) !== "@exclude")
            Array.prototype.push.apply(split, lines[i].split(/\r?\n/g));
    push("/**");
    split.forEach(function(line) {
        if (line === null)
            return;
        push(" * " + line.replace(/\*\//g, "* /"));
    });
    push(" */");
}

function exportName(object, asInterface) {
    if (asInterface) {
        if (object.__interfaceName)
            return object.__interfaceName;
    } else if (object.__exportName)
        return object.__exportName;
    var parts = object.fullName.substring(1).split("."),
        i = 0;
    while (i < parts.length)
        parts[i] = escapeName(parts[i++]);
    if (asInterface)
        parts[i - 1] = "I" + parts[i - 1];
    return object[asInterface ? "__interfaceName" : "__exportName"] = parts.join(".");
}

function escapeName(name) {
    if (!name)
        return "$root";
    return util.isReserved(name) ? name + "_" : name;
}

function aOrAn(name) {
    return ((/^[hH](?:ou|on|ei)/.test(name) || /^[aeiouAEIOU][a-z]/.test(name)) && !/^us/i.test(name)
        ? "an "
        : "a ") + name;
}

function buildNamespace(ref, ns) {
    if (!ns)
        return;

    if (ns instanceof Type)
        buildType(ref, ns);
    else if (ns instanceof Service)
        buildService(undefined, ns);

    if (ns.nestedArray.length > 0 && ns.name !== "") {
        push("");
        pushComment([
            ns.comment || "Namespace " + ns.name + ".",
            ns.parent instanceof protobuf.Root ? "@exports " + escapeName(ns.name) : "@memberof " + exportName(ns.parent),
            "@namespace"
        ]);
        push("export namespace " + escapeName(ns.name) + " {");
        ++indent;
    }

    ns.nestedArray.forEach(function(nested) {
        if (nested instanceof Enum)
            buildEnum(ns.name, nested);
        else if (nested instanceof Namespace)
            buildNamespace(ns.name, nested);
    });

    if (ns.nestedArray.length > 0 && ns.name !== "") {
        --indent;
        push("}");
    }
}

var reduceableBlockStatements = {
    IfStatement: true,
    ForStatement: true,
    WhileStatement: true
};

var shortVars = {
    "r": "reader",
    "w": "writer",
    "m": "message",
    "_m": "_message",
    "t": "tag",
    "l": "length",
    "c": "end", "c2": "end2",
    "k": "key",
    "ks": "keys", "ks2": "keys2",
    "e": "error",
    "f": "impl",
    "o": "options",
    "_o": "_options",
    "d": "object",
    "n": "long",
    "p": "properties"
};

function beautifyCode(code) {
    // Add semicolons
    code = UglifyJS.minify(code, {
        compress: false,
        mangle: false,
        output: { beautify: true }
    }).code;
    // Properly beautify
    var ast = espree.parse(code);
    estraverse.replace(ast, {
        enter: function(node, parent) {
            // rename short vars
            if (node.type === "Identifier" && (parent.property !== node || parent.computed) && shortVars[node.name])
                return {
                    "type": "Identifier",
                    "name": shortVars[node.name]
                };
            // replace var with let if es6
            if (node.type === "VariableDeclaration" && node.kind === "var") {
                node.kind = "let";
                return undefined;
            }
            // remove braces around block statements with a single child
            if (node.type === "BlockStatement" && reduceableBlockStatements[parent.type] && node.body.length === 1)
                return node.body[0];
            return undefined;
        }
    });
    code = escodegen.generate(ast, {
        format: {
            newline: "\n",
            quotes: "double"
        }
    });
    // Add id, wireType comments
    if (config.comments)
        code = code.replace(/\.uint32\((\d+)\)/g, function($0, $1) {
            var id = $1 >>> 3,
                wireType = $1 & 7;
            return ".uint32(/* id " + id + ", wireType " + wireType + " =*/" + $1 + ")";
        });
    return code;
}

var renameVars = {
    "Writer": "$Writer",
    "Reader": "$Reader",
    "util": "$util"
};

function buildFunction(type, functionName, gen, paramMap, returnType) {
    var code = gen.toString(functionName)
        .replace(/((?!\.)types\[\d+])(\.values)/g, "$1"); // enums: use types[N] instead of reflected types[N].values

    var ast = espree.parse(code);
    /* eslint-disable no-extra-parens */
    estraverse.replace(ast, {
        enter: function(node, parent) {
            // enclose case statements in blocks
            if (node.type === "SwitchCase" && node.consequent.length > 0) {
                return {
                    "type": "SwitchCase",
                    test: node.test,
                    "consequent":[ {
                        "type": "BlockStatement",
                        "body": node.consequent
                    }]
                };
            }
            // rename vars
            if (
                node.type === "Identifier" && renameVars[node.name]
                && (
                    (parent.type === "MemberExpression" && parent.object === node)
                 || (parent.type === "BinaryExpression" && parent.right === node)
                )
            )
                return {
                    "type": "Identifier",
                    "name": renameVars[node.name]
                };
            // replace this.ctor with the actual ctor
            if (
                node.type === "MemberExpression"
             && node.object.type === "ThisExpression"
             && node.property.type === "Identifier" && node.property.name === "ctor"
            )
                return {
                    "type": "Identifier",
                    "name": type.fullName.slice(1)
                };
            // replace types[N] with the field's actual type
            if (
                node.type === "MemberExpression"
             && node.object.type === "Identifier" && node.object.name === "types"
             && node.property.type === "Literal"
            )
                return {
                    "type": "Identifier",
                    "name": type.fieldsArray[node.property.value].resolvedType.fullName.slice(1)
                };
            return undefined;
        }
    });
    /* eslint-enable no-extra-parens */
    code = escodegen.generate(ast, {
        format: {
            newline: "\n",
            quotes: "double"
        }
    });

    if (config.beautify)
        code = beautifyCode(code);

    code = code.replace(/ {4}/g, "\t");

    var isCtor = functionName === type.name;

    var lines = code.split(/\n/g);
    if (paramMap)
        Object.entries(paramMap).forEach(function (param) {
            lines[0] = lines[0].replace(new RegExp("(\\(|, )(_)?" + param[0]), "$1$2" + param[0] + (param[1].optional ? "?" : "") + ": " + param[1].type);
        });
    if (returnType) {
        lines[0] = lines[0].replace(/\) {/, "): " + returnType.type + " {");
    }
    if (isCtor) // constructor
        push(lines[0].replace(new RegExp("^function " + type.name), "constructor"));
    else
        push(lines[0].replace(/^function /, "public static "));
    lines.slice(1, lines.length - 1).forEach(function(line) {
        var prev = indent;
        var i = 0;
        while (line.charAt(i++) === "\t")
            ++indent;
        push(line.trim()
            .replace(/^let (\S+) = {};$/, "let $1: Record<string, any> = {};")
            .replace("$util.Long.", "($util.Long as any).")
            .replace(".int32(keys[i])", ".int32(keys[i] as any)")
            .replace("reader.int64()", "(reader.int64() as any)")
            .replace("reader.sint64()", "(reader.sint64() as any)")
            .replace("reader.uint64()", "(reader.uint64() as any)")
            .replace("reader.fixed64()", "(reader.fixed64() as any)")
            .replace("reader.sfixed64()", "(reader.sfixed64() as any)")
            .replace(
                /\$util\.isInteger\(([^)]*?)\.low\)/,
                "$util.isInteger(($1 as any).low)"
            )
            .replace(
                /\$util\.isInteger\(([^)]*?)\.high\)/,
                "$util.isInteger(($1 as any).high)"
            )
            .replace(
                /new \$util\.LongBits\(([^)]*?)\.low >>> 0, ([^)]?)\.high >>> 0\)/,
                "new $util.LongBits(($1 as any).low >>> 0, ($2 as any).high >>> 0)"
            )
            .replace(
                /(message.[^.]*?)\.low >>> 0/,
                "($1 as any).low >>> 0"
            )
            .replace(
                /(message.[^.]*?)\.high >>> 0/,
                "($1 as any).high >>> 0"
            )
            .replace("long.toNumber()", "((long as any).toNumber())")
            .replace(
                /toObject\(([^,]*?), options\)/,
                "toObject($1 as any, options)"
            )
        );
        indent = prev;
    });
    if (isCtor)
        push("}");
    else
        push("}");
}

function toJsType(field, asInterface) {
    var type;

    switch (field.type) {
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            type = "number";
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            type = config.forceLong ? "Long" : config.forceNumber ? "number" : "number | Long";
            break;
        case "bool":
            type = "boolean";
            break;
        case "string":
            type = "string";
            break;
        case "bytes":
            type = "Uint8Array";
            break;
        default:
            if (field.resolve().resolvedType)
                type = exportName(field.resolvedType, !(field.resolvedType instanceof protobuf.Enum || config.forceMessage || !asInterface));
            else
                type = "*"; // should not happen
            break;
    }
    if (field.map)
        return "Record<string," + type + ">";
    if (field.repeated)
        return (type.indexOf("|") !== -1 ? "(" + type + ")" : type) + "[]";
    return type;
}


function safePropName(name) {
    var propName = util.safeProp(name);
    return propName.startsWith("[") ? propName.substr(1, propName.length - 2) : propName.substr(1);
}


function buildType(ref, type) {
    push("");

    push("export interface I" + escapeName(type.name) + " {");
    ++indent;

    var firstField = true;
    type.fieldsArray.forEach(function(field) {
        field.resolve();
        var jsType = toJsType(field, true);
        if (field.optional)
            jsType = jsType + " | null";
        if (firstField)
            firstField = false;
        else
            push("");
        if (config.comments) {
            pushComment([
                field.comment || type.name + " " + field.name + "."
            ]);
        }
        var prop = safePropName(field.name);
        push(prop + (field.required ? "" : "?") + ": " + jsType);
    });

    --indent;
    push("}");
    push("");

    push("export class " + escapeName(type.name) + " implements I" + escapeName(type.name) + " {");
    ++indent;

    // fields
    firstField = true;
    type.fieldsArray.forEach(function(field) {
        field.resolve();
        var jsType = toJsType(field, true);
        var isOptional = field.optional && !field.map && !field.repeated && field.resolvedType instanceof Type
        if (firstField)
            firstField = false;
        else
            push("");
        if (config.comments) {
            pushComment([
                field.comment || type.name + " " + field.name + ".",
            ]);
        }
        var prop = safePropName(field.name);
        push("public " + prop + (isOptional ? "?" : "!") + ": " + jsType + (isOptional ? " | null" : ""));
    });

    var paramMap = {};

    // constructor
    push("");
    pushComment([
        "Constructs a new " + type.name + ".",
        type.parent instanceof protobuf.Root ? "@exports " + escapeName(type.name) : "@memberof " + exportName(type.parent),
        "@classdesc " + (type.comment || "Represents " + aOrAn(type.name) + "."),
        config.comments ? "@implements " + escapeName("I" + type.name) : null,
        "@constructor",
        "@param {" + exportName(type, true) + "=} [" + (config.beautify ? "properties" : "p") + "] Properties to set"
    ]);
    paramMap = {};
    paramMap[config.beautify ? "properties" : "p"] = { type: exportName(type, true), optional: true };
    // buildFunction(type, type.name, Type.generateConstructor(type), paramMap);
    push("constructor(properties?: " + exportName(type, true) + ") {");
        ++indent;
        push("if (properties)");
        ++indent;
        push("for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)");
        ++indent;
        push("if ((properties as any)[keys[i]] != null)");
        ++indent;
        push("(this as any)[keys[i]] = (properties as any)[keys[i]];");
        --indent;
        --indent;
        --indent;
        --indent;
    push("}");

    // virtual oneof fields
    type.oneofsArray.forEach(function(oneof) {
        oneof.resolve();
        push("");
        push("private static " + oneof.name + "FieldMap: Record<string, 1 | undefined> = { " + oneof.oneof.map(function(field) { return JSON.stringify(field) + ": 1"; }) + " }");
        push("private static " + oneof.name + "FieldNames = [ " + oneof.oneof.map(JSON.stringify) + " ]");
        push("");
        pushComment([
            oneof.comment || type.name + " " + oneof.name + ".",
            "@member {" + oneof.oneof.map(JSON.stringify).join(" | ") + "|undefined} " + escapeName(oneof.name),
            "@memberof " + exportName(type),
            "@instance"
        ]);
        push("get " + oneof.name + "(): " + oneof.oneof.map(JSON.stringify).join(" | ") + " | undefined {");
        ++indent;
        push("for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)");
        ++indent;
        push("if (" + escapeName(type.name) +"." + oneof.name + "FieldMap[keys[i]] === 1 && (this as any)[keys[i]] != null)");
        ++indent;
        push("return keys[i] as any;");
        --indent;
        --indent;
        push("return undefined;");
        --indent;
        push("}");

        push("set " + oneof.name + "(name: " + oneof.oneof.map(JSON.stringify).join(" | ") + " | undefined) {");
        ++indent;
        push("for (var i = 0; i < " + escapeName(type.name) + "." + oneof.name + "FieldNames.length; ++i)");
        ++indent;
        push("if (" + escapeName(type.name) + "." + oneof.name + "FieldNames[i] !== name)");
        ++indent;
        push("delete (this as any)[" + escapeName(type.name) + "." + oneof.name + "FieldNames[i]];");
        --indent;
        --indent;
        --indent;
        push("}");
    });

    if (config.create) {
        push("");
        pushComment([
            "Creates a new " + type.name + " instance using the specified properties.",
            "@function create",
            "@memberof " + exportName(type),
            "@static",
            "@param {" + exportName(type, true) + "=} [properties] Properties to set",
            "@returns {" + exportName(type) + "} " + type.name + " instance"
        ]);
        push("public static create(properties?: " + exportName(type, true) + ") {");
            ++indent;
            push("return new " + escapeName(type.name) + "(properties);");
            --indent;
        push("}");
    }

    if (config.encode) {
        push("");
        pushComment([
            "Encodes the specified " + type.name + " message. Does not implicitly {@link " + exportName(type) + ".verify|verify} messages.",
            "@function encode",
            "@memberof " + exportName(type),
            "@static",
            "@param {" + exportName(type, !config.forceMessage) + "} " + (config.beautify ? "message" : "m") + " " + type.name + " message or plain object to encode",
            "@param {$protobuf.Writer} [" + (config.beautify ? "writer" : "w") + "] Writer to encode to",
            "@returns {$protobuf.Writer} Writer"
        ]);

        paramMap = {};
        paramMap[config.beautify ? "message" : "m"] = { type: exportName(type, !config.forceMessage) };
        paramMap[config.beautify ? "writer" : "w"] = { type: "$protobuf.Writer", optional: true };
        buildFunction(type, "encode", protobuf.encoder(type), paramMap);

        if (config.delimited) {
            push("");
            pushComment([
                "Encodes the specified " + type.name + " message, length delimited. Does not implicitly {@link " + exportName(type) + ".verify|verify} messages.",
                "@function encodeDelimited",
                "@memberof " + exportName(type),
                "@static",
                "@param {" + exportName(type, !config.forceMessage) + "} message " + type.name + " message or plain object to encode",
                "@param {$protobuf.Writer} [writer] Writer to encode to",
                "@returns {$protobuf.Writer} Writer"
            ]);
            push("public static encodeDelimited(message: " + exportName(type, !config.forceMessage) + ", writer: $protobuf.Writer) {");
            ++indent;
            push("return " + escapeName(type.name) + ".encode(message, writer).ldelim();");
            --indent;
            push("}");
        }
    }

    if (config.decode) {
        push("");
        pushComment([
            "Decodes " + aOrAn(type.name) + " message from the specified reader or buffer.",
            "@function decode",
            "@memberof " + exportName(type),
            "@static",
            "@param {$protobuf.Reader|Uint8Array} " + (config.beautify ? "reader" : "r") + " Reader or buffer to decode from",
            "@param {number} [" + (config.beautify ? "length" : "l") + "] Message length if known beforehand",
            "@returns {" + exportName(type) + "} " + type.name,
            "@throws {Error} If the payload is not a reader or valid buffer",
            "@throws {$protobuf.util.ProtocolError} If required fields are missing"
        ]);
        paramMap = {};
        paramMap[config.beautify ? "reader" : "r"] = { type: "$protobuf.Reader | Uint8Array" };
        paramMap[config.beautify ? "length" : "l"] = { type: "number", optional: true };
        buildFunction(type, "decode", protobuf.decoder(type), paramMap);

        if (config.delimited) {
            push("");
            pushComment([
                "Decodes " + aOrAn(type.name) + " message from the specified reader or buffer, length delimited.",
                "@function decodeDelimited",
                "@memberof " + exportName(type),
                "@static",
                "@param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from",
                "@returns {" + exportName(type) + "} " + type.name,
                "@throws {Error} If the payload is not a reader or valid buffer",
                "@throws {$protobuf.util.ProtocolError} If required fields are missing"
            ]);
            push("public static decodeDelimited(reader: $protobuf.Reader | Uint8Array) {");
            ++indent;
                push("if (!(reader instanceof $Reader))");
                ++indent;
                    push("reader = new $Reader(reader);");
                --indent;
                push("return " + escapeName(type.name) + ".decode(reader, reader.uint32());");
            --indent;
            push("}");
        }
    }

    if (config.verify) {
        push("");
        pushComment([
            "Verifies " + aOrAn(type.name) + " message.",
            "@function verify",
            "@memberof " + exportName(type),
            "@static",
            "@param {Record<string,any>} " + (config.beautify ? "message" : "m") + " Plain object to verify",
            "@returns {string|null} `null` if valid, otherwise the reason why it is not"
        ]);
        paramMap = {};
        paramMap[config.beautify ? "message" : "m"] = { type: "Record<string, any>" };
        buildFunction(type, "verify", protobuf.verifier(type), paramMap, { type: "string | null" });
    }

    if (config.convert) {
        push("");
        pushComment([
            "Creates " + aOrAn(type.name) + " message from a plain object. Also converts values to their respective internal types.",
            "@function fromObject",
            "@memberof " + exportName(type),
            "@static",
            "@param {Record<string, any>} " + (config.beautify ? "object" : "d") + " Plain object",
            "@returns {" + exportName(type) + "} " + type.name
        ]);
        paramMap = {};
        paramMap[config.beautify ? "object" : "d"] = { type: "Record<string, any>" };
        buildFunction(type, "fromObject", protobuf.converter.fromObject(type), paramMap);

        push("");
        pushComment([
            "Creates a plain object from " + aOrAn(type.name) + " message. Also converts values to other types if specified.",
            "@function toObject",
            "@memberof " + exportName(type),
            "@static",
            "@param {" + exportName(type) + "} " + (config.beautify ? "message" : "m") + " " + type.name,
            "@param {$protobuf.IConversionOptions} [" + (config.beautify ? "options" : "o") + "] Conversion options",
            "@returns {Record<string, any>} Plain object"
        ]);
        paramMap = {};
        paramMap[config.beautify ? "message" : "m"] = { type: exportName(type) };
        paramMap[config.beautify ? "options" : "o"] = { type: "$protobuf.IConversionOptions", optional: true };
        buildFunction(type, "toObject", protobuf.converter.toObject(type), paramMap);

        push("");
        pushComment([
            "Converts this " + type.name + " to JSON.",
            "@function toJSON",
            "@memberof " + exportName(type),
            "@instance",
            "@returns {Record<string, any>} JSON object"
        ]);
        push("public toJSON() {");
        ++indent;
            push("return " + escapeName(type.name) + ".toObject(this, $protobuf.util.toJSONOptions);");
        --indent;
        push("}");
    }

    --indent;
    push("}");

    // default values
    firstField = true;
    type.fieldsArray.forEach(function(field) {
        field.resolve();
        var prop = util.safeProp(field.name);
        if (firstField) {
            push("");
            firstField = false;
        }
        if (field.repeated)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.emptyArray;"); // overwritten in constructor
        else if (field.map)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.emptyObject as any;"); // overwritten in constructor
        else if (field.long)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.Long ? ($util.Long as any).fromBits("
                    + JSON.stringify(field.typeDefault.low) + ","
                    + JSON.stringify(field.typeDefault.high) + ","
                    + JSON.stringify(field.typeDefault.unsigned)
                + ") : " + field.typeDefault.toNumber(field.type.charAt(0) === "u") + ";");
        else if (field.bytes) {
            push(escapeName(type.name) + ".prototype" + prop + " = $util.newBuffer(" + JSON.stringify(Array.prototype.slice.call(field.typeDefault)) + ");");
        } else
            push(escapeName(type.name) + ".prototype" + prop + " = " + JSON.stringify(field.typeDefault) + ";");
    });
}

function buildService(ref, service) {
    push("");
    push("export namespace " + escapeName(service.name) + " {");
    ++indent;
    service.methodsArray.forEach(function(method) {
        method.resolve();
        var lcName = protobuf.util.lcFirst(method.name),
            cbName = escapeName(method.name + "Callback");
        push("");
        pushComment([
            "Callback as used by {@link " + exportName(service) + "#" + escapeName(lcName) + "}.",
            // This is a more specialized version of protobuf.rpc.ServiceCallback
            "@memberof " + exportName(service),
            "@typedef " + cbName,
            "@type {function}",
            "@param {Error|null} error Error, if any",
            "@param {" + exportName(method.resolvedResponseType) + "} [response] " + method.resolvedResponseType.name
        ]);
        push("export type " + cbName + " = (error: Error | null, response?: " + exportName(method.resolvedResponseType) + ") => void");
    });
    --indent;
    push("}");

    push("");
    push("export class " + escapeName(service.name) + " extends $protobuf.rpc.Service {");
    ++indent;
    push("");
    pushComment([
        "Constructs a new " + service.name + " service.",
        service.parent instanceof protobuf.Root ? "@exports " + escapeName(service.name) : "@memberof " + exportName(service.parent),
        "@classdesc " + (service.comment || "Represents " + aOrAn(service.name)),
        "@extends $protobuf.rpc.Service",
        "@constructor",
        "@param {$protobuf.RPCImpl} rpcImpl RPC implementation",
        "@param {boolean} [requestDelimited=false] Whether requests are length-delimited",
        "@param {boolean} [responseDelimited=false] Whether responses are length-delimited"
    ]);
    push("constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited = false, responseDelimited = false) {");
    ++indent;
    push("super(rpcImpl, requestDelimited, responseDelimited);");
    --indent;
    push("}");

    if (config.create) {
        push("");
        pushComment([
            "Creates new " + service.name + " service using the specified rpc implementation.",
            "@function create",
            "@memberof " + exportName(service),
            "@static",
            "@param {$protobuf.RPCImpl} rpcImpl RPC implementation",
            "@param {boolean} [requestDelimited=false] Whether requests are length-delimited",
            "@param {boolean} [responseDelimited=false] Whether responses are length-delimited",
            "@returns {" + escapeName(service.name) + "} RPC service. Useful where requests and/or responses are streamed."
        ]);
        push("static create(rpcImpl: $protobuf.RPCImpl, requestDelimited = false, responseDelimited = false) {");
            ++indent;
            push("return new " + escapeName(service.name) + "(rpcImpl, requestDelimited, responseDelimited);");
            --indent;
        push("}");
    }

    service.methodsArray.forEach(function(method) {
        method.resolve();
        var lcName = protobuf.util.lcFirst(method.name),
            cbName = escapeName(method.name + "Callback");
        push("");
        pushComment([
            method.comment || "Calls " + method.name + ".",
            "@function " + lcName,
            "@memberof " + exportName(service),
            "@instance",
            "@param {" + exportName(method.resolvedRequestType, !config.forceMessage) + "} request " + method.resolvedRequestType.name + " message or plain object",
            "@param {" + exportName(service) + "." + cbName + "} callback Node-style callback called with the error, if any, and " + method.resolvedResponseType.name,
            "@returns {undefined}",
            "@variation 1"
        ]);
        push("");
        pushComment([
            method.comment || "Calls " + method.name + ".",
            "@function " + lcName,
            "@memberof " + exportName(service),
            "@instance",
            "@param {" + exportName(method.resolvedRequestType, !config.forceMessage) + "} request " + method.resolvedRequestType.name + " message or plain object",
            "@returns {Promise<" + exportName(method.resolvedResponseType) + ">} Promise",
            "@variation 2"
        ]);
        push(escapeName(lcName) + "(request: " + exportName(method.resolvedRequestType, !config.forceMessage) +", callback: " + exportName(service) + "." + cbName + "): void");
        push(escapeName(lcName) + "(request: " + exportName(method.resolvedRequestType, !config.forceMessage) +"): Promise<" + exportName(method.resolvedResponseType) + ">");
        push(escapeName(lcName) + "(request: " + exportName(method.resolvedRequestType, !config.forceMessage) +", callback?: " + exportName(service) + "." + cbName + "): Promise<" + exportName(method.resolvedResponseType) + "> | void {");
            ++indent;
            push("return this.rpcCall(this." + escapeName(lcName) + " as any, " + exportName(method.resolvedRequestType) + " as any, " + exportName(method.resolvedResponseType) + " as any, request as any, callback as any);");
            --indent;
        push("}");
    });

    --indent;
    push("}");
}

function buildEnum(ref, enm) {

    push("");
    var comment = [
        enm.comment || enm.name + " enum.",
        enm.parent instanceof protobuf.Root ? "@exports " + escapeName(enm.name) : "@name " + exportName(enm),
        config.forceEnumString ? "@enum {string}" : "@enum {number}",
    ];
    Object.keys(enm.values).forEach(function(key) {
        var val = config.forceEnumString ? key : enm.values[key];
        comment.push((config.forceEnumString ? "@property {string} " : "@property {number} ") + key + "=" + val + " " + (enm.comments[key] || key + " value"));
    });
    pushComment(comment);
    push("export enum " + escapeName(enm.name) + " {");
    ++indent;
        Object.keys(enm.values).forEach(function(key) {
            var valueId = enm.values[key];
            var val = config.forceEnumString ? JSON.stringify(key) : valueId;
            push(key + " = " + val + ",");
        });
    --indent;
    push("}");
}
