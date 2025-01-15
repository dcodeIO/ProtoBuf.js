/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots.test_bench || ($protobuf.roots.test_bench = {});

$root.Test = (function() {

    function Test(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Test.prototype.string = "";
    Test.prototype.uint32 = 0;
    Test.prototype.inner = null;
    Test.prototype.float = 0;

    Test.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.Test.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.Test.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
            writer.uint32(10).string(message.string);
        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
            writer.uint32(16).uint32(message.uint32);
        if (message.inner != null && Object.hasOwnProperty.call(message, "inner"))
            $root.Test.Inner.encode(message.inner, writer.uint32(26).fork()).ldelim();
        if (message.float != null && Object.hasOwnProperty.call(message, "float"))
            writer.uint32(37).float(message.float);
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    Test.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.string = reader.string();
                    break;
                }
            case 2: {
                    message.uint32 = reader.uint32();
                    break;
                }
            case 3: {
                    message.inner = $root.Test.Inner.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.float = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                if (!message.$unknownFields)
                    message.$unknownFields = [];
                message.$unknownFields.push(reader.buf.slice(unknownStartPos, reader.pos));
                break;
            }
        }
        return message;
    };

    Test.Inner = (function() {

        function Inner(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Inner.prototype.int32 = 0;
        Inner.prototype.innerInner = null;
        Inner.prototype.outer = null;

        Inner.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            var fullyUnknown = [];
            if (message.$unknownFields && $root.Test.Inner.decode)
                for (var i = 0; i < message.$unknownFields.length; ++i)
                    try {
                        var known = $root.Test.Inner.decode(message.$unknownFields[i]);
                        fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                        message = Object.assign(known, message);
                    } catch (_) {
                    }
            if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
                writer.uint32(8).int32(message.int32);
            if (message.innerInner != null && Object.hasOwnProperty.call(message, "innerInner"))
                $root.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(18).fork()).ldelim();
            if (message.outer != null && Object.hasOwnProperty.call(message, "outer"))
                $root.Outer.encode(message.outer, writer.uint32(26).fork()).ldelim();
            for (var i = 0; i < fullyUnknown.length; ++i)
                writer._unknownField(fullyUnknown[i]);
            return writer;
        };

        Inner.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner();
            while (reader.pos < end) {
                var unknownStartPos = reader.pos;
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.int32 = reader.int32();
                        break;
                    }
                case 2: {
                        message.innerInner = $root.Test.Inner.InnerInner.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.outer = $root.Outer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    if (!message.$unknownFields)
                        message.$unknownFields = [];
                    message.$unknownFields.push(reader.buf.slice(unknownStartPos, reader.pos));
                    break;
                }
            }
            return message;
        };

        Inner.InnerInner = (function() {

            function InnerInner(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            InnerInner.prototype["enum"] = 0;
            InnerInner.prototype.sint32 = 0;

            InnerInner.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.Test.Inner.InnerInner.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.Test.Inner.InnerInner.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.long != null && Object.hasOwnProperty.call(message, "long"))
                    writer.uint32(8).int64(message.long);
                if (message["enum"] != null && Object.hasOwnProperty.call(message, "enum"))
                    writer.uint32(16).int32(message["enum"]);
                if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
                    writer.uint32(24).sint32(message.sint32);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            InnerInner.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test.Inner.InnerInner();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.long = reader.int64();
                            break;
                        }
                    case 2: {
                            message["enum"] = reader.int32();
                            break;
                        }
                    case 3: {
                            message.sint32 = reader.sint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        if (!message.$unknownFields)
                            message.$unknownFields = [];
                        message.$unknownFields.push(reader.buf.slice(unknownStartPos, reader.pos));
                        break;
                    }
                }
                return message;
            };

            return InnerInner;
        })();

        return Inner;
    })();

    Test.Enum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONE"] = 0;
        values[valuesById[1] = "TWO"] = 1;
        values[valuesById[2] = "THREE"] = 2;
        values[valuesById[3] = "FOUR"] = 3;
        values[valuesById[4] = "FIVE"] = 4;
        return values;
    })();

    return Test;
})();

$root.Outer = (function() {

    function Outer(properties) {
        this.bool = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    Outer.prototype.bool = $util.emptyArray;
    Outer.prototype.double = 0;

    Outer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.Outer.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.Outer.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.bool != null && message.bool.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.bool.length; ++i)
                writer.bool(message.bool[i]);
            writer.ldelim();
        }
        if (message.double != null && Object.hasOwnProperty.call(message, "double"))
            writer.uint32(17).double(message.double);
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    Outer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Outer();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.bool && message.bool.length))
                        message.bool = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.bool.push(reader.bool());
                    } else
                        message.bool.push(reader.bool());
                    break;
                }
            case 2: {
                    message.double = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                if (!message.$unknownFields)
                    message.$unknownFields = [];
                message.$unknownFields.push(reader.buf.slice(unknownStartPos, reader.pos));
                break;
            }
        }
        return message;
    };

    return Outer;
})();

module.exports = $root;
