/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_convert || ($protobuf.roots.test_convert = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string|null} [stringVal] Message stringVal
     * @property {Array.<string>|null} [stringRepeated] Message stringRepeated
     * @property {number|Long|null} [uint64Val] Message uint64Val
     * @property {Array.<number|Long>|null} [uint64Repeated] Message uint64Repeated
     * @property {Uint8Array|null} [bytesVal] Message bytesVal
     * @property {Array.<Uint8Array>|null} [bytesRepeated] Message bytesRepeated
     * @property {Message.SomeEnum|null} [enumVal] Message enumVal
     * @property {Array.<Message.SomeEnum>|null} [enumRepeated] Message enumRepeated
     * @property {Object.<string,number|Long>|null} [int64Map] Message int64Map
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        this.stringRepeated = [];
        this.uint64Repeated = [];
        this.bytesRepeated = [];
        this.enumRepeated = [];
        this.int64Map = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message stringVal.
     * @member {string} stringVal
     * @memberof Message
     * @instance
     */
    Message.prototype.stringVal = "";

    /**
     * Message stringRepeated.
     * @member {Array.<string>} stringRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.stringRepeated = $util.emptyArray;

    /**
     * Message uint64Val.
     * @member {number|Long} uint64Val
     * @memberof Message
     * @instance
     */
    Message.prototype.uint64Val = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Message uint64Repeated.
     * @member {Array.<number|Long>} uint64Repeated
     * @memberof Message
     * @instance
     */
    Message.prototype.uint64Repeated = $util.emptyArray;

    /**
     * Message bytesVal.
     * @member {Uint8Array} bytesVal
     * @memberof Message
     * @instance
     */
    Message.prototype.bytesVal = $util.newBuffer([]);

    /**
     * Message bytesRepeated.
     * @member {Array.<Uint8Array>} bytesRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.bytesRepeated = $util.emptyArray;

    /**
     * Message enumVal.
     * @member {Message.SomeEnum} enumVal
     * @memberof Message
     * @instance
     */
    Message.prototype.enumVal = 1;

    /**
     * Message enumRepeated.
     * @member {Array.<Message.SomeEnum>} enumRepeated
     * @memberof Message
     * @instance
     */
    Message.prototype.enumRepeated = $util.emptyArray;

    /**
     * Message int64Map.
     * @member {Object.<string,number|Long>} int64Map
     * @memberof Message
     * @instance
     */
    Message.prototype.int64Map = $util.emptyObject;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.Message.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.Message.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.stringVal != null && Object.hasOwnProperty.call(message, "stringVal"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringVal);
        if (message.stringRepeated != null && message.stringRepeated.length)
            for (var i = 0; i < message.stringRepeated.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringRepeated[i]);
        if (message.uint64Val != null && Object.hasOwnProperty.call(message, "uint64Val"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.uint64Val);
        if (message.uint64Repeated != null && message.uint64Repeated.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.uint64Repeated.length; ++i)
                writer.uint64(message.uint64Repeated[i]);
            writer.ldelim();
        }
        if (message.bytesVal != null && Object.hasOwnProperty.call(message, "bytesVal"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.bytesVal);
        if (message.bytesRepeated != null && message.bytesRepeated.length)
            for (var i = 0; i < message.bytesRepeated.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesRepeated[i]);
        if (message.enumVal != null && Object.hasOwnProperty.call(message, "enumVal"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.enumVal);
        if (message.enumRepeated != null && message.enumRepeated.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.enumRepeated.length; ++i)
                writer.int32(message.enumRepeated[i]);
            writer.ldelim();
        }
        if (message.int64Map != null && Object.hasOwnProperty.call(message, "int64Map"))
            for (var keys = Object.keys(message.int64Map), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.int64Map[keys[i]]).ldelim();
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message(), key, value;
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.stringVal = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.stringRepeated && message.stringRepeated.length))
                        message.stringRepeated = [];
                    message.stringRepeated.push(reader.string());
                    break;
                }
            case 3: {
                    message.uint64Val = reader.uint64();
                    break;
                }
            case 4: {
                    if (!(message.uint64Repeated && message.uint64Repeated.length))
                        message.uint64Repeated = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.uint64Repeated.push(reader.uint64());
                    } else
                        message.uint64Repeated.push(reader.uint64());
                    break;
                }
            case 5: {
                    message.bytesVal = reader.bytes();
                    break;
                }
            case 6: {
                    if (!(message.bytesRepeated && message.bytesRepeated.length))
                        message.bytesRepeated = [];
                    message.bytesRepeated.push(reader.bytes());
                    break;
                }
            case 7: {
                    message.enumVal = reader.int32();
                    break;
                }
            case 8: {
                    if (!(message.enumRepeated && message.enumRepeated.length))
                        message.enumRepeated = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.enumRepeated.push(reader.int32());
                    } else
                        message.enumRepeated.push(reader.int32());
                    break;
                }
            case 9: {
                    if (message.int64Map === $util.emptyObject)
                        message.int64Map = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.int64Map[key] = value;
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

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            if (!$util.isString(message.stringVal))
                return "stringVal: string expected";
        if (message.stringRepeated != null && message.hasOwnProperty("stringRepeated")) {
            if (!Array.isArray(message.stringRepeated))
                return "stringRepeated: array expected";
            for (var i = 0; i < message.stringRepeated.length; ++i)
                if (!$util.isString(message.stringRepeated[i]))
                    return "stringRepeated: string[] expected";
        }
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            if (!$util.isInteger(message.uint64Val) && !(message.uint64Val && $util.isInteger(message.uint64Val.low) && $util.isInteger(message.uint64Val.high)))
                return "uint64Val: integer|Long expected";
        if (message.uint64Repeated != null && message.hasOwnProperty("uint64Repeated")) {
            if (!Array.isArray(message.uint64Repeated))
                return "uint64Repeated: array expected";
            for (var i = 0; i < message.uint64Repeated.length; ++i)
                if (!$util.isInteger(message.uint64Repeated[i]) && !(message.uint64Repeated[i] && $util.isInteger(message.uint64Repeated[i].low) && $util.isInteger(message.uint64Repeated[i].high)))
                    return "uint64Repeated: integer|Long[] expected";
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            if (!(message.bytesVal && typeof message.bytesVal.length === "number" || $util.isString(message.bytesVal)))
                return "bytesVal: buffer expected";
        if (message.bytesRepeated != null && message.hasOwnProperty("bytesRepeated")) {
            if (!Array.isArray(message.bytesRepeated))
                return "bytesRepeated: array expected";
            for (var i = 0; i < message.bytesRepeated.length; ++i)
                if (!(message.bytesRepeated[i] && typeof message.bytesRepeated[i].length === "number" || $util.isString(message.bytesRepeated[i])))
                    return "bytesRepeated: buffer[] expected";
        }
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            switch (message.enumVal) {
            default:
                return "enumVal: enum value expected";
            case 1:
            case 2:
                break;
            }
        if (message.enumRepeated != null && message.hasOwnProperty("enumRepeated")) {
            if (!Array.isArray(message.enumRepeated))
                return "enumRepeated: array expected";
            for (var i = 0; i < message.enumRepeated.length; ++i)
                switch (message.enumRepeated[i]) {
                default:
                    return "enumRepeated: enum value[] expected";
                case 1:
                case 2:
                    break;
                }
        }
        if (message.int64Map != null && message.hasOwnProperty("int64Map")) {
            if (!$util.isObject(message.int64Map))
                return "int64Map: object expected";
            var key = Object.keys(message.int64Map);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.int64Map[key[i]]) && !(message.int64Map[key[i]] && $util.isInteger(message.int64Map[key[i]].low) && $util.isInteger(message.int64Map[key[i]].high)))
                    return "int64Map: integer|Long{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.stringVal != null)
            message.stringVal = String(object.stringVal);
        if (object.stringRepeated) {
            if (!Array.isArray(object.stringRepeated))
                throw TypeError(".Message.stringRepeated: array expected");
            message.stringRepeated = [];
            for (var i = 0; i < object.stringRepeated.length; ++i)
                message.stringRepeated[i] = String(object.stringRepeated[i]);
        }
        if (object.uint64Val != null)
            if ($util.Long)
                (message.uint64Val = $util.Long.fromValue(object.uint64Val)).unsigned = true;
            else if (typeof object.uint64Val === "string")
                message.uint64Val = parseInt(object.uint64Val, 10);
            else if (typeof object.uint64Val === "number")
                message.uint64Val = object.uint64Val;
            else if (typeof object.uint64Val === "object")
                message.uint64Val = new $util.LongBits(object.uint64Val.low >>> 0, object.uint64Val.high >>> 0).toNumber(true);
        if (object.uint64Repeated) {
            if (!Array.isArray(object.uint64Repeated))
                throw TypeError(".Message.uint64Repeated: array expected");
            message.uint64Repeated = [];
            for (var i = 0; i < object.uint64Repeated.length; ++i)
                if ($util.Long)
                    (message.uint64Repeated[i] = $util.Long.fromValue(object.uint64Repeated[i])).unsigned = true;
                else if (typeof object.uint64Repeated[i] === "string")
                    message.uint64Repeated[i] = parseInt(object.uint64Repeated[i], 10);
                else if (typeof object.uint64Repeated[i] === "number")
                    message.uint64Repeated[i] = object.uint64Repeated[i];
                else if (typeof object.uint64Repeated[i] === "object")
                    message.uint64Repeated[i] = new $util.LongBits(object.uint64Repeated[i].low >>> 0, object.uint64Repeated[i].high >>> 0).toNumber(true);
        }
        if (object.bytesVal != null)
            if (typeof object.bytesVal === "string")
                $util.base64.decode(object.bytesVal, message.bytesVal = $util.newBuffer($util.base64.length(object.bytesVal)), 0);
            else if (object.bytesVal.length >= 0)
                message.bytesVal = object.bytesVal;
        if (object.bytesRepeated) {
            if (!Array.isArray(object.bytesRepeated))
                throw TypeError(".Message.bytesRepeated: array expected");
            message.bytesRepeated = [];
            for (var i = 0; i < object.bytesRepeated.length; ++i)
                if (typeof object.bytesRepeated[i] === "string")
                    $util.base64.decode(object.bytesRepeated[i], message.bytesRepeated[i] = $util.newBuffer($util.base64.length(object.bytesRepeated[i])), 0);
                else if (object.bytesRepeated[i].length >= 0)
                    message.bytesRepeated[i] = object.bytesRepeated[i];
        }
        switch (object.enumVal) {
        default:
            if (typeof object.enumVal === "number") {
                message.enumVal = object.enumVal;
                break;
            }
            break;
        case "ONE":
        case 1:
            message.enumVal = 1;
            break;
        case "TWO":
        case 2:
            message.enumVal = 2;
            break;
        }
        if (object.enumRepeated) {
            if (!Array.isArray(object.enumRepeated))
                throw TypeError(".Message.enumRepeated: array expected");
            message.enumRepeated = [];
            for (var i = 0; i < object.enumRepeated.length; ++i)
                switch (object.enumRepeated[i]) {
                default:
                    if (typeof object.enumRepeated[i] === "number") {
                        message.enumRepeated[i] = object.enumRepeated[i];
                        break;
                    }
                case "ONE":
                case 1:
                    message.enumRepeated[i] = 1;
                    break;
                case "TWO":
                case 2:
                    message.enumRepeated[i] = 2;
                    break;
                }
        }
        if (object.int64Map) {
            if (typeof object.int64Map !== "object")
                throw TypeError(".Message.int64Map: object expected");
            message.int64Map = {};
            for (var keys = Object.keys(object.int64Map), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.int64Map[keys[i]] = $util.Long.fromValue(object.int64Map[keys[i]])).unsigned = false;
                else if (typeof object.int64Map[keys[i]] === "string")
                    message.int64Map[keys[i]] = parseInt(object.int64Map[keys[i]], 10);
                else if (typeof object.int64Map[keys[i]] === "number")
                    message.int64Map[keys[i]] = object.int64Map[keys[i]];
                else if (typeof object.int64Map[keys[i]] === "object")
                    message.int64Map[keys[i]] = new $util.LongBits(object.int64Map[keys[i]].low >>> 0, object.int64Map[keys[i]].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.stringRepeated = [];
            object.uint64Repeated = [];
            object.bytesRepeated = [];
            object.enumRepeated = [];
        }
        if (options.objects || options.defaults)
            object.int64Map = {};
        if (options.defaults) {
            object.stringVal = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.uint64Val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uint64Val = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.bytesVal = "";
            else {
                object.bytesVal = [];
                if (options.bytes !== Array)
                    object.bytesVal = $util.newBuffer(object.bytesVal);
            }
            object.enumVal = options.enums === String ? "ONE" : 1;
        }
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            object.stringVal = message.stringVal;
        if (message.stringRepeated && message.stringRepeated.length) {
            object.stringRepeated = [];
            for (var j = 0; j < message.stringRepeated.length; ++j)
                object.stringRepeated[j] = message.stringRepeated[j];
        }
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            if (typeof message.uint64Val === "number")
                object.uint64Val = options.longs === String ? String(message.uint64Val) : message.uint64Val;
            else
                object.uint64Val = options.longs === String ? $util.Long.prototype.toString.call(message.uint64Val) : options.longs === Number ? new $util.LongBits(message.uint64Val.low >>> 0, message.uint64Val.high >>> 0).toNumber(true) : message.uint64Val;
        if (message.uint64Repeated && message.uint64Repeated.length) {
            object.uint64Repeated = [];
            for (var j = 0; j < message.uint64Repeated.length; ++j)
                if (typeof message.uint64Repeated[j] === "number")
                    object.uint64Repeated[j] = options.longs === String ? String(message.uint64Repeated[j]) : message.uint64Repeated[j];
                else
                    object.uint64Repeated[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64Repeated[j]) : options.longs === Number ? new $util.LongBits(message.uint64Repeated[j].low >>> 0, message.uint64Repeated[j].high >>> 0).toNumber(true) : message.uint64Repeated[j];
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            object.bytesVal = options.bytes === String ? $util.base64.encode(message.bytesVal, 0, message.bytesVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesVal) : message.bytesVal;
        if (message.bytesRepeated && message.bytesRepeated.length) {
            object.bytesRepeated = [];
            for (var j = 0; j < message.bytesRepeated.length; ++j)
                object.bytesRepeated[j] = options.bytes === String ? $util.base64.encode(message.bytesRepeated[j], 0, message.bytesRepeated[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesRepeated[j]) : message.bytesRepeated[j];
        }
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            object.enumVal = options.enums === String ? $root.Message.SomeEnum[message.enumVal] === undefined ? message.enumVal : $root.Message.SomeEnum[message.enumVal] : message.enumVal;
        if (message.enumRepeated && message.enumRepeated.length) {
            object.enumRepeated = [];
            for (var j = 0; j < message.enumRepeated.length; ++j)
                object.enumRepeated[j] = options.enums === String ? $root.Message.SomeEnum[message.enumRepeated[j]] === undefined ? message.enumRepeated[j] : $root.Message.SomeEnum[message.enumRepeated[j]] : message.enumRepeated[j];
        }
        var keys2;
        if (message.int64Map && (keys2 = Object.keys(message.int64Map)).length) {
            object.int64Map = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.int64Map[keys2[j]] === "number")
                    object.int64Map[keys2[j]] = options.longs === String ? String(message.int64Map[keys2[j]]) : message.int64Map[keys2[j]];
                else
                    object.int64Map[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.int64Map[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.int64Map[keys2[j]].low >>> 0, message.int64Map[keys2[j]].high >>> 0).toNumber() : message.int64Map[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Message
     * @function getTypeUrl
     * @memberof Message
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Message";
    };

    /**
     * SomeEnum enum.
     * @name Message.SomeEnum
     * @enum {number}
     * @property {number} ONE=1 ONE value
     * @property {number} TWO=2 TWO value
     */
    Message.SomeEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ONE"] = 1;
        values[valuesById[2] = "TWO"] = 2;
        return values;
    })();

    return Message;
})();

module.exports = $root;
