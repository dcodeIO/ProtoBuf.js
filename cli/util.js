"use strict";
var fs       = require("fs"),
    path     = require("path"),
    protobuf = require("protobufjs");

function basenameCompare(a, b) {
    var aa = String(a).replace(/\.\w+$/, "").split(/(-?\d*\.?\d+)/g),
        bb = String(b).replace(/\.\w+$/, "").split(/(-?\d*\.?\d+)/g);
    for (var i = 0, k = Math.min(aa.length, bb.length); i < k; i++) {
        var x = parseFloat(aa[i]) || aa[i].toLowerCase(),
            y = parseFloat(bb[i]) || bb[i].toLowerCase();
        if (x < y)
            return -1;
        if (x > y)
            return 1;
    }
    return a.length < b.length ? -1 : 0;
}

exports.requireAll = function requireAll(dirname) {
    dirname   = path.join(__dirname, dirname);
    var files = fs.readdirSync(dirname).sort(basenameCompare),
        all = {};
    files.forEach(function(file) {
        var basename = path.basename(file, ".js"),
            extname  = path.extname(file);
        if (extname === ".js")
            all[basename] = require(path.join(dirname, file));
    });
    return all;
};

exports.traverse = function traverse(current, fn) {
    fn(current);
    if (current.fieldsArray)
        current.fieldsArray.forEach(function(field) {
            traverse(field, fn);
        });
    if (current.oneofsArray)
        current.oneofsArray.forEach(function(oneof) {
            traverse(oneof, fn);
        });
    if (current.methodsArray)
        current.methodsArray.forEach(function(method) {
            traverse(method, fn);
        });
    if (current.nestedArray)
        current.nestedArray.forEach(function(nested) {
            traverse(nested, fn);
        });
};

exports.traverseResolved = function traverseResolved(current, fn) {
    fn(current);
    if (current.resolvedType)
        traverseResolved(current.resolvedType, fn);
    if (current.resolvedKeyType)
        traverseResolved(current.resolvedKeyType, fn);
    if (current.resolvedRequestType)
        traverseResolved(current.resolvedRequestType, fn);
    if (current.resolvedResponseType)
        traverseResolved(current.resolvedResponseType, fn);
};

exports.inspect = function inspect(object, indent) {
    if (!object)
        return "";
    var chalk = require("chalk");
    var sb = [];
    if (!indent)
        indent = "";
    var ind = indent ? indent.substring(0, indent.length - 2) + "└ " : "";
    sb.push(
        ind + chalk.bold(object.toString()) + (object.visible ? " (visible)" : ""),
        indent + chalk.gray("parent: ") + object.parent
    );
    if (object instanceof protobuf.Field) {
        if (object.extend !== undefined)
            sb.push(indent + chalk.gray("extend: ") + object.extend);
        if (object.partOf)
            sb.push(indent + chalk.gray("oneof : ") + object.oneof);
    }
    sb.push("");
    if (object.fieldsArray)
        object.fieldsArray.forEach(function(field) {
            sb.push(inspect(field, indent + "  "));
        });
    if (object.oneofsArray)
        object.oneofsArray.forEach(function(oneof) {
            sb.push(inspect(oneof, indent + "  "));
        });
    if (object.methodsArray)
        object.methodsArray.forEach(function(service) {
            sb.push(inspect(service, indent + "  "));
        });
    if (object.nestedArray)
        object.nestedArray.forEach(function(nested) {
            sb.push(inspect(nested, indent + "  "));
        });
    return sb.join("\n");
};

exports.wrap = function(OUTPUT, options) {
    var name = options.wrap || "default";
    var wrap;
    try {
        // try built-in wrappers first
        wrap = fs.readFileSync(path.join(__dirname, "wrappers", name + ".js")).toString("utf8");
    } catch (e) {
        // otherwise fetch the custom one
        wrap = fs.readFileSync(path.resolve(process.cwd(), name)).toString("utf8");
    }
    wrap = wrap.replace(/\$DEPENDENCY/g, JSON.stringify(options.dependency || "protobufjs"));
    wrap = wrap.replace(/( *)\$OUTPUT;/, function($0, $1) {
        return $1.length ? OUTPUT.replace(/^/mg, $1) : OUTPUT;
    });
    if (options.lint !== "")
        wrap = "/*" + options.lint + "*/\n" + wrap;
    return wrap.replace(/\r?\n/g, "\n");
};

exports.pad = function(str, len, l) {
    while (str.length < len)
        str = l ? str + " " : " " + str;
    return str;
};
