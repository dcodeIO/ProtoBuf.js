/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_type_url || ($protobuf.roots.test_type_url = {});

$root.TypeUrlTest = (function() {

    /**
     * Properties of a TypeUrlTest.
     * @exports ITypeUrlTest
     * @interface ITypeUrlTest
     * @property {TypeUrlTest.INested|null} [nested] TypeUrlTest nested
     */

    /**
     * Constructs a new TypeUrlTest.
     * @exports TypeUrlTest
     * @classdesc Represents a TypeUrlTest.
     * @implements ITypeUrlTest
     * @constructor
     * @param {ITypeUrlTest=} [properties] Properties to set
     */
    function TypeUrlTest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TypeUrlTest nested.
     * @member {TypeUrlTest.INested|null|undefined} nested
     * @memberof TypeUrlTest
     * @instance
     */
    TypeUrlTest.prototype.nested = null;

    /**
     * Creates a new TypeUrlTest instance using the specified properties.
     * @function create
     * @memberof TypeUrlTest
     * @static
     * @param {ITypeUrlTest=} [properties] Properties to set
     * @returns {TypeUrlTest} TypeUrlTest instance
     */
    TypeUrlTest.create = function create(properties) {
        return new TypeUrlTest(properties);
    };

    /**
     * Encodes the specified TypeUrlTest message. Does not implicitly {@link TypeUrlTest.verify|verify} messages.
     * @function encode
     * @memberof TypeUrlTest
     * @static
     * @param {ITypeUrlTest} message TypeUrlTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeUrlTest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.TypeUrlTest.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.TypeUrlTest.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.nested != null && Object.hasOwnProperty.call(message, "nested"))
            $root.TypeUrlTest.Nested.encode(message.nested, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified TypeUrlTest message, length delimited. Does not implicitly {@link TypeUrlTest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TypeUrlTest
     * @static
     * @param {ITypeUrlTest} message TypeUrlTest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeUrlTest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TypeUrlTest message from the specified reader or buffer.
     * @function decode
     * @memberof TypeUrlTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TypeUrlTest} TypeUrlTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeUrlTest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TypeUrlTest();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.nested = $root.TypeUrlTest.Nested.decode(reader, reader.uint32());
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
     * Decodes a TypeUrlTest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TypeUrlTest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TypeUrlTest} TypeUrlTest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeUrlTest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TypeUrlTest message.
     * @function verify
     * @memberof TypeUrlTest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TypeUrlTest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nested != null && message.hasOwnProperty("nested")) {
            var error = $root.TypeUrlTest.Nested.verify(message.nested);
            if (error)
                return "nested." + error;
        }
        return null;
    };

    /**
     * Creates a TypeUrlTest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TypeUrlTest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TypeUrlTest} TypeUrlTest
     */
    TypeUrlTest.fromObject = function fromObject(object) {
        if (object instanceof $root.TypeUrlTest)
            return object;
        var message = new $root.TypeUrlTest();
        if (object.nested != null) {
            if (typeof object.nested !== "object")
                throw TypeError(".TypeUrlTest.nested: object expected");
            message.nested = $root.TypeUrlTest.Nested.fromObject(object.nested);
        }
        return message;
    };

    /**
     * Creates a plain object from a TypeUrlTest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TypeUrlTest
     * @static
     * @param {TypeUrlTest} message TypeUrlTest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TypeUrlTest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nested = null;
        if (message.nested != null && message.hasOwnProperty("nested"))
            object.nested = $root.TypeUrlTest.Nested.toObject(message.nested, options);
        return object;
    };

    /**
     * Converts this TypeUrlTest to JSON.
     * @function toJSON
     * @memberof TypeUrlTest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TypeUrlTest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TypeUrlTest
     * @function getTypeUrl
     * @memberof TypeUrlTest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TypeUrlTest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TypeUrlTest";
    };

    TypeUrlTest.Nested = (function() {

        /**
         * Properties of a Nested.
         * @memberof TypeUrlTest
         * @interface INested
         * @property {string|null} [a] Nested a
         */

        /**
         * Constructs a new Nested.
         * @memberof TypeUrlTest
         * @classdesc Represents a Nested.
         * @implements INested
         * @constructor
         * @param {TypeUrlTest.INested=} [properties] Properties to set
         */
        function Nested(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Nested a.
         * @member {string} a
         * @memberof TypeUrlTest.Nested
         * @instance
         */
        Nested.prototype.a = "";

        /**
         * Creates a new Nested instance using the specified properties.
         * @function create
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {TypeUrlTest.INested=} [properties] Properties to set
         * @returns {TypeUrlTest.Nested} Nested instance
         */
        Nested.create = function create(properties) {
            return new Nested(properties);
        };

        /**
         * Encodes the specified Nested message. Does not implicitly {@link TypeUrlTest.Nested.verify|verify} messages.
         * @function encode
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {TypeUrlTest.INested} message Nested message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Nested.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            var fullyUnknown = [];
            if (message.$unknownFields && $root.TypeUrlTest.Nested.decode)
                for (var i = 0; i < message.$unknownFields.length; ++i)
                    try {
                        var known = $root.TypeUrlTest.Nested.decode(message.$unknownFields[i]);
                        fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                        message = Object.assign(known, message);
                    } catch (_) {
                    }
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            for (var i = 0; i < fullyUnknown.length; ++i)
                writer._unknownField(fullyUnknown[i]);
            return writer;
        };

        /**
         * Encodes the specified Nested message, length delimited. Does not implicitly {@link TypeUrlTest.Nested.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {TypeUrlTest.INested} message Nested message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Nested.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Nested message from the specified reader or buffer.
         * @function decode
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TypeUrlTest.Nested} Nested
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Nested.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TypeUrlTest.Nested();
            while (reader.pos < end) {
                var unknownStartPos = reader.pos;
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.a = reader.string();
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
         * Decodes a Nested message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TypeUrlTest.Nested} Nested
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Nested.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Nested message.
         * @function verify
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Nested.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            return null;
        };

        /**
         * Creates a Nested message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TypeUrlTest.Nested} Nested
         */
        Nested.fromObject = function fromObject(object) {
            if (object instanceof $root.TypeUrlTest.Nested)
                return object;
            var message = new $root.TypeUrlTest.Nested();
            if (object.a != null)
                message.a = String(object.a);
            return message;
        };

        /**
         * Creates a plain object from a Nested message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {TypeUrlTest.Nested} message Nested
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Nested.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.a = "";
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            return object;
        };

        /**
         * Converts this Nested to JSON.
         * @function toJSON
         * @memberof TypeUrlTest.Nested
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Nested.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Nested
         * @function getTypeUrl
         * @memberof TypeUrlTest.Nested
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Nested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TypeUrlTest.Nested";
        };

        return Nested;
    })();

    return TypeUrlTest;
})();

module.exports = $root;
