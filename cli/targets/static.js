"use strict";
module.exports = static_target;

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

static_target.description = "Static code without reflection (non-functional on its own)";

function static_target(root, options, callback) {
    var importInfo = {
        aliasToModule: {},
        moduleToAlias: {},
        exportNames: {},
    };
    config = options;
    try {
        if (!config.bundle && root.imports && root.imports.length) {
            // An import of the form `import * as module from "module"` is needed
            // for use in the jsdoc comments. But since these imports are only used
            // for types, the typescript compiler elides them. So an import of
            // of the form `import "module"` is also included.
            for (let i of root.imports) {
                var moduleName = getModuleName(i);
                assignAlias(moduleName, importInfo);
                push("import \"" + moduleName + "\";");
            }
            push("");
            for (let i of root.imports) {
                var moduleName = getModuleName(i);
                push("import * as " + importInfo.moduleToAlias[moduleName] + " from \"" + moduleName + "\";");
            }
            push("");
        }
        var aliases = [];
        if (config.decode)
            aliases.push("Reader");
        if (config.encode)
            aliases.push("Writer");
        aliases.push("util");
        if (aliases.length) {
            if (config.comments)
                push("// Common aliases");
            push((config.es6 ? "const " : "var ") + aliases.map(function(name) { return "$" + name + " = $protobuf." + name; }).join(", ") + ";");
            push("");
        }
        if (config.comments) {
            if (root.comment) {
                pushComment("@fileoverview " + root.comment);
                push("");
            }
            push("// Exported root namespace");
        }
        var rootProp = util.safeProp(config.root || "default");
        push((config.es6 ? "const" : "var") + " $root = $protobuf.roots" + rootProp + " || ($protobuf.roots" + rootProp + " = {});");
        var filename = util.path.isAbsolute(config._[0]) ? config._[0] : process.cwd() + '/' + config._[0];
        buildNamespace(null, root, config.bundle, filename, importInfo);
        return callback(null, out.join("\n"));
    } catch (err) {
        return callback(err);
    } finally {
        out = [];
        indent = 0;
        config = {};
    }
}

function assignAlias(moduleName, importInfo) {
    if (importInfo.moduleToAlias[moduleName])
        return importInfo.moduleToAlias[moduleName];

    let alias = escapeName(moduleName.replace(/^([A-Z])|[\s.\/_-]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    }));
    while (importInfo.aliasToModule[alias])
        alias += '_';
    importInfo.moduleToAlias[moduleName] = alias;
    importInfo.aliasToModule[alias] = moduleName;
    return alias
}

