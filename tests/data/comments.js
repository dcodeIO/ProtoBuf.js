/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_comments || ($protobuf.roots.test_comments = {});

$root.Test1 = (function() {

    /**
     * Properties of a Test1.
     * @exports ITest1
     * @interface ITest1
     * @property {string|null} [field1] Field with a comment.
     * @property {number|null} [field2] Test1 field2
     * @property {boolean|null} [field3] Field with a comment and a <a href="http://example.com/foo/">link</a>
     */

    /**
     * Constructs a new Test1.
     * @exports Test1
     * @classdesc Message
     * with
     * a
     * comment.
     * @implements ITest1
     * @constructor
     * @param {ITest1=} [properties] Properties to set
     */
    function Test1(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Field with a comment.
     * @member {string} field1
     * @memberof Test1
     * @instance
     */
    Test1.prototype.field1 = "";

    /**
     * Test1 field2.
     * @member {number} field2
     * @memberof Test1
     * @instance
     */
    Test1.prototype.field2 = 0;

    /**
     * Field with a comment and a <a href="http://example.com/foo/">link</a>
     * @member {boolean} field3
     * @memberof Test1
     * @instance
     */
    Test1.prototype.field3 = false;

    /**
     * Creates a new Test1 instance using the specified properties.
     * @function create
     * @memberof Test1
     * @static
     * @param {ITest1=} [properties] Properties to set
     * @returns {Test1} Test1 instance
     */
    Test1.create = function create(properties) {
        return new Test1(properties);
    };

    /**
     * Encodes the specified Test1 message. Does not implicitly {@link Test1.verify|verify} messages.
     * @function encode
     * @memberof Test1
     * @static
     * @param {ITest1} message Test1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test1.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.Test1.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.Test1.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.field1);
        if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.field2);
        if (message.field3 != null && Object.hasOwnProperty.call(message, "field3"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.field3);
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified Test1 message, length delimited. Does not implicitly {@link Test1.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Test1
     * @static
     * @param {ITest1} message Test1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test1.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Test1 message from the specified reader or buffer.
     * @function decode
     * @memberof Test1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Test1} Test1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test1.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test1();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.field1 = reader.string();
                    break;
                }
            case 2: {
                    message.field2 = reader.uint32();
                    break;
                }
            case 3: {
                    message.field3 = reader.bool();
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
     * Decodes a Test1 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Test1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Test1} Test1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test1.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Test1 message.
     * @function verify
     * @memberof Test1
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Test1.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.field1 != null && message.hasOwnProperty("field1"))
            if (!$util.isString(message.field1))
                return "field1: string expected";
        if (message.field2 != null && message.hasOwnProperty("field2"))
            if (!$util.isInteger(message.field2))
                return "field2: integer expected";
        if (message.field3 != null && message.hasOwnProperty("field3"))
            if (typeof message.field3 !== "boolean")
                return "field3: boolean expected";
        return null;
    };

    /**
     * Creates a Test1 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Test1
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Test1} Test1
     */
    Test1.fromObject = function fromObject(object) {
        if (object instanceof $root.Test1)
            return object;
        var message = new $root.Test1();
        if (object.field1 != null)
            message.field1 = String(object.field1);
        if (object.field2 != null)
            message.field2 = object.field2 >>> 0;
        if (object.field3 != null)
            message.field3 = Boolean(object.field3);
        return message;
    };

    /**
     * Creates a plain object from a Test1 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Test1
     * @static
     * @param {Test1} message Test1
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Test1.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.field1 = "";
            object.field2 = 0;
            object.field3 = false;
        }
        if (message.field1 != null && message.hasOwnProperty("field1"))
            object.field1 = message.field1;
        if (message.field2 != null && message.hasOwnProperty("field2"))
            object.field2 = message.field2;
        if (message.field3 != null && message.hasOwnProperty("field3"))
            object.field3 = message.field3;
        return object;
    };

    /**
     * Converts this Test1 to JSON.
     * @function toJSON
     * @memberof Test1
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Test1.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Test1
     * @function getTypeUrl
     * @memberof Test1
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Test1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Test1";
    };

    return Test1;
})();

$root.Test2 = (function() {

    /**
     * Properties of a Test2.
     * @exports ITest2
     * @interface ITest2
     */

    /**
     * Constructs a new Test2.
     * @exports Test2
     * @classdesc Represents a Test2.
     * @implements ITest2
     * @constructor
     * @param {ITest2=} [properties] Properties to set
     */
    function Test2(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Test2 instance using the specified properties.
     * @function create
     * @memberof Test2
     * @static
     * @param {ITest2=} [properties] Properties to set
     * @returns {Test2} Test2 instance
     */
    Test2.create = function create(properties) {
        return new Test2(properties);
    };

    /**
     * Encodes the specified Test2 message. Does not implicitly {@link Test2.verify|verify} messages.
     * @function encode
     * @memberof Test2
     * @static
     * @param {ITest2} message Test2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test2.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.Test2.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.Test2.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified Test2 message, length delimited. Does not implicitly {@link Test2.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Test2
     * @static
     * @param {ITest2} message Test2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Test2.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Test2 message from the specified reader or buffer.
     * @function decode
     * @memberof Test2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Test2} Test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test2.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Test2();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
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
     * Decodes a Test2 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Test2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Test2} Test2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Test2.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Test2 message.
     * @function verify
     * @memberof Test2
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Test2.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Test2 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Test2
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Test2} Test2
     */
    Test2.fromObject = function fromObject(object) {
        if (object instanceof $root.Test2)
            return object;
        return new $root.Test2();
    };

    /**
     * Creates a plain object from a Test2 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Test2
     * @static
     * @param {Test2} message Test2
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Test2.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Test2 to JSON.
     * @function toJSON
     * @memberof Test2
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Test2.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Test2
     * @function getTypeUrl
     * @memberof Test2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Test2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Test2";
    };

    return Test2;
})();

/**
 * Test3 enum.
 * @exports Test3
 * @enum {number}
 * @property {number} ONE=1 Value with a comment.
 * @property {number} TWO=2 TWO value
 * @property {number} THREE=3 Preferred value with a comment.
 * @property {number} FOUR=4 Other value with a comment.
 * @property {number} FIVE=5 Leading comment for value with both types of comments after field with trailing comment.
 */
$root.Test3 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "ONE"] = 1;
    values[valuesById[2] = "TWO"] = 2;
    values[valuesById[3] = "THREE"] = 3;
    values[valuesById[4] = "FOUR"] = 4;
    values[valuesById[5] = "FIVE"] = 5;
    return values;
})();

module.exports = $root;