function getModuleName(path) {
    if (path.endsWith(".proto"))
        return path.slice(0, -".proto".length);
    else
        return path;
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

function buildNamespace(ref, ns, bundle, filename, importInfo) {
    if (!ns)
        return;

    if (ns instanceof Service && !config.service)
        return;

    // With the no-bundle option, only output namespaces that are defined in the
    // file that's being output
    if (!bundle && ns.name != '' && (ns.filename === null || (ns.filename && ns.filename !== filename)))
        return;

    if (ns.name !== "") {
        if (!(ns instanceof Type) && !(ns instanceof Service)) {
            push("");
            pushComment([
                ns.comment || "Namespace " + ns.name + ".",
                ns.parent instanceof protobuf.Root ? "@exports " + escapeName(ns.name) : "@memberof " + exportName(ns.parent),
                "@namespace"
            ]);
        }
        push("");
        if (!ref && config.es6)
            push("export const " + escapeName(ns.name) + " = " + escapeName(ref) + "." + escapeName(ns.name) + " = ((" + escapeName(ns.name) + ") => {");
        else
            push(escapeName(ref) + "." + escapeName(ns.name) + " = (function(" + escapeName(ns.name) + ") {");
        ++indent;
    }

    if (ns instanceof Type) {
        buildType(undefined, ns, bundle, importInfo);
    } else if (ns instanceof Service)
        buildService(undefined, ns, bundle, importInfo);

    ns.nestedArray.forEach(function(nested) {
        if (nested instanceof Enum)
            buildEnum(ns.name, nested);
        else if (nested instanceof Namespace)
            buildNamespace(ns.name, nested, bundle, filename, importInfo);
    });
    if (ns.name !== "") {
        push("");
        push("return " + escapeName(ns.name) + ";");
        --indent;
        push("})(" + escapeName(ref) + util.safeProp(escapeName(ns.name)) + " || {});");
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
    "t": "tag",
    "l": "length",
    "c": "end", "c2": "end2",
    "k": "key",
    "ks": "keys", "ks2": "keys2",
    "e": "error",
    "f": "impl",
    "o": "options",
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
            if (config.es6 && node.type === "VariableDeclaration" && node.kind === "var") {
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

function buildFunction(type, functionName, gen, scope) {
    var code = gen.toString(functionName)
        .replace(/((?!\.)types\[\d+])(\.values)/g, "$1"); // enums: use types[N] instead of reflected types[N].values

    var ast = espree.parse(code);
    /* eslint-disable no-extra-parens */
    estraverse.replace(ast, {
        enter: function(node, parent) {
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
                    "name": "$root" + type.fullName
                };
            // replace types[N] with the field's actual type
            if (
                node.type === "MemberExpression"
             && node.object.type === "Identifier" && node.object.name === "types"
             && node.property.type === "Literal"
            )
                return {
                    "type": "Identifier",
                    "name": "$root" + type.fieldsArray[node.property.value].resolvedType.fullName
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

    var hasScope = scope && Object.keys(scope).length,
        isCtor = functionName === type.name;

    if (hasScope) // remove unused scope vars
        Object.keys(scope).forEach(function(key) {
            if (!new RegExp("\\b(" + key + ")\\b", "g").test(code))
                delete scope[key];
        });

    var lines = code.split(/\n/g);
    if (isCtor) // constructor
        push(lines[0]);
    else if (hasScope) // enclose in an iife
        push(escapeName(type.name) + "." + escapeName(functionName) + " = (function(" + Object.keys(scope).map(escapeName).join(", ") + ") { return " + lines[0]);
    else
        push(escapeName(type.name) + "." + escapeName(functionName) + " = " + lines[0]);
    lines.slice(1, lines.length - 1).forEach(function(line) {
        var prev = indent;
        var i = 0;
        while (line.charAt(i++) === "\t")
            ++indent;
        push(line.trim());
        indent = prev;
    });
    if (isCtor)
        push("}");
    else if (hasScope)
        push("};})(" + Object.keys(scope).map(function(key) { return scope[key]; }).join(", ") + ");");
    else
        push("};");
}

function getAliasedType(resolvedType, bundle, importInfo) {
    var type = exportName(resolvedType, !(resolvedType instanceof protobuf.Enum || config.forceMessage));
    if (!bundle) {
        var memberModuleName;
        if (resolvedType.filename === null) {
            // The set of common types are handled differently than other types
            // and don't have an associated filename, so we'll just look up
            // the module name
            var memberModuleName = {
                "google.protobuf.Any": "google/protobuf/any",
                "google.protobuf.Empty": "google/protobuf/empty",
                "google.protobuf.FieldMask": "google/protobuf/field_mask",
                "google.protobuf.Struct": "google/protobuf/struct",
                "google.protobuf.Value": "google/protobuf/struct",
                "google.protobuf.NullValue": "google/protobuf/struct",
                "google.protobuf.ListValue": "google/protobuf/struct",
                "google.protobuf.Timestamp": "google/protobuf/timestamp",
                "google.protobuf.Wrappers": "google/protobuf/wrappers",
            }[resolvedType.__exportName];
        }
        else
            memberModuleName = getModuleName(resolvedType.filename);

        for (var moduleName in importInfo.moduleToAlias) {
            if (memberModuleName && memberModuleName.endsWith(moduleName)) {
                type = importInfo.moduleToAlias[moduleName] + "." + type;
                break;
            }
        }
    }
    return type
}

function toJsType(field, bundle, importInfo) {
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
            type = config.forceLong ? "Long" : config.forceNumber ? "number" : "number|Long";
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
                type = getAliasedType(field.resolvedType, bundle, importInfo)
            else
                type = "*"; // should not happen
            break;
    }
    if (field.map)
        return "Object.<string," + type + ">";
    if (field.repeated)
        return "Array.<" + type + ">";
    return type;
}

function buildType(ref, type, bundle, importInfo) {

    if (config.comments) {
        var typeDef = [
            "Properties of " + aOrAn(type.name) + ".",
            type.parent instanceof protobuf.Root ? "@exports " + escapeName("I" + type.name) : "@memberof " + exportName(type.parent),
            "@interface " + escapeName("I" + type.name)
        ];
        type.fieldsArray.forEach(function(field) {
            var prop = util.safeProp(field.name); // either .name or ["name"]
            prop = prop.substring(1, prop.charAt(0) === "[" ? prop.length - 1 : prop.length);
            var jsType = toJsType(field, bundle, importInfo);
            if (field.optional)
                jsType = jsType + "|null";
            typeDef.push("@property {" + jsType + "} " + (field.optional ? "[" + prop + "]" : prop) + " " + (field.comment || type.name + " " + field.name));
        });
        push("");
        pushComment(typeDef);
    }

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
    buildFunction(type, type.name, Type.generateConstructor(type));

    // default values
    var firstField = true;
    type.fieldsArray.forEach(function(field) {
        field.resolve();
        var prop = util.safeProp(field.name);
        if (config.comments) {
            push("");
            var jsType = toJsType(field, bundle, importInfo);
            if (field.optional && !field.map && !field.repeated && (field.resolvedType instanceof Type || config["null-defaults"]) || field.partOf)
                jsType = jsType + "|null|undefined";
            pushComment([
                field.comment || type.name + " " + field.name + ".",
                "@member {" + jsType + "} " + field.name,
                "@memberof " + exportName(type),
                "@instance"
            ]);
        } else if (firstField) {
            push("");
            firstField = false;
        }
        if (field.repeated)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.emptyArray;"); // overwritten in constructor
        else if (field.map)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.emptyObject;"); // overwritten in constructor
        else if (field.partOf || field.optional && config["null-defaults"])
            push(escapeName(type.name) + ".prototype" + prop + " = null;"); // do not set default value for oneof members
        else if (field.long)
            push(escapeName(type.name) + ".prototype" + prop + " = $util.Long ? $util.Long.fromBits("
                    + JSON.stringify(field.typeDefault.low) + ","
                    + JSON.stringify(field.typeDefault.high) + ","
                    + JSON.stringify(field.typeDefault.unsigned)
                + ") : " + field.typeDefault.toNumber(field.type.charAt(0) === "u") + ";");
        else if (field.bytes) {
            push(escapeName(type.name) + ".prototype" + prop + " = $util.newBuffer(" + JSON.stringify(Array.prototype.slice.call(field.typeDefault)) + ");");
        } else
            push(escapeName(type.name) + ".prototype" + prop + " = " + JSON.stringify(field.typeDefault) + ";");
    });

    // virtual oneof fields
    var firstOneOf = true;
    type.oneofsArray.forEach(function(oneof) {
        if (firstOneOf) {
            firstOneOf = false;
            push("");
            if (config.comments)
                push("// OneOf field names bound to virtual getters and setters");
            push((config.es6 ? "let" : "var") + " $oneOfFields;");
        }
        oneof.resolve();
        push("");
        pushComment([
            oneof.comment || type.name + " " + oneof.name + ".",
            "@member {" + oneof.oneof.map(JSON.stringify).join("|") + "|undefined} " + escapeName(oneof.name),
            "@memberof " + exportName(type),
            "@instance"
        ]);
        push("Object.defineProperty(" + escapeName(type.name) + ".prototype, " + JSON.stringify(oneof.name) +", {");
        ++indent;
            push("get: $util.oneOfGetter($oneOfFields = [" + oneof.oneof.map(JSON.stringify).join(", ") + "]),");
            push("set: $util.oneOfSetter($oneOfFields)");
        --indent;
        push("});");
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
        push(escapeName(type.name) + ".create = function create(properties) {");
            ++indent;
            push("return new " + escapeName(type.name) + "(properties);");
            --indent;
        push("};");
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
        buildFunction(type, "encode", protobuf.encoder(type));

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
            push(escapeName(type.name) + ".encodeDelimited = function encodeDelimited(message, writer) {");
            ++indent;
            push("return this.encode(message, writer).ldelim();");
            --indent;
            push("};");
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
        buildFunction(type, "decode", protobuf.decoder(type));

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
            push(escapeName(type.name) + ".decodeDelimited = function decodeDelimited(reader) {");
            ++indent;
                push("if (!(reader instanceof $Reader))");
                ++indent;
                    push("reader = new $Reader(reader);");
                --indent;
                push("return this.decode(reader, reader.uint32());");
            --indent;
            push("};");
        }
    }

    if (config.verify) {
        push("");
        pushComment([
            "Verifies " + aOrAn(type.name) + " message.",
            "@function verify",
            "@memberof " + exportName(type),
            "@static",
            "@param {Object.<string,*>} " + (config.beautify ? "message" : "m") + " Plain object to verify",
            "@returns {string|null} `null` if valid, otherwise the reason why it is not"
        ]);
        buildFunction(type, "verify", protobuf.verifier(type));
    }

    if (config.convert) {
        push("");
        pushComment([
            "Creates " + aOrAn(type.name) + " message from a plain object. Also converts values to their respective internal types.",
            "@function fromObject",
            "@memberof " + exportName(type),
            "@static",
            "@param {Object.<string,*>} " + (config.beautify ? "object" : "d") + " Plain object",
            "@returns {" + exportName(type) + "} " + type.name
        ]);
        buildFunction(type, "fromObject", protobuf.converter.fromObject(type));

        push("");
        pushComment([
            "Creates a plain object from " + aOrAn(type.name) + " message. Also converts values to other types if specified.",
            "@function toObject",
            "@memberof " + exportName(type),
            "@static",
            "@param {" + exportName(type) + "} " + (config.beautify ? "message" : "m") + " " + type.name,
            "@param {$protobuf.IConversionOptions} [" + (config.beautify ? "options" : "o") + "] Conversion options",
            "@returns {Object.<string,*>} Plain object"
        ]);
        buildFunction(type, "toObject", protobuf.converter.toObject(type));

        push("");
        pushComment([
            "Converts this " + type.name + " to JSON.",
            "@function toJSON",
            "@memberof " + exportName(type),
            "@instance",
            "@returns {Object.<string,*>} JSON object"
        ]);
        push(escapeName(type.name) + ".prototype.toJSON = function toJSON() {");
        ++indent;
            push("return this.constructor.toObject(this, $protobuf.util.toJSONOptions);");
        --indent;
        push("};");
    }
    if (config.typeurl) {
        push("");
        pushComment([
            "Gets the default type url for " + type.name,
            "@function getTypeUrl",
            "@memberof " + exportName(type),
            "@static",
            "@returns {string} The default type url"
        ]);
        push(escapeName(type.name) + ".getTypeUrl = function getTypeUrl() {");
        ++indent;
        push("return \"type.googleapis.com/" + exportName(type) + "\";");
        --indent;
        push("};");
    }
}

function buildService(ref, service, bundle, importInfo) {

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
    push("function " + escapeName(service.name) + "(rpcImpl, requestDelimited, responseDelimited) {");
    ++indent;
    push("$protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);");
    --indent;
    push("}");
    push("");
    push("(" + escapeName(service.name) + ".prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = " + escapeName(service.name) + ";");

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
        push(escapeName(service.name) + ".create = function create(rpcImpl, requestDelimited, responseDelimited) {");
            ++indent;
            push("return new this(rpcImpl, requestDelimited, responseDelimited);");
            --indent;
        push("};");
    }

    service.methodsArray.forEach(function(method) {
        method.resolve();
        var requestType = getAliasedType(method.resolvedRequestType, bundle, importInfo);
        var responseType = getAliasedType(method.resolvedResponseType, bundle, importInfo);

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
            "@param {" + responseType + "} [response] " + method.resolvedResponseType.name
        ]);
        push("");
        pushComment([
            method.comment || "Calls " + method.name + ".",
            "@function " + lcName,
            "@memberof " + exportName(service),
            "@instance",
            "@param {" + requestType + "} request " + method.resolvedRequestType.name + " message or plain object",
            "@param {" + exportName(service) + "." + cbName + "} callback Node-style callback called with the error, if any, and " + method.resolvedResponseType.name,
            "@returns {undefined}",
            "@variation 1"
        ]);
        push("Object.defineProperty(" + escapeName(service.name) + ".prototype" + util.safeProp(lcName) + " = function " + escapeName(lcName) + "(request, callback) {");
            ++indent;
            push("return this.rpcCall(" + escapeName(lcName) + ", $root." + exportName(method.resolvedRequestType) + ", $root." + exportName(method.resolvedResponseType) + ", request, callback);");
            --indent;
        push("}, \"name\", { value: " + JSON.stringify(method.name) + " });");
        if (config.comments)
            push("");
        pushComment([
            method.comment || "Calls " + method.name + ".",
            "@function " + lcName,
            "@memberof " + exportName(service),
            "@instance",
            "@param {" + requestType + "} request " + method.resolvedRequestType.name + " message or plain object",
            "@returns {Promise<" + responseType + ">} Promise",
            "@variation 2"
        ]);
    });
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
    if (!ref && config.es6)
        push("export const " + escapeName(enm.name) + " = " + escapeName(ref) + "." + escapeName(enm.name) + " = (() => {");
    else
        push(escapeName(ref) + "." + escapeName(enm.name) + " = (function() {");
    ++indent;
        push((config.es6 ? "const" : "var") + " valuesById = {}, values = Object.create(valuesById);");
        var aliased = [];
        Object.keys(enm.values).forEach(function(key) {
            var valueId = enm.values[key];
            var val = config.forceEnumString ? JSON.stringify(key) : valueId;
            if (aliased.indexOf(valueId) > -1)
                push("values[" + JSON.stringify(key) + "] = " + val + ";");
            else {
                push("values[valuesById[" + valueId + "] = " + JSON.stringify(key) + "] = " + val + ";");
                aliased.push(valueId);
            }
        });
        push("return values;");
    --indent;
    push("})();");
}
