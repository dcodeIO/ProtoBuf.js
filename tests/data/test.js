/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.test_test || ($protobuf.roots.test_test = {});

$root.jspb = (function() {

    /**
     * Namespace jspb.
     * @exports jspb
     * @namespace
     */
    var jspb = {};

    jspb.test = (function() {

        /**
         * Namespace test.
         * @memberof jspb
         * @namespace
         */
        var test = {};

        test.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof jspb.test
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof jspb.test
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {jspb.test.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof jspb.test.Empty
             * @static
             * @param {jspb.test.IEmpty=} [properties] Properties to set
             * @returns {jspb.test.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link jspb.test.Empty.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.Empty
             * @static
             * @param {jspb.test.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.Empty.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.Empty.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link jspb.test.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.Empty
             * @static
             * @param {jspb.test.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Empty();
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
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof jspb.test.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.Empty)
                    return object;
                return new $root.jspb.test.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.Empty
             * @static
             * @param {jspb.test.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof jspb.test.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof jspb.test.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.Empty";
            };

            return Empty;
        })();

        /**
         * OuterEnum enum.
         * @name jspb.test.OuterEnum
         * @enum {number}
         * @property {number} FOO=1 FOO value
         * @property {number} BAR=2 BAR value
         */
        test.OuterEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "FOO"] = 1;
            values[valuesById[2] = "BAR"] = 2;
            return values;
        })();

        test.EnumContainer = (function() {

            /**
             * Properties of an EnumContainer.
             * @memberof jspb.test
             * @interface IEnumContainer
             * @property {jspb.test.OuterEnum|null} [outerEnum] EnumContainer outerEnum
             */

            /**
             * Constructs a new EnumContainer.
             * @memberof jspb.test
             * @classdesc Represents an EnumContainer.
             * @implements IEnumContainer
             * @constructor
             * @param {jspb.test.IEnumContainer=} [properties] Properties to set
             */
            function EnumContainer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumContainer outerEnum.
             * @member {jspb.test.OuterEnum} outerEnum
             * @memberof jspb.test.EnumContainer
             * @instance
             */
            EnumContainer.prototype.outerEnum = 1;

            /**
             * Creates a new EnumContainer instance using the specified properties.
             * @function create
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {jspb.test.IEnumContainer=} [properties] Properties to set
             * @returns {jspb.test.EnumContainer} EnumContainer instance
             */
            EnumContainer.create = function create(properties) {
                return new EnumContainer(properties);
            };

            /**
             * Encodes the specified EnumContainer message. Does not implicitly {@link jspb.test.EnumContainer.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {jspb.test.IEnumContainer} message EnumContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumContainer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.EnumContainer.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.EnumContainer.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.outerEnum != null && Object.hasOwnProperty.call(message, "outerEnum"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.outerEnum);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumContainer message, length delimited. Does not implicitly {@link jspb.test.EnumContainer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {jspb.test.IEnumContainer} message EnumContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumContainer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumContainer message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.EnumContainer} EnumContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumContainer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.EnumContainer();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.outerEnum = reader.int32();
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
             * Decodes an EnumContainer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.EnumContainer} EnumContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumContainer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumContainer message.
             * @function verify
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumContainer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.outerEnum != null && message.hasOwnProperty("outerEnum"))
                    switch (message.outerEnum) {
                    default:
                        return "outerEnum: enum value expected";
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates an EnumContainer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.EnumContainer} EnumContainer
             */
            EnumContainer.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.EnumContainer)
                    return object;
                var message = new $root.jspb.test.EnumContainer();
                switch (object.outerEnum) {
                default:
                    if (typeof object.outerEnum === "number") {
                        message.outerEnum = object.outerEnum;
                        break;
                    }
                    break;
                case "FOO":
                case 1:
                    message.outerEnum = 1;
                    break;
                case "BAR":
                case 2:
                    message.outerEnum = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumContainer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {jspb.test.EnumContainer} message EnumContainer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumContainer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.outerEnum = options.enums === String ? "FOO" : 1;
                if (message.outerEnum != null && message.hasOwnProperty("outerEnum"))
                    object.outerEnum = options.enums === String ? $root.jspb.test.OuterEnum[message.outerEnum] === undefined ? message.outerEnum : $root.jspb.test.OuterEnum[message.outerEnum] : message.outerEnum;
                return object;
            };

            /**
             * Converts this EnumContainer to JSON.
             * @function toJSON
             * @memberof jspb.test.EnumContainer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumContainer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumContainer
             * @function getTypeUrl
             * @memberof jspb.test.EnumContainer
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumContainer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.EnumContainer";
            };

            return EnumContainer;
        })();

        test.Simple1 = (function() {

            /**
             * Properties of a Simple1.
             * @memberof jspb.test
             * @interface ISimple1
             * @property {string} aString Simple1 aString
             * @property {Array.<string>|null} [aRepeatedString] Simple1 aRepeatedString
             * @property {boolean|null} [aBoolean] Simple1 aBoolean
             */

            /**
             * Constructs a new Simple1.
             * @memberof jspb.test
             * @classdesc Represents a Simple1.
             * @implements ISimple1
             * @constructor
             * @param {jspb.test.ISimple1=} [properties] Properties to set
             */
            function Simple1(properties) {
                this.aRepeatedString = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Simple1 aString.
             * @member {string} aString
             * @memberof jspb.test.Simple1
             * @instance
             */
            Simple1.prototype.aString = "";

            /**
             * Simple1 aRepeatedString.
             * @member {Array.<string>} aRepeatedString
             * @memberof jspb.test.Simple1
             * @instance
             */
            Simple1.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Simple1 aBoolean.
             * @member {boolean} aBoolean
             * @memberof jspb.test.Simple1
             * @instance
             */
            Simple1.prototype.aBoolean = false;

            /**
             * Creates a new Simple1 instance using the specified properties.
             * @function create
             * @memberof jspb.test.Simple1
             * @static
             * @param {jspb.test.ISimple1=} [properties] Properties to set
             * @returns {jspb.test.Simple1} Simple1 instance
             */
            Simple1.create = function create(properties) {
                return new Simple1(properties);
            };

            /**
             * Encodes the specified Simple1 message. Does not implicitly {@link jspb.test.Simple1.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.Simple1
             * @static
             * @param {jspb.test.ISimple1} message Simple1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple1.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.Simple1.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.Simple1.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
                if (message.aRepeatedString != null && message.aRepeatedString.length)
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.aRepeatedString[i]);
                if (message.aBoolean != null && Object.hasOwnProperty.call(message, "aBoolean"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.aBoolean);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified Simple1 message, length delimited. Does not implicitly {@link jspb.test.Simple1.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.Simple1
             * @static
             * @param {jspb.test.ISimple1} message Simple1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple1.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Simple1 message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.Simple1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Simple1} Simple1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Simple1.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Simple1();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.aString = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.aRepeatedString && message.aRepeatedString.length))
                                message.aRepeatedString = [];
                            message.aRepeatedString.push(reader.string());
                            break;
                        }
                    case 3: {
                            message.aBoolean = reader.bool();
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
                if (!message.hasOwnProperty("aString"))
                    throw $util.ProtocolError("missing required 'aString'", { instance: message });
                return message;
            };

            /**
             * Decodes a Simple1 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.Simple1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.Simple1} Simple1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Simple1.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Simple1 message.
             * @function verify
             * @memberof jspb.test.Simple1
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Simple1.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.aString))
                    return "aString: string expected";
                if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
                    if (!Array.isArray(message.aRepeatedString))
                        return "aRepeatedString: array expected";
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        if (!$util.isString(message.aRepeatedString[i]))
                            return "aRepeatedString: string[] expected";
                }
                if (message.aBoolean != null && message.hasOwnProperty("aBoolean"))
                    if (typeof message.aBoolean !== "boolean")
                        return "aBoolean: boolean expected";
                return null;
            };

            /**
             * Creates a Simple1 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.Simple1
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple1} Simple1
             */
            Simple1.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.Simple1)
                    return object;
                var message = new $root.jspb.test.Simple1();
                if (object.aString != null)
                    message.aString = String(object.aString);
                if (object.aRepeatedString) {
                    if (!Array.isArray(object.aRepeatedString))
                        throw TypeError(".jspb.test.Simple1.aRepeatedString: array expected");
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i)
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                }
                if (object.aBoolean != null)
                    message.aBoolean = Boolean(object.aBoolean);
                return message;
            };

            /**
             * Creates a plain object from a Simple1 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.Simple1
             * @static
             * @param {jspb.test.Simple1} message Simple1
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple1.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.aRepeatedString = [];
                if (options.defaults) {
                    object.aString = "";
                    object.aBoolean = false;
                }
                if (message.aString != null && message.hasOwnProperty("aString"))
                    object.aString = message.aString;
                if (message.aRepeatedString && message.aRepeatedString.length) {
                    object.aRepeatedString = [];
                    for (var j = 0; j < message.aRepeatedString.length; ++j)
                        object.aRepeatedString[j] = message.aRepeatedString[j];
                }
                if (message.aBoolean != null && message.hasOwnProperty("aBoolean"))
                    object.aBoolean = message.aBoolean;
                return object;
            };

            /**
             * Converts this Simple1 to JSON.
             * @function toJSON
             * @memberof jspb.test.Simple1
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Simple1.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Simple1
             * @function getTypeUrl
             * @memberof jspb.test.Simple1
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Simple1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.Simple1";
            };

            return Simple1;
        })();

        test.Simple2 = (function() {

            /**
             * Properties of a Simple2.
             * @memberof jspb.test
             * @interface ISimple2
             * @property {string} aString Simple2 aString
             * @property {Array.<string>|null} [aRepeatedString] Simple2 aRepeatedString
             */

            /**
             * Constructs a new Simple2.
             * @memberof jspb.test
             * @classdesc Represents a Simple2.
             * @implements ISimple2
             * @constructor
             * @param {jspb.test.ISimple2=} [properties] Properties to set
             */
            function Simple2(properties) {
                this.aRepeatedString = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Simple2 aString.
             * @member {string} aString
             * @memberof jspb.test.Simple2
             * @instance
             */
            Simple2.prototype.aString = "";

            /**
             * Simple2 aRepeatedString.
             * @member {Array.<string>} aRepeatedString
             * @memberof jspb.test.Simple2
             * @instance
             */
            Simple2.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Creates a new Simple2 instance using the specified properties.
             * @function create
             * @memberof jspb.test.Simple2
             * @static
             * @param {jspb.test.ISimple2=} [properties] Properties to set
             * @returns {jspb.test.Simple2} Simple2 instance
             */
            Simple2.create = function create(properties) {
                return new Simple2(properties);
            };

            /**
             * Encodes the specified Simple2 message. Does not implicitly {@link jspb.test.Simple2.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.Simple2
             * @static
             * @param {jspb.test.ISimple2} message Simple2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.Simple2.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.Simple2.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
                if (message.aRepeatedString != null && message.aRepeatedString.length)
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.aRepeatedString[i]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified Simple2 message, length delimited. Does not implicitly {@link jspb.test.Simple2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.Simple2
             * @static
             * @param {jspb.test.ISimple2} message Simple2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Simple2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Simple2 message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.Simple2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Simple2} Simple2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Simple2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Simple2();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.aString = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.aRepeatedString && message.aRepeatedString.length))
                                message.aRepeatedString = [];
                            message.aRepeatedString.push(reader.string());
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
                if (!message.hasOwnProperty("aString"))
                    throw $util.ProtocolError("missing required 'aString'", { instance: message });
                return message;
            };

            /**
             * Decodes a Simple2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.Simple2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.Simple2} Simple2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Simple2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Simple2 message.
             * @function verify
             * @memberof jspb.test.Simple2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Simple2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.aString))
                    return "aString: string expected";
                if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
                    if (!Array.isArray(message.aRepeatedString))
                        return "aRepeatedString: array expected";
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        if (!$util.isString(message.aRepeatedString[i]))
                            return "aRepeatedString: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Simple2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.Simple2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Simple2} Simple2
             */
            Simple2.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.Simple2)
                    return object;
                var message = new $root.jspb.test.Simple2();
                if (object.aString != null)
                    message.aString = String(object.aString);
                if (object.aRepeatedString) {
                    if (!Array.isArray(object.aRepeatedString))
                        throw TypeError(".jspb.test.Simple2.aRepeatedString: array expected");
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i)
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Simple2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.Simple2
             * @static
             * @param {jspb.test.Simple2} message Simple2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Simple2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.aRepeatedString = [];
                if (options.defaults)
                    object.aString = "";
                if (message.aString != null && message.hasOwnProperty("aString"))
                    object.aString = message.aString;
                if (message.aRepeatedString && message.aRepeatedString.length) {
                    object.aRepeatedString = [];
                    for (var j = 0; j < message.aRepeatedString.length; ++j)
                        object.aRepeatedString[j] = message.aRepeatedString[j];
                }
                return object;
            };

            /**
             * Converts this Simple2 to JSON.
             * @function toJSON
             * @memberof jspb.test.Simple2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Simple2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Simple2
             * @function getTypeUrl
             * @memberof jspb.test.Simple2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Simple2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.Simple2";
            };

            return Simple2;
        })();

        test.SpecialCases = (function() {

            /**
             * Properties of a SpecialCases.
             * @memberof jspb.test
             * @interface ISpecialCases
             * @property {string} normal SpecialCases normal
             * @property {string} "default" SpecialCases default
             * @property {string} "function" SpecialCases function
             * @property {string} "var" SpecialCases var
             */

            /**
             * Constructs a new SpecialCases.
             * @memberof jspb.test
             * @classdesc Represents a SpecialCases.
             * @implements ISpecialCases
             * @constructor
             * @param {jspb.test.ISpecialCases=} [properties] Properties to set
             */
            function SpecialCases(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SpecialCases normal.
             * @member {string} normal
             * @memberof jspb.test.SpecialCases
             * @instance
             */
            SpecialCases.prototype.normal = "";

            /**
             * SpecialCases default.
             * @member {string} default
             * @memberof jspb.test.SpecialCases
             * @instance
             */
            SpecialCases.prototype["default"] = "";

            /**
             * SpecialCases function.
             * @member {string} function
             * @memberof jspb.test.SpecialCases
             * @instance
             */
            SpecialCases.prototype["function"] = "";

            /**
             * SpecialCases var.
             * @member {string} var
             * @memberof jspb.test.SpecialCases
             * @instance
             */
            SpecialCases.prototype["var"] = "";

            /**
             * Creates a new SpecialCases instance using the specified properties.
             * @function create
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {jspb.test.ISpecialCases=} [properties] Properties to set
             * @returns {jspb.test.SpecialCases} SpecialCases instance
             */
            SpecialCases.create = function create(properties) {
                return new SpecialCases(properties);
            };

            /**
             * Encodes the specified SpecialCases message. Does not implicitly {@link jspb.test.SpecialCases.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {jspb.test.ISpecialCases} message SpecialCases message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpecialCases.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.SpecialCases.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.SpecialCases.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.normal);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message["default"]);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message["function"]);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message["var"]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified SpecialCases message, length delimited. Does not implicitly {@link jspb.test.SpecialCases.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {jspb.test.ISpecialCases} message SpecialCases message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpecialCases.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SpecialCases message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.SpecialCases} SpecialCases
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SpecialCases.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.SpecialCases();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.normal = reader.string();
                            break;
                        }
                    case 2: {
                            message["default"] = reader.string();
                            break;
                        }
                    case 3: {
                            message["function"] = reader.string();
                            break;
                        }
                    case 4: {
                            message["var"] = reader.string();
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
                if (!message.hasOwnProperty("normal"))
                    throw $util.ProtocolError("missing required 'normal'", { instance: message });
                if (!message.hasOwnProperty("default"))
                    throw $util.ProtocolError("missing required 'default'", { instance: message });
                if (!message.hasOwnProperty("function"))
                    throw $util.ProtocolError("missing required 'function'", { instance: message });
                if (!message.hasOwnProperty("var"))
                    throw $util.ProtocolError("missing required 'var'", { instance: message });
                return message;
            };

            /**
             * Decodes a SpecialCases message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.SpecialCases} SpecialCases
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SpecialCases.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SpecialCases message.
             * @function verify
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SpecialCases.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.normal))
                    return "normal: string expected";
                if (!$util.isString(message["default"]))
                    return "default: string expected";
                if (!$util.isString(message["function"]))
                    return "function: string expected";
                if (!$util.isString(message["var"]))
                    return "var: string expected";
                return null;
            };

            /**
             * Creates a SpecialCases message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.SpecialCases} SpecialCases
             */
            SpecialCases.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.SpecialCases)
                    return object;
                var message = new $root.jspb.test.SpecialCases();
                if (object.normal != null)
                    message.normal = String(object.normal);
                if (object["default"] != null)
                    message["default"] = String(object["default"]);
                if (object["function"] != null)
                    message["function"] = String(object["function"]);
                if (object["var"] != null)
                    message["var"] = String(object["var"]);
                return message;
            };

            /**
             * Creates a plain object from a SpecialCases message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {jspb.test.SpecialCases} message SpecialCases
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SpecialCases.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.normal = "";
                    object["default"] = "";
                    object["function"] = "";
                    object["var"] = "";
                }
                if (message.normal != null && message.hasOwnProperty("normal"))
                    object.normal = message.normal;
                if (message["default"] != null && message.hasOwnProperty("default"))
                    object["default"] = message["default"];
                if (message["function"] != null && message.hasOwnProperty("function"))
                    object["function"] = message["function"];
                if (message["var"] != null && message.hasOwnProperty("var"))
                    object["var"] = message["var"];
                return object;
            };

            /**
             * Converts this SpecialCases to JSON.
             * @function toJSON
             * @memberof jspb.test.SpecialCases
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SpecialCases.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SpecialCases
             * @function getTypeUrl
             * @memberof jspb.test.SpecialCases
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SpecialCases.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.SpecialCases";
            };

            return SpecialCases;
        })();

        test.OptionalFields = (function() {

            /**
             * Properties of an OptionalFields.
             * @memberof jspb.test
             * @interface IOptionalFields
             * @property {string|null} [aString] OptionalFields aString
             * @property {boolean} aBool OptionalFields aBool
             * @property {jspb.test.OptionalFields.INested|null} [aNestedMessage] OptionalFields aNestedMessage
             * @property {Array.<jspb.test.OptionalFields.INested>|null} [aRepeatedMessage] OptionalFields aRepeatedMessage
             * @property {Array.<string>|null} [aRepeatedString] OptionalFields aRepeatedString
             */

            /**
             * Constructs a new OptionalFields.
             * @memberof jspb.test
             * @classdesc Represents an OptionalFields.
             * @implements IOptionalFields
             * @constructor
             * @param {jspb.test.IOptionalFields=} [properties] Properties to set
             */
            function OptionalFields(properties) {
                this.aRepeatedMessage = [];
                this.aRepeatedString = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OptionalFields aString.
             * @member {string} aString
             * @memberof jspb.test.OptionalFields
             * @instance
             */
            OptionalFields.prototype.aString = "";

            /**
             * OptionalFields aBool.
             * @member {boolean} aBool
             * @memberof jspb.test.OptionalFields
             * @instance
             */
            OptionalFields.prototype.aBool = false;

            /**
             * OptionalFields aNestedMessage.
             * @member {jspb.test.OptionalFields.INested|null|undefined} aNestedMessage
             * @memberof jspb.test.OptionalFields
             * @instance
             */
            OptionalFields.prototype.aNestedMessage = null;

            /**
             * OptionalFields aRepeatedMessage.
             * @member {Array.<jspb.test.OptionalFields.INested>} aRepeatedMessage
             * @memberof jspb.test.OptionalFields
             * @instance
             */
            OptionalFields.prototype.aRepeatedMessage = $util.emptyArray;

            /**
             * OptionalFields aRepeatedString.
             * @member {Array.<string>} aRepeatedString
             * @memberof jspb.test.OptionalFields
             * @instance
             */
            OptionalFields.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Creates a new OptionalFields instance using the specified properties.
             * @function create
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {jspb.test.IOptionalFields=} [properties] Properties to set
             * @returns {jspb.test.OptionalFields} OptionalFields instance
             */
            OptionalFields.create = function create(properties) {
                return new OptionalFields(properties);
            };

            /**
             * Encodes the specified OptionalFields message. Does not implicitly {@link jspb.test.OptionalFields.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {jspb.test.IOptionalFields} message OptionalFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionalFields.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.OptionalFields.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.OptionalFields.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.aString != null && Object.hasOwnProperty.call(message, "aString"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.aBool);
                if (message.aNestedMessage != null && Object.hasOwnProperty.call(message, "aNestedMessage"))
                    $root.jspb.test.OptionalFields.Nested.encode(message.aNestedMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                        $root.jspb.test.OptionalFields.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.aRepeatedString != null && message.aRepeatedString.length)
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.aRepeatedString[i]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified OptionalFields message, length delimited. Does not implicitly {@link jspb.test.OptionalFields.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {jspb.test.IOptionalFields} message OptionalFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OptionalFields.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OptionalFields message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.OptionalFields} OptionalFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionalFields.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.OptionalFields();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.aString = reader.string();
                            break;
                        }
                    case 2: {
                            message.aBool = reader.bool();
                            break;
                        }
                    case 3: {
                            message.aNestedMessage = $root.jspb.test.OptionalFields.Nested.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                                message.aRepeatedMessage = [];
                            message.aRepeatedMessage.push($root.jspb.test.OptionalFields.Nested.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.aRepeatedString && message.aRepeatedString.length))
                                message.aRepeatedString = [];
                            message.aRepeatedString.push(reader.string());
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
                if (!message.hasOwnProperty("aBool"))
                    throw $util.ProtocolError("missing required 'aBool'", { instance: message });
                return message;
            };

            /**
             * Decodes an OptionalFields message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.OptionalFields} OptionalFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OptionalFields.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OptionalFields message.
             * @function verify
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OptionalFields.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.aString != null && message.hasOwnProperty("aString"))
                    if (!$util.isString(message.aString))
                        return "aString: string expected";
                if (typeof message.aBool !== "boolean")
                    return "aBool: boolean expected";
                if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage")) {
                    var error = $root.jspb.test.OptionalFields.Nested.verify(message.aNestedMessage);
                    if (error)
                        return "aNestedMessage." + error;
                }
                if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
                    if (!Array.isArray(message.aRepeatedMessage))
                        return "aRepeatedMessage: array expected";
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        var error = $root.jspb.test.OptionalFields.Nested.verify(message.aRepeatedMessage[i]);
                        if (error)
                            return "aRepeatedMessage." + error;
                    }
                }
                if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
                    if (!Array.isArray(message.aRepeatedString))
                        return "aRepeatedString: array expected";
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        if (!$util.isString(message.aRepeatedString[i]))
                            return "aRepeatedString: string[] expected";
                }
                return null;
            };

            /**
             * Creates an OptionalFields message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OptionalFields} OptionalFields
             */
            OptionalFields.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.OptionalFields)
                    return object;
                var message = new $root.jspb.test.OptionalFields();
                if (object.aString != null)
                    message.aString = String(object.aString);
                if (object.aBool != null)
                    message.aBool = Boolean(object.aBool);
                if (object.aNestedMessage != null) {
                    if (typeof object.aNestedMessage !== "object")
                        throw TypeError(".jspb.test.OptionalFields.aNestedMessage: object expected");
                    message.aNestedMessage = $root.jspb.test.OptionalFields.Nested.fromObject(object.aNestedMessage);
                }
                if (object.aRepeatedMessage) {
                    if (!Array.isArray(object.aRepeatedMessage))
                        throw TypeError(".jspb.test.OptionalFields.aRepeatedMessage: array expected");
                    message.aRepeatedMessage = [];
                    for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                        if (typeof object.aRepeatedMessage[i] !== "object")
                            throw TypeError(".jspb.test.OptionalFields.aRepeatedMessage: object expected");
                        message.aRepeatedMessage[i] = $root.jspb.test.OptionalFields.Nested.fromObject(object.aRepeatedMessage[i]);
                    }
                }
                if (object.aRepeatedString) {
                    if (!Array.isArray(object.aRepeatedString))
                        throw TypeError(".jspb.test.OptionalFields.aRepeatedString: array expected");
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i)
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an OptionalFields message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {jspb.test.OptionalFields} message OptionalFields
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OptionalFields.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedMessage = [];
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                    object.aBool = false;
                    object.aNestedMessage = null;
                }
                if (message.aString != null && message.hasOwnProperty("aString"))
                    object.aString = message.aString;
                if (message.aBool != null && message.hasOwnProperty("aBool"))
                    object.aBool = message.aBool;
                if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage"))
                    object.aNestedMessage = $root.jspb.test.OptionalFields.Nested.toObject(message.aNestedMessage, options);
                if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
                    object.aRepeatedMessage = [];
                    for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                        object.aRepeatedMessage[j] = $root.jspb.test.OptionalFields.Nested.toObject(message.aRepeatedMessage[j], options);
                }
                if (message.aRepeatedString && message.aRepeatedString.length) {
                    object.aRepeatedString = [];
                    for (var j = 0; j < message.aRepeatedString.length; ++j)
                        object.aRepeatedString[j] = message.aRepeatedString[j];
                }
                return object;
            };

            /**
             * Converts this OptionalFields to JSON.
             * @function toJSON
             * @memberof jspb.test.OptionalFields
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OptionalFields.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OptionalFields
             * @function getTypeUrl
             * @memberof jspb.test.OptionalFields
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OptionalFields.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.OptionalFields";
            };

            OptionalFields.Nested = (function() {

                /**
                 * Properties of a Nested.
                 * @memberof jspb.test.OptionalFields
                 * @interface INested
                 * @property {number|null} [anInt] Nested anInt
                 */

                /**
                 * Constructs a new Nested.
                 * @memberof jspb.test.OptionalFields
                 * @classdesc Represents a Nested.
                 * @implements INested
                 * @constructor
                 * @param {jspb.test.OptionalFields.INested=} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Nested anInt.
                 * @member {number} anInt
                 * @memberof jspb.test.OptionalFields.Nested
                 * @instance
                 */
                Nested.prototype.anInt = 0;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {jspb.test.OptionalFields.INested=} [properties] Properties to set
                 * @returns {jspb.test.OptionalFields.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.OptionalFields.Nested.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {jspb.test.OptionalFields.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.OptionalFields.Nested.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.OptionalFields.Nested.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.anInt != null && Object.hasOwnProperty.call(message, "anInt"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.anInt);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.OptionalFields.Nested.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {jspb.test.OptionalFields.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Nested.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.OptionalFields.Nested();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.anInt = reader.int32();
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
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.OptionalFields.Nested} Nested
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
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.anInt != null && message.hasOwnProperty("anInt"))
                        if (!$util.isInteger(message.anInt))
                            return "anInt: integer expected";
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OptionalFields.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.OptionalFields.Nested)
                        return object;
                    var message = new $root.jspb.test.OptionalFields.Nested();
                    if (object.anInt != null)
                        message.anInt = object.anInt | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {jspb.test.OptionalFields.Nested} message Nested
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.anInt = 0;
                    if (message.anInt != null && message.hasOwnProperty("anInt"))
                        object.anInt = message.anInt;
                    return object;
                };

                /**
                 * Converts this Nested to JSON.
                 * @function toJSON
                 * @memberof jspb.test.OptionalFields.Nested
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Nested
                 * @function getTypeUrl
                 * @memberof jspb.test.OptionalFields.Nested
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Nested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.OptionalFields.Nested";
                };

                return Nested;
            })();

            return OptionalFields;
        })();

        test.HasExtensions = (function() {

            /**
             * Properties of a HasExtensions.
             * @memberof jspb.test
             * @interface IHasExtensions
             * @property {string|null} [str1] HasExtensions str1
             * @property {string|null} [str2] HasExtensions str2
             * @property {string|null} [str3] HasExtensions str3
             * @property {jspb.test.IIsExtension|null} [".jspb.test.IsExtension.extField"] HasExtensions .jspb.test.IsExtension.extField
             * @property {jspb.test.ISimple1|null} [".jspb.test.IndirectExtension.simple"] HasExtensions .jspb.test.IndirectExtension.simple
             * @property {string|null} [".jspb.test.IndirectExtension.str"] HasExtensions .jspb.test.IndirectExtension.str
             * @property {Array.<string>|null} [".jspb.test.IndirectExtension.repeatedStr"] HasExtensions .jspb.test.IndirectExtension.repeatedStr
             * @property {Array.<jspb.test.ISimple1>|null} [".jspb.test.IndirectExtension.repeatedSimple"] HasExtensions .jspb.test.IndirectExtension.repeatedSimple
             * @property {jspb.test.ISimple1|null} [".jspb.test.simple1"] HasExtensions .jspb.test.simple1
             */

            /**
             * Constructs a new HasExtensions.
             * @memberof jspb.test
             * @classdesc Represents a HasExtensions.
             * @implements IHasExtensions
             * @constructor
             * @param {jspb.test.IHasExtensions=} [properties] Properties to set
             */
            function HasExtensions(properties) {
                this[".jspb.test.IndirectExtension.repeatedStr"] = [];
                this[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HasExtensions str1.
             * @member {string} str1
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype.str1 = "";

            /**
             * HasExtensions str2.
             * @member {string} str2
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype.str2 = "";

            /**
             * HasExtensions str3.
             * @member {string} str3
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype.str3 = "";

            /**
             * HasExtensions .jspb.test.IsExtension.extField.
             * @member {jspb.test.IIsExtension|null|undefined} .jspb.test.IsExtension.extField
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.IsExtension.extField"] = null;

            /**
             * HasExtensions .jspb.test.IndirectExtension.simple.
             * @member {jspb.test.ISimple1|null|undefined} .jspb.test.IndirectExtension.simple
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.simple"] = null;

            /**
             * HasExtensions .jspb.test.IndirectExtension.str.
             * @member {string} .jspb.test.IndirectExtension.str
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.str"] = "";

            /**
             * HasExtensions .jspb.test.IndirectExtension.repeatedStr.
             * @member {Array.<string>} .jspb.test.IndirectExtension.repeatedStr
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.repeatedStr"] = $util.emptyArray;

            /**
             * HasExtensions .jspb.test.IndirectExtension.repeatedSimple.
             * @member {Array.<jspb.test.ISimple1>} .jspb.test.IndirectExtension.repeatedSimple
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.IndirectExtension.repeatedSimple"] = $util.emptyArray;

            /**
             * HasExtensions .jspb.test.simple1.
             * @member {jspb.test.ISimple1|null|undefined} .jspb.test.simple1
             * @memberof jspb.test.HasExtensions
             * @instance
             */
            HasExtensions.prototype[".jspb.test.simple1"] = null;

            /**
             * Creates a new HasExtensions instance using the specified properties.
             * @function create
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {jspb.test.IHasExtensions=} [properties] Properties to set
             * @returns {jspb.test.HasExtensions} HasExtensions instance
             */
            HasExtensions.create = function create(properties) {
                return new HasExtensions(properties);
            };

            /**
             * Encodes the specified HasExtensions message. Does not implicitly {@link jspb.test.HasExtensions.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {jspb.test.IHasExtensions} message HasExtensions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HasExtensions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.HasExtensions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.HasExtensions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.str1 != null && Object.hasOwnProperty.call(message, "str1"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.str1);
                if (message.str2 != null && Object.hasOwnProperty.call(message, "str2"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.str2);
                if (message.str3 != null && Object.hasOwnProperty.call(message, "str3"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.str3);
                if (message[".jspb.test.IsExtension.extField"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IsExtension.extField"))
                    $root.jspb.test.IsExtension.encode(message[".jspb.test.IsExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                if (message[".jspb.test.IndirectExtension.simple"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IndirectExtension.simple"))
                    $root.jspb.test.Simple1.encode(message[".jspb.test.IndirectExtension.simple"], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                if (message[".jspb.test.IndirectExtension.str"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IndirectExtension.str"))
                    writer.uint32(/* id 102, wireType 2 =*/818).string(message[".jspb.test.IndirectExtension.str"]);
                if (message[".jspb.test.IndirectExtension.repeatedStr"] != null && message[".jspb.test.IndirectExtension.repeatedStr"].length)
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                        writer.uint32(/* id 103, wireType 2 =*/826).string(message[".jspb.test.IndirectExtension.repeatedStr"][i]);
                if (message[".jspb.test.IndirectExtension.repeatedSimple"] != null && message[".jspb.test.IndirectExtension.repeatedSimple"].length)
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i)
                        $root.jspb.test.Simple1.encode(message[".jspb.test.IndirectExtension.repeatedSimple"][i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
                if (message[".jspb.test.simple1"] != null && Object.hasOwnProperty.call(message, ".jspb.test.simple1"))
                    $root.jspb.test.Simple1.encode(message[".jspb.test.simple1"], writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified HasExtensions message, length delimited. Does not implicitly {@link jspb.test.HasExtensions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {jspb.test.IHasExtensions} message HasExtensions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HasExtensions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HasExtensions message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.HasExtensions} HasExtensions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HasExtensions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.HasExtensions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.str1 = reader.string();
                            break;
                        }
                    case 2: {
                            message.str2 = reader.string();
                            break;
                        }
                    case 3: {
                            message.str3 = reader.string();
                            break;
                        }
                    case 100: {
                            message[".jspb.test.IsExtension.extField"] = $root.jspb.test.IsExtension.decode(reader, reader.uint32());
                            break;
                        }
                    case 101: {
                            message[".jspb.test.IndirectExtension.simple"] = $root.jspb.test.Simple1.decode(reader, reader.uint32());
                            break;
                        }
                    case 102: {
                            message[".jspb.test.IndirectExtension.str"] = reader.string();
                            break;
                        }
                    case 103: {
                            if (!(message[".jspb.test.IndirectExtension.repeatedStr"] && message[".jspb.test.IndirectExtension.repeatedStr"].length))
                                message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                            message[".jspb.test.IndirectExtension.repeatedStr"].push(reader.string());
                            break;
                        }
                    case 104: {
                            if (!(message[".jspb.test.IndirectExtension.repeatedSimple"] && message[".jspb.test.IndirectExtension.repeatedSimple"].length))
                                message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                            message[".jspb.test.IndirectExtension.repeatedSimple"].push($root.jspb.test.Simple1.decode(reader, reader.uint32()));
                            break;
                        }
                    case 105: {
                            message[".jspb.test.simple1"] = $root.jspb.test.Simple1.decode(reader, reader.uint32());
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
             * Decodes a HasExtensions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.HasExtensions} HasExtensions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HasExtensions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HasExtensions message.
             * @function verify
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HasExtensions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.str1 != null && message.hasOwnProperty("str1"))
                    if (!$util.isString(message.str1))
                        return "str1: string expected";
                if (message.str2 != null && message.hasOwnProperty("str2"))
                    if (!$util.isString(message.str2))
                        return "str2: string expected";
                if (message.str3 != null && message.hasOwnProperty("str3"))
                    if (!$util.isString(message.str3))
                        return "str3: string expected";
                if (message[".jspb.test.IsExtension.extField"] != null && message.hasOwnProperty(".jspb.test.IsExtension.extField")) {
                    var error = $root.jspb.test.IsExtension.verify(message[".jspb.test.IsExtension.extField"]);
                    if (error)
                        return ".jspb.test.IsExtension.extField." + error;
                }
                if (message[".jspb.test.IndirectExtension.simple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.simple")) {
                    var error = $root.jspb.test.Simple1.verify(message[".jspb.test.IndirectExtension.simple"]);
                    if (error)
                        return ".jspb.test.IndirectExtension.simple." + error;
                }
                if (message[".jspb.test.IndirectExtension.str"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.str"))
                    if (!$util.isString(message[".jspb.test.IndirectExtension.str"]))
                        return ".jspb.test.IndirectExtension.str: string expected";
                if (message[".jspb.test.IndirectExtension.repeatedStr"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.repeatedStr")) {
                    if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedStr"]))
                        return ".jspb.test.IndirectExtension.repeatedStr: array expected";
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                        if (!$util.isString(message[".jspb.test.IndirectExtension.repeatedStr"][i]))
                            return ".jspb.test.IndirectExtension.repeatedStr: string[] expected";
                }
                if (message[".jspb.test.IndirectExtension.repeatedSimple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.repeatedSimple")) {
                    if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedSimple"]))
                        return ".jspb.test.IndirectExtension.repeatedSimple: array expected";
                    for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                        var error = $root.jspb.test.Simple1.verify(message[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                        if (error)
                            return ".jspb.test.IndirectExtension.repeatedSimple." + error;
                    }
                }
                if (message[".jspb.test.simple1"] != null && message.hasOwnProperty(".jspb.test.simple1")) {
                    var error = $root.jspb.test.Simple1.verify(message[".jspb.test.simple1"]);
                    if (error)
                        return ".jspb.test.simple1." + error;
                }
                return null;
            };

            /**
             * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.HasExtensions} HasExtensions
             */
            HasExtensions.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.HasExtensions)
                    return object;
                var message = new $root.jspb.test.HasExtensions();
                if (object.str1 != null)
                    message.str1 = String(object.str1);
                if (object.str2 != null)
                    message.str2 = String(object.str2);
                if (object.str3 != null)
                    message.str3 = String(object.str3);
                if (object[".jspb.test.IsExtension.extField"] != null) {
                    if (typeof object[".jspb.test.IsExtension.extField"] !== "object")
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.IsExtension.extField: object expected");
                    message[".jspb.test.IsExtension.extField"] = $root.jspb.test.IsExtension.fromObject(object[".jspb.test.IsExtension.extField"]);
                }
                if (object[".jspb.test.IndirectExtension.simple"] != null) {
                    if (typeof object[".jspb.test.IndirectExtension.simple"] !== "object")
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.simple: object expected");
                    message[".jspb.test.IndirectExtension.simple"] = $root.jspb.test.Simple1.fromObject(object[".jspb.test.IndirectExtension.simple"]);
                }
                if (object[".jspb.test.IndirectExtension.str"] != null)
                    message[".jspb.test.IndirectExtension.str"] = String(object[".jspb.test.IndirectExtension.str"]);
                if (object[".jspb.test.IndirectExtension.repeatedStr"]) {
                    if (!Array.isArray(object[".jspb.test.IndirectExtension.repeatedStr"]))
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedStr: array expected");
                    message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                        message[".jspb.test.IndirectExtension.repeatedStr"][i] = String(object[".jspb.test.IndirectExtension.repeatedStr"][i]);
                }
                if (object[".jspb.test.IndirectExtension.repeatedSimple"]) {
                    if (!Array.isArray(object[".jspb.test.IndirectExtension.repeatedSimple"]))
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedSimple: array expected");
                    message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                    for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                        if (typeof object[".jspb.test.IndirectExtension.repeatedSimple"][i] !== "object")
                            throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedSimple: object expected");
                        message[".jspb.test.IndirectExtension.repeatedSimple"][i] = $root.jspb.test.Simple1.fromObject(object[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                    }
                }
                if (object[".jspb.test.simple1"] != null) {
                    if (typeof object[".jspb.test.simple1"] !== "object")
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.simple1: object expected");
                    message[".jspb.test.simple1"] = $root.jspb.test.Simple1.fromObject(object[".jspb.test.simple1"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a HasExtensions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {jspb.test.HasExtensions} message HasExtensions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HasExtensions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                }
                if (options.defaults) {
                    object.str1 = "";
                    object.str2 = "";
                    object.str3 = "";
                    object[".jspb.test.IsExtension.extField"] = null;
                    object[".jspb.test.IndirectExtension.simple"] = null;
                    object[".jspb.test.IndirectExtension.str"] = "";
                    object[".jspb.test.simple1"] = null;
                }
                if (message.str1 != null && message.hasOwnProperty("str1"))
                    object.str1 = message.str1;
                if (message.str2 != null && message.hasOwnProperty("str2"))
                    object.str2 = message.str2;
                if (message.str3 != null && message.hasOwnProperty("str3"))
                    object.str3 = message.str3;
                if (message[".jspb.test.IsExtension.extField"] != null && message.hasOwnProperty(".jspb.test.IsExtension.extField"))
                    object[".jspb.test.IsExtension.extField"] = $root.jspb.test.IsExtension.toObject(message[".jspb.test.IsExtension.extField"], options);
                if (message[".jspb.test.IndirectExtension.simple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.simple"))
                    object[".jspb.test.IndirectExtension.simple"] = $root.jspb.test.Simple1.toObject(message[".jspb.test.IndirectExtension.simple"], options);
                if (message[".jspb.test.IndirectExtension.str"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.str"))
                    object[".jspb.test.IndirectExtension.str"] = message[".jspb.test.IndirectExtension.str"];
                if (message[".jspb.test.IndirectExtension.repeatedStr"] && message[".jspb.test.IndirectExtension.repeatedStr"].length) {
                    object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++j)
                        object[".jspb.test.IndirectExtension.repeatedStr"][j] = message[".jspb.test.IndirectExtension.repeatedStr"][j];
                }
                if (message[".jspb.test.IndirectExtension.repeatedSimple"] && message[".jspb.test.IndirectExtension.repeatedSimple"].length) {
                    object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                    for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++j)
                        object[".jspb.test.IndirectExtension.repeatedSimple"][j] = $root.jspb.test.Simple1.toObject(message[".jspb.test.IndirectExtension.repeatedSimple"][j], options);
                }
                if (message[".jspb.test.simple1"] != null && message.hasOwnProperty(".jspb.test.simple1"))
                    object[".jspb.test.simple1"] = $root.jspb.test.Simple1.toObject(message[".jspb.test.simple1"], options);
                return object;
            };

            /**
             * Converts this HasExtensions to JSON.
             * @function toJSON
             * @memberof jspb.test.HasExtensions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HasExtensions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for HasExtensions
             * @function getTypeUrl
             * @memberof jspb.test.HasExtensions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            HasExtensions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.HasExtensions";
            };

            return HasExtensions;
        })();

        test.Complex = (function() {

            /**
             * Properties of a Complex.
             * @memberof jspb.test
             * @interface IComplex
             * @property {string} aString Complex aString
             * @property {boolean} anOutOfOrderBool Complex anOutOfOrderBool
             * @property {jspb.test.Complex.INested|null} [aNestedMessage] Complex aNestedMessage
             * @property {Array.<jspb.test.Complex.INested>|null} [aRepeatedMessage] Complex aRepeatedMessage
             * @property {Array.<string>|null} [aRepeatedString] Complex aRepeatedString
             */

            /**
             * Constructs a new Complex.
             * @memberof jspb.test
             * @classdesc Represents a Complex.
             * @implements IComplex
             * @constructor
             * @param {jspb.test.IComplex=} [properties] Properties to set
             */
            function Complex(properties) {
                this.aRepeatedMessage = [];
                this.aRepeatedString = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Complex aString.
             * @member {string} aString
             * @memberof jspb.test.Complex
             * @instance
             */
            Complex.prototype.aString = "";

            /**
             * Complex anOutOfOrderBool.
             * @member {boolean} anOutOfOrderBool
             * @memberof jspb.test.Complex
             * @instance
             */
            Complex.prototype.anOutOfOrderBool = false;

            /**
             * Complex aNestedMessage.
             * @member {jspb.test.Complex.INested|null|undefined} aNestedMessage
             * @memberof jspb.test.Complex
             * @instance
             */
            Complex.prototype.aNestedMessage = null;

            /**
             * Complex aRepeatedMessage.
             * @member {Array.<jspb.test.Complex.INested>} aRepeatedMessage
             * @memberof jspb.test.Complex
             * @instance
             */
            Complex.prototype.aRepeatedMessage = $util.emptyArray;

            /**
             * Complex aRepeatedString.
             * @member {Array.<string>} aRepeatedString
             * @memberof jspb.test.Complex
             * @instance
             */
            Complex.prototype.aRepeatedString = $util.emptyArray;

            /**
             * Creates a new Complex instance using the specified properties.
             * @function create
             * @memberof jspb.test.Complex
             * @static
             * @param {jspb.test.IComplex=} [properties] Properties to set
             * @returns {jspb.test.Complex} Complex instance
             */
            Complex.create = function create(properties) {
                return new Complex(properties);
            };

            /**
             * Encodes the specified Complex message. Does not implicitly {@link jspb.test.Complex.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.Complex
             * @static
             * @param {jspb.test.IComplex} message Complex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Complex.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.Complex.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.Complex.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
                if (message.aNestedMessage != null && Object.hasOwnProperty.call(message, "aNestedMessage"))
                    $root.jspb.test.Complex.Nested.encode(message.aNestedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                        $root.jspb.test.Complex.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.aRepeatedString != null && message.aRepeatedString.length)
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.aRepeatedString[i]);
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.anOutOfOrderBool);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified Complex message, length delimited. Does not implicitly {@link jspb.test.Complex.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.Complex
             * @static
             * @param {jspb.test.IComplex} message Complex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Complex.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Complex message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.Complex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Complex} Complex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Complex.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Complex();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.aString = reader.string();
                            break;
                        }
                    case 9: {
                            message.anOutOfOrderBool = reader.bool();
                            break;
                        }
                    case 4: {
                            message.aNestedMessage = $root.jspb.test.Complex.Nested.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                                message.aRepeatedMessage = [];
                            message.aRepeatedMessage.push($root.jspb.test.Complex.Nested.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.aRepeatedString && message.aRepeatedString.length))
                                message.aRepeatedString = [];
                            message.aRepeatedString.push(reader.string());
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
                if (!message.hasOwnProperty("aString"))
                    throw $util.ProtocolError("missing required 'aString'", { instance: message });
                if (!message.hasOwnProperty("anOutOfOrderBool"))
                    throw $util.ProtocolError("missing required 'anOutOfOrderBool'", { instance: message });
                return message;
            };

            /**
             * Decodes a Complex message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.Complex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.Complex} Complex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Complex.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Complex message.
             * @function verify
             * @memberof jspb.test.Complex
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Complex.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.aString))
                    return "aString: string expected";
                if (typeof message.anOutOfOrderBool !== "boolean")
                    return "anOutOfOrderBool: boolean expected";
                if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage")) {
                    var error = $root.jspb.test.Complex.Nested.verify(message.aNestedMessage);
                    if (error)
                        return "aNestedMessage." + error;
                }
                if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
                    if (!Array.isArray(message.aRepeatedMessage))
                        return "aRepeatedMessage: array expected";
                    for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                        var error = $root.jspb.test.Complex.Nested.verify(message.aRepeatedMessage[i]);
                        if (error)
                            return "aRepeatedMessage." + error;
                    }
                }
                if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
                    if (!Array.isArray(message.aRepeatedString))
                        return "aRepeatedString: array expected";
                    for (var i = 0; i < message.aRepeatedString.length; ++i)
                        if (!$util.isString(message.aRepeatedString[i]))
                            return "aRepeatedString: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Complex message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.Complex
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Complex} Complex
             */
            Complex.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.Complex)
                    return object;
                var message = new $root.jspb.test.Complex();
                if (object.aString != null)
                    message.aString = String(object.aString);
                if (object.anOutOfOrderBool != null)
                    message.anOutOfOrderBool = Boolean(object.anOutOfOrderBool);
                if (object.aNestedMessage != null) {
                    if (typeof object.aNestedMessage !== "object")
                        throw TypeError(".jspb.test.Complex.aNestedMessage: object expected");
                    message.aNestedMessage = $root.jspb.test.Complex.Nested.fromObject(object.aNestedMessage);
                }
                if (object.aRepeatedMessage) {
                    if (!Array.isArray(object.aRepeatedMessage))
                        throw TypeError(".jspb.test.Complex.aRepeatedMessage: array expected");
                    message.aRepeatedMessage = [];
                    for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                        if (typeof object.aRepeatedMessage[i] !== "object")
                            throw TypeError(".jspb.test.Complex.aRepeatedMessage: object expected");
                        message.aRepeatedMessage[i] = $root.jspb.test.Complex.Nested.fromObject(object.aRepeatedMessage[i]);
                    }
                }
                if (object.aRepeatedString) {
                    if (!Array.isArray(object.aRepeatedString))
                        throw TypeError(".jspb.test.Complex.aRepeatedString: array expected");
                    message.aRepeatedString = [];
                    for (var i = 0; i < object.aRepeatedString.length; ++i)
                        message.aRepeatedString[i] = String(object.aRepeatedString[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Complex message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.Complex
             * @static
             * @param {jspb.test.Complex} message Complex
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Complex.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.aRepeatedMessage = [];
                    object.aRepeatedString = [];
                }
                if (options.defaults) {
                    object.aString = "";
                    object.aNestedMessage = null;
                    object.anOutOfOrderBool = false;
                }
                if (message.aString != null && message.hasOwnProperty("aString"))
                    object.aString = message.aString;
                if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage"))
                    object.aNestedMessage = $root.jspb.test.Complex.Nested.toObject(message.aNestedMessage, options);
                if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
                    object.aRepeatedMessage = [];
                    for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                        object.aRepeatedMessage[j] = $root.jspb.test.Complex.Nested.toObject(message.aRepeatedMessage[j], options);
                }
                if (message.aRepeatedString && message.aRepeatedString.length) {
                    object.aRepeatedString = [];
                    for (var j = 0; j < message.aRepeatedString.length; ++j)
                        object.aRepeatedString[j] = message.aRepeatedString[j];
                }
                if (message.anOutOfOrderBool != null && message.hasOwnProperty("anOutOfOrderBool"))
                    object.anOutOfOrderBool = message.anOutOfOrderBool;
                return object;
            };

            /**
             * Converts this Complex to JSON.
             * @function toJSON
             * @memberof jspb.test.Complex
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Complex.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Complex
             * @function getTypeUrl
             * @memberof jspb.test.Complex
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Complex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.Complex";
            };

            Complex.Nested = (function() {

                /**
                 * Properties of a Nested.
                 * @memberof jspb.test.Complex
                 * @interface INested
                 * @property {number} anInt Nested anInt
                 */

                /**
                 * Constructs a new Nested.
                 * @memberof jspb.test.Complex
                 * @classdesc Represents a Nested.
                 * @implements INested
                 * @constructor
                 * @param {jspb.test.Complex.INested=} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Nested anInt.
                 * @member {number} anInt
                 * @memberof jspb.test.Complex.Nested
                 * @instance
                 */
                Nested.prototype.anInt = 0;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {jspb.test.Complex.INested=} [properties] Properties to set
                 * @returns {jspb.test.Complex.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.Complex.Nested.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {jspb.test.Complex.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.Complex.Nested.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.Complex.Nested.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.anInt);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.Complex.Nested.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {jspb.test.Complex.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.Complex.Nested} Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Nested.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Complex.Nested();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.anInt = reader.int32();
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
                    if (!message.hasOwnProperty("anInt"))
                        throw $util.ProtocolError("missing required 'anInt'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.Complex.Nested} Nested
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
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.anInt))
                        return "anInt: integer expected";
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Complex.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.Complex.Nested)
                        return object;
                    var message = new $root.jspb.test.Complex.Nested();
                    if (object.anInt != null)
                        message.anInt = object.anInt | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {jspb.test.Complex.Nested} message Nested
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.anInt = 0;
                    if (message.anInt != null && message.hasOwnProperty("anInt"))
                        object.anInt = message.anInt;
                    return object;
                };

                /**
                 * Converts this Nested to JSON.
                 * @function toJSON
                 * @memberof jspb.test.Complex.Nested
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Nested
                 * @function getTypeUrl
                 * @memberof jspb.test.Complex.Nested
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Nested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.Complex.Nested";
                };

                return Nested;
            })();

            return Complex;
        })();

        test.OuterMessage = (function() {

            /**
             * Properties of an OuterMessage.
             * @memberof jspb.test
             * @interface IOuterMessage
             */

            /**
             * Constructs a new OuterMessage.
             * @memberof jspb.test
             * @classdesc Represents an OuterMessage.
             * @implements IOuterMessage
             * @constructor
             * @param {jspb.test.IOuterMessage=} [properties] Properties to set
             */
            function OuterMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new OuterMessage instance using the specified properties.
             * @function create
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {jspb.test.IOuterMessage=} [properties] Properties to set
             * @returns {jspb.test.OuterMessage} OuterMessage instance
             */
            OuterMessage.create = function create(properties) {
                return new OuterMessage(properties);
            };

            /**
             * Encodes the specified OuterMessage message. Does not implicitly {@link jspb.test.OuterMessage.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {jspb.test.IOuterMessage} message OuterMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OuterMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.OuterMessage.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.OuterMessage.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified OuterMessage message, length delimited. Does not implicitly {@link jspb.test.OuterMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {jspb.test.IOuterMessage} message OuterMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OuterMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OuterMessage message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.OuterMessage} OuterMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OuterMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.OuterMessage();
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
             * Decodes an OuterMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.OuterMessage} OuterMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OuterMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OuterMessage message.
             * @function verify
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OuterMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an OuterMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.OuterMessage} OuterMessage
             */
            OuterMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.OuterMessage)
                    return object;
                return new $root.jspb.test.OuterMessage();
            };

            /**
             * Creates a plain object from an OuterMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {jspb.test.OuterMessage} message OuterMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OuterMessage.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this OuterMessage to JSON.
             * @function toJSON
             * @memberof jspb.test.OuterMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OuterMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OuterMessage
             * @function getTypeUrl
             * @memberof jspb.test.OuterMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OuterMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.OuterMessage";
            };

            OuterMessage.Complex = (function() {

                /**
                 * Properties of a Complex.
                 * @memberof jspb.test.OuterMessage
                 * @interface IComplex
                 * @property {number|null} [innerComplexField] Complex innerComplexField
                 */

                /**
                 * Constructs a new Complex.
                 * @memberof jspb.test.OuterMessage
                 * @classdesc Represents a Complex.
                 * @implements IComplex
                 * @constructor
                 * @param {jspb.test.OuterMessage.IComplex=} [properties] Properties to set
                 */
                function Complex(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Complex innerComplexField.
                 * @member {number} innerComplexField
                 * @memberof jspb.test.OuterMessage.Complex
                 * @instance
                 */
                Complex.prototype.innerComplexField = 0;

                /**
                 * Creates a new Complex instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {jspb.test.OuterMessage.IComplex=} [properties] Properties to set
                 * @returns {jspb.test.OuterMessage.Complex} Complex instance
                 */
                Complex.create = function create(properties) {
                    return new Complex(properties);
                };

                /**
                 * Encodes the specified Complex message. Does not implicitly {@link jspb.test.OuterMessage.Complex.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {jspb.test.OuterMessage.IComplex} message Complex message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Complex.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.OuterMessage.Complex.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.OuterMessage.Complex.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.innerComplexField != null && Object.hasOwnProperty.call(message, "innerComplexField"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.innerComplexField);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Complex message, length delimited. Does not implicitly {@link jspb.test.OuterMessage.Complex.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {jspb.test.OuterMessage.IComplex} message Complex message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Complex.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Complex message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Complex.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.OuterMessage.Complex();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.innerComplexField = reader.int32();
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
                 * Decodes a Complex message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Complex.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Complex message.
                 * @function verify
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Complex.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.innerComplexField != null && message.hasOwnProperty("innerComplexField"))
                        if (!$util.isInteger(message.innerComplexField))
                            return "innerComplexField: integer expected";
                    return null;
                };

                /**
                 * Creates a Complex message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.OuterMessage.Complex} Complex
                 */
                Complex.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.OuterMessage.Complex)
                        return object;
                    var message = new $root.jspb.test.OuterMessage.Complex();
                    if (object.innerComplexField != null)
                        message.innerComplexField = object.innerComplexField | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Complex message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {jspb.test.OuterMessage.Complex} message Complex
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Complex.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.innerComplexField = 0;
                    if (message.innerComplexField != null && message.hasOwnProperty("innerComplexField"))
                        object.innerComplexField = message.innerComplexField;
                    return object;
                };

                /**
                 * Converts this Complex to JSON.
                 * @function toJSON
                 * @memberof jspb.test.OuterMessage.Complex
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Complex.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Complex
                 * @function getTypeUrl
                 * @memberof jspb.test.OuterMessage.Complex
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Complex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.OuterMessage.Complex";
                };

                return Complex;
            })();

            return OuterMessage;
        })();

        test.IsExtension = (function() {

            /**
             * Properties of an IsExtension.
             * @memberof jspb.test
             * @interface IIsExtension
             * @property {string|null} [ext1] IsExtension ext1
             */

            /**
             * Constructs a new IsExtension.
             * @memberof jspb.test
             * @classdesc Represents an IsExtension.
             * @implements IIsExtension
             * @constructor
             * @param {jspb.test.IIsExtension=} [properties] Properties to set
             */
            function IsExtension(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IsExtension ext1.
             * @member {string} ext1
             * @memberof jspb.test.IsExtension
             * @instance
             */
            IsExtension.prototype.ext1 = "";

            /**
             * Creates a new IsExtension instance using the specified properties.
             * @function create
             * @memberof jspb.test.IsExtension
             * @static
             * @param {jspb.test.IIsExtension=} [properties] Properties to set
             * @returns {jspb.test.IsExtension} IsExtension instance
             */
            IsExtension.create = function create(properties) {
                return new IsExtension(properties);
            };

            /**
             * Encodes the specified IsExtension message. Does not implicitly {@link jspb.test.IsExtension.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.IsExtension
             * @static
             * @param {jspb.test.IIsExtension} message IsExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IsExtension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.IsExtension.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.IsExtension.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.ext1 != null && Object.hasOwnProperty.call(message, "ext1"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ext1);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified IsExtension message, length delimited. Does not implicitly {@link jspb.test.IsExtension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.IsExtension
             * @static
             * @param {jspb.test.IIsExtension} message IsExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IsExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IsExtension message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.IsExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.IsExtension} IsExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IsExtension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.IsExtension();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ext1 = reader.string();
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
             * Decodes an IsExtension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.IsExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.IsExtension} IsExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IsExtension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IsExtension message.
             * @function verify
             * @memberof jspb.test.IsExtension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IsExtension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ext1 != null && message.hasOwnProperty("ext1"))
                    if (!$util.isString(message.ext1))
                        return "ext1: string expected";
                return null;
            };

            /**
             * Creates an IsExtension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.IsExtension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IsExtension} IsExtension
             */
            IsExtension.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.IsExtension)
                    return object;
                var message = new $root.jspb.test.IsExtension();
                if (object.ext1 != null)
                    message.ext1 = String(object.ext1);
                return message;
            };

            /**
             * Creates a plain object from an IsExtension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.IsExtension
             * @static
             * @param {jspb.test.IsExtension} message IsExtension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IsExtension.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ext1 = "";
                if (message.ext1 != null && message.hasOwnProperty("ext1"))
                    object.ext1 = message.ext1;
                return object;
            };

            /**
             * Converts this IsExtension to JSON.
             * @function toJSON
             * @memberof jspb.test.IsExtension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IsExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IsExtension
             * @function getTypeUrl
             * @memberof jspb.test.IsExtension
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IsExtension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.IsExtension";
            };

            return IsExtension;
        })();

        test.IndirectExtension = (function() {

            /**
             * Properties of an IndirectExtension.
             * @memberof jspb.test
             * @interface IIndirectExtension
             */

            /**
             * Constructs a new IndirectExtension.
             * @memberof jspb.test
             * @classdesc Represents an IndirectExtension.
             * @implements IIndirectExtension
             * @constructor
             * @param {jspb.test.IIndirectExtension=} [properties] Properties to set
             */
            function IndirectExtension(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new IndirectExtension instance using the specified properties.
             * @function create
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {jspb.test.IIndirectExtension=} [properties] Properties to set
             * @returns {jspb.test.IndirectExtension} IndirectExtension instance
             */
            IndirectExtension.create = function create(properties) {
                return new IndirectExtension(properties);
            };

            /**
             * Encodes the specified IndirectExtension message. Does not implicitly {@link jspb.test.IndirectExtension.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {jspb.test.IIndirectExtension} message IndirectExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndirectExtension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.IndirectExtension.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.IndirectExtension.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified IndirectExtension message, length delimited. Does not implicitly {@link jspb.test.IndirectExtension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {jspb.test.IIndirectExtension} message IndirectExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndirectExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IndirectExtension message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndirectExtension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.IndirectExtension();
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
             * Decodes an IndirectExtension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndirectExtension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IndirectExtension message.
             * @function verify
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IndirectExtension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an IndirectExtension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.IndirectExtension} IndirectExtension
             */
            IndirectExtension.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.IndirectExtension)
                    return object;
                return new $root.jspb.test.IndirectExtension();
            };

            /**
             * Creates a plain object from an IndirectExtension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {jspb.test.IndirectExtension} message IndirectExtension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IndirectExtension.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this IndirectExtension to JSON.
             * @function toJSON
             * @memberof jspb.test.IndirectExtension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IndirectExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IndirectExtension
             * @function getTypeUrl
             * @memberof jspb.test.IndirectExtension
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IndirectExtension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.IndirectExtension";
            };

            return IndirectExtension;
        })();

        test.DefaultValues = (function() {

            /**
             * Properties of a DefaultValues.
             * @memberof jspb.test
             * @interface IDefaultValues
             * @property {string|null} [stringField] DefaultValues stringField
             * @property {boolean|null} [boolField] DefaultValues boolField
             * @property {number|Long|null} [intField] DefaultValues intField
             * @property {jspb.test.DefaultValues.Enum|null} [enumField] DefaultValues enumField
             * @property {string|null} [emptyField] DefaultValues emptyField
             * @property {Uint8Array|null} [bytesField] DefaultValues bytesField
             */

            /**
             * Constructs a new DefaultValues.
             * @memberof jspb.test
             * @classdesc Represents a DefaultValues.
             * @implements IDefaultValues
             * @constructor
             * @param {jspb.test.IDefaultValues=} [properties] Properties to set
             */
            function DefaultValues(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DefaultValues stringField.
             * @member {string} stringField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.stringField = "default<>abc";

            /**
             * DefaultValues boolField.
             * @member {boolean} boolField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.boolField = true;

            /**
             * DefaultValues intField.
             * @member {number|Long} intField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.intField = $util.Long ? $util.Long.fromBits(11,0,false) : 11;

            /**
             * DefaultValues enumField.
             * @member {jspb.test.DefaultValues.Enum} enumField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.enumField = 13;

            /**
             * DefaultValues emptyField.
             * @member {string} emptyField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.emptyField = "";

            /**
             * DefaultValues bytesField.
             * @member {Uint8Array} bytesField
             * @memberof jspb.test.DefaultValues
             * @instance
             */
            DefaultValues.prototype.bytesField = $util.newBuffer([109,111,111]);

            /**
             * Creates a new DefaultValues instance using the specified properties.
             * @function create
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {jspb.test.IDefaultValues=} [properties] Properties to set
             * @returns {jspb.test.DefaultValues} DefaultValues instance
             */
            DefaultValues.create = function create(properties) {
                return new DefaultValues(properties);
            };

            /**
             * Encodes the specified DefaultValues message. Does not implicitly {@link jspb.test.DefaultValues.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {jspb.test.IDefaultValues} message DefaultValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultValues.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.DefaultValues.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.DefaultValues.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.stringField != null && Object.hasOwnProperty.call(message, "stringField"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringField);
                if (message.boolField != null && Object.hasOwnProperty.call(message, "boolField"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolField);
                if (message.intField != null && Object.hasOwnProperty.call(message, "intField"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intField);
                if (message.enumField != null && Object.hasOwnProperty.call(message, "enumField"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.enumField);
                if (message.emptyField != null && Object.hasOwnProperty.call(message, "emptyField"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.emptyField);
                if (message.bytesField != null && Object.hasOwnProperty.call(message, "bytesField"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.bytesField);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified DefaultValues message, length delimited. Does not implicitly {@link jspb.test.DefaultValues.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {jspb.test.IDefaultValues} message DefaultValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DefaultValues.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DefaultValues message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.DefaultValues} DefaultValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefaultValues.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.DefaultValues();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.stringField = reader.string();
                            break;
                        }
                    case 2: {
                            message.boolField = reader.bool();
                            break;
                        }
                    case 3: {
                            message.intField = reader.int64();
                            break;
                        }
                    case 4: {
                            message.enumField = reader.int32();
                            break;
                        }
                    case 6: {
                            message.emptyField = reader.string();
                            break;
                        }
                    case 8: {
                            message.bytesField = reader.bytes();
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
             * Decodes a DefaultValues message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.DefaultValues} DefaultValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DefaultValues.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DefaultValues message.
             * @function verify
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DefaultValues.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stringField != null && message.hasOwnProperty("stringField"))
                    if (!$util.isString(message.stringField))
                        return "stringField: string expected";
                if (message.boolField != null && message.hasOwnProperty("boolField"))
                    if (typeof message.boolField !== "boolean")
                        return "boolField: boolean expected";
                if (message.intField != null && message.hasOwnProperty("intField"))
                    if (!$util.isInteger(message.intField) && !(message.intField && $util.isInteger(message.intField.low) && $util.isInteger(message.intField.high)))
                        return "intField: integer|Long expected";
                if (message.enumField != null && message.hasOwnProperty("enumField"))
                    switch (message.enumField) {
                    default:
                        return "enumField: enum value expected";
                    case 13:
                    case 77:
                        break;
                    }
                if (message.emptyField != null && message.hasOwnProperty("emptyField"))
                    if (!$util.isString(message.emptyField))
                        return "emptyField: string expected";
                if (message.bytesField != null && message.hasOwnProperty("bytesField"))
                    if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField)))
                        return "bytesField: buffer expected";
                return null;
            };

            /**
             * Creates a DefaultValues message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.DefaultValues} DefaultValues
             */
            DefaultValues.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.DefaultValues)
                    return object;
                var message = new $root.jspb.test.DefaultValues();
                if (object.stringField != null)
                    message.stringField = String(object.stringField);
                if (object.boolField != null)
                    message.boolField = Boolean(object.boolField);
                if (object.intField != null)
                    if ($util.Long)
                        (message.intField = $util.Long.fromValue(object.intField)).unsigned = false;
                    else if (typeof object.intField === "string")
                        message.intField = parseInt(object.intField, 10);
                    else if (typeof object.intField === "number")
                        message.intField = object.intField;
                    else if (typeof object.intField === "object")
                        message.intField = new $util.LongBits(object.intField.low >>> 0, object.intField.high >>> 0).toNumber();
                switch (object.enumField) {
                default:
                    if (typeof object.enumField === "number") {
                        message.enumField = object.enumField;
                        break;
                    }
                    break;
                case "E1":
                case 13:
                    message.enumField = 13;
                    break;
                case "E2":
                case 77:
                    message.enumField = 77;
                    break;
                }
                if (object.emptyField != null)
                    message.emptyField = String(object.emptyField);
                if (object.bytesField != null)
                    if (typeof object.bytesField === "string")
                        $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
                    else if (object.bytesField.length >= 0)
                        message.bytesField = object.bytesField;
                return message;
            };

            /**
             * Creates a plain object from a DefaultValues message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {jspb.test.DefaultValues} message DefaultValues
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DefaultValues.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stringField = "default<>abc";
                    object.boolField = true;
                    if ($util.Long) {
                        var long = new $util.Long(11, 0, false);
                        object.intField = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.intField = options.longs === String ? "11" : 11;
                    object.enumField = options.enums === String ? "E1" : 13;
                    object.emptyField = "";
                    if (options.bytes === String)
                        object.bytesField = "moo";
                    else {
                        object.bytesField = [
                            109,
                            111,
                            111
                        ];
                        if (options.bytes !== Array)
                            object.bytesField = $util.newBuffer(object.bytesField);
                    }
                }
                if (message.stringField != null && message.hasOwnProperty("stringField"))
                    object.stringField = message.stringField;
                if (message.boolField != null && message.hasOwnProperty("boolField"))
                    object.boolField = message.boolField;
                if (message.intField != null && message.hasOwnProperty("intField"))
                    if (typeof message.intField === "number")
                        object.intField = options.longs === String ? String(message.intField) : message.intField;
                    else
                        object.intField = options.longs === String ? $util.Long.prototype.toString.call(message.intField) : options.longs === Number ? new $util.LongBits(message.intField.low >>> 0, message.intField.high >>> 0).toNumber() : message.intField;
                if (message.enumField != null && message.hasOwnProperty("enumField"))
                    object.enumField = options.enums === String ? $root.jspb.test.DefaultValues.Enum[message.enumField] === undefined ? message.enumField : $root.jspb.test.DefaultValues.Enum[message.enumField] : message.enumField;
                if (message.emptyField != null && message.hasOwnProperty("emptyField"))
                    object.emptyField = message.emptyField;
                if (message.bytesField != null && message.hasOwnProperty("bytesField"))
                    object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
                return object;
            };

            /**
             * Converts this DefaultValues to JSON.
             * @function toJSON
             * @memberof jspb.test.DefaultValues
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DefaultValues.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DefaultValues
             * @function getTypeUrl
             * @memberof jspb.test.DefaultValues
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DefaultValues.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.DefaultValues";
            };

            /**
             * Enum enum.
             * @name jspb.test.DefaultValues.Enum
             * @enum {number}
             * @property {number} E1=13 E1 value
             * @property {number} E2=77 E2 value
             */
            DefaultValues.Enum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[13] = "E1"] = 13;
                values[valuesById[77] = "E2"] = 77;
                return values;
            })();

            return DefaultValues;
        })();

        test.FloatingPointFields = (function() {

            /**
             * Properties of a FloatingPointFields.
             * @memberof jspb.test
             * @interface IFloatingPointFields
             * @property {number|null} [optionalFloatField] FloatingPointFields optionalFloatField
             * @property {number} requiredFloatField FloatingPointFields requiredFloatField
             * @property {Array.<number>|null} [repeatedFloatField] FloatingPointFields repeatedFloatField
             * @property {number|null} [defaultFloatField] FloatingPointFields defaultFloatField
             * @property {number|null} [optionalDoubleField] FloatingPointFields optionalDoubleField
             * @property {number} requiredDoubleField FloatingPointFields requiredDoubleField
             * @property {Array.<number>|null} [repeatedDoubleField] FloatingPointFields repeatedDoubleField
             * @property {number|null} [defaultDoubleField] FloatingPointFields defaultDoubleField
             */

            /**
             * Constructs a new FloatingPointFields.
             * @memberof jspb.test
             * @classdesc Represents a FloatingPointFields.
             * @implements IFloatingPointFields
             * @constructor
             * @param {jspb.test.IFloatingPointFields=} [properties] Properties to set
             */
            function FloatingPointFields(properties) {
                this.repeatedFloatField = [];
                this.repeatedDoubleField = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatingPointFields optionalFloatField.
             * @member {number} optionalFloatField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.optionalFloatField = 0;

            /**
             * FloatingPointFields requiredFloatField.
             * @member {number} requiredFloatField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.requiredFloatField = 0;

            /**
             * FloatingPointFields repeatedFloatField.
             * @member {Array.<number>} repeatedFloatField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.repeatedFloatField = $util.emptyArray;

            /**
             * FloatingPointFields defaultFloatField.
             * @member {number} defaultFloatField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.defaultFloatField = 2;

            /**
             * FloatingPointFields optionalDoubleField.
             * @member {number} optionalDoubleField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.optionalDoubleField = 0;

            /**
             * FloatingPointFields requiredDoubleField.
             * @member {number} requiredDoubleField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.requiredDoubleField = 0;

            /**
             * FloatingPointFields repeatedDoubleField.
             * @member {Array.<number>} repeatedDoubleField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.repeatedDoubleField = $util.emptyArray;

            /**
             * FloatingPointFields defaultDoubleField.
             * @member {number} defaultDoubleField
             * @memberof jspb.test.FloatingPointFields
             * @instance
             */
            FloatingPointFields.prototype.defaultDoubleField = 2;

            /**
             * Creates a new FloatingPointFields instance using the specified properties.
             * @function create
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {jspb.test.IFloatingPointFields=} [properties] Properties to set
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields instance
             */
            FloatingPointFields.create = function create(properties) {
                return new FloatingPointFields(properties);
            };

            /**
             * Encodes the specified FloatingPointFields message. Does not implicitly {@link jspb.test.FloatingPointFields.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {jspb.test.IFloatingPointFields} message FloatingPointFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatingPointFields.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.FloatingPointFields.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.FloatingPointFields.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.optionalFloatField != null && Object.hasOwnProperty.call(message, "optionalFloatField"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.optionalFloatField);
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.requiredFloatField);
                if (message.repeatedFloatField != null && message.repeatedFloatField.length)
                    for (var i = 0; i < message.repeatedFloatField.length; ++i)
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.repeatedFloatField[i]);
                if (message.defaultFloatField != null && Object.hasOwnProperty.call(message, "defaultFloatField"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.defaultFloatField);
                if (message.optionalDoubleField != null && Object.hasOwnProperty.call(message, "optionalDoubleField"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.optionalDoubleField);
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.requiredDoubleField);
                if (message.repeatedDoubleField != null && message.repeatedDoubleField.length)
                    for (var i = 0; i < message.repeatedDoubleField.length; ++i)
                        writer.uint32(/* id 7, wireType 1 =*/57).double(message.repeatedDoubleField[i]);
                if (message.defaultDoubleField != null && Object.hasOwnProperty.call(message, "defaultDoubleField"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.defaultDoubleField);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FloatingPointFields message, length delimited. Does not implicitly {@link jspb.test.FloatingPointFields.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {jspb.test.IFloatingPointFields} message FloatingPointFields message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatingPointFields.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatingPointFields.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.FloatingPointFields();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.optionalFloatField = reader.float();
                            break;
                        }
                    case 2: {
                            message.requiredFloatField = reader.float();
                            break;
                        }
                    case 3: {
                            if (!(message.repeatedFloatField && message.repeatedFloatField.length))
                                message.repeatedFloatField = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFloatField.push(reader.float());
                            } else
                                message.repeatedFloatField.push(reader.float());
                            break;
                        }
                    case 4: {
                            message.defaultFloatField = reader.float();
                            break;
                        }
                    case 5: {
                            message.optionalDoubleField = reader.double();
                            break;
                        }
                    case 6: {
                            message.requiredDoubleField = reader.double();
                            break;
                        }
                    case 7: {
                            if (!(message.repeatedDoubleField && message.repeatedDoubleField.length))
                                message.repeatedDoubleField = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedDoubleField.push(reader.double());
                            } else
                                message.repeatedDoubleField.push(reader.double());
                            break;
                        }
                    case 8: {
                            message.defaultDoubleField = reader.double();
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
                if (!message.hasOwnProperty("requiredFloatField"))
                    throw $util.ProtocolError("missing required 'requiredFloatField'", { instance: message });
                if (!message.hasOwnProperty("requiredDoubleField"))
                    throw $util.ProtocolError("missing required 'requiredDoubleField'", { instance: message });
                return message;
            };

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatingPointFields.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatingPointFields message.
             * @function verify
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatingPointFields.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.optionalFloatField != null && message.hasOwnProperty("optionalFloatField"))
                    if (typeof message.optionalFloatField !== "number")
                        return "optionalFloatField: number expected";
                if (typeof message.requiredFloatField !== "number")
                    return "requiredFloatField: number expected";
                if (message.repeatedFloatField != null && message.hasOwnProperty("repeatedFloatField")) {
                    if (!Array.isArray(message.repeatedFloatField))
                        return "repeatedFloatField: array expected";
                    for (var i = 0; i < message.repeatedFloatField.length; ++i)
                        if (typeof message.repeatedFloatField[i] !== "number")
                            return "repeatedFloatField: number[] expected";
                }
                if (message.defaultFloatField != null && message.hasOwnProperty("defaultFloatField"))
                    if (typeof message.defaultFloatField !== "number")
                        return "defaultFloatField: number expected";
                if (message.optionalDoubleField != null && message.hasOwnProperty("optionalDoubleField"))
                    if (typeof message.optionalDoubleField !== "number")
                        return "optionalDoubleField: number expected";
                if (typeof message.requiredDoubleField !== "number")
                    return "requiredDoubleField: number expected";
                if (message.repeatedDoubleField != null && message.hasOwnProperty("repeatedDoubleField")) {
                    if (!Array.isArray(message.repeatedDoubleField))
                        return "repeatedDoubleField: array expected";
                    for (var i = 0; i < message.repeatedDoubleField.length; ++i)
                        if (typeof message.repeatedDoubleField[i] !== "number")
                            return "repeatedDoubleField: number[] expected";
                }
                if (message.defaultDoubleField != null && message.hasOwnProperty("defaultDoubleField"))
                    if (typeof message.defaultDoubleField !== "number")
                        return "defaultDoubleField: number expected";
                return null;
            };

            /**
             * Creates a FloatingPointFields message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.FloatingPointFields} FloatingPointFields
             */
            FloatingPointFields.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.FloatingPointFields)
                    return object;
                var message = new $root.jspb.test.FloatingPointFields();
                if (object.optionalFloatField != null)
                    message.optionalFloatField = Number(object.optionalFloatField);
                if (object.requiredFloatField != null)
                    message.requiredFloatField = Number(object.requiredFloatField);
                if (object.repeatedFloatField) {
                    if (!Array.isArray(object.repeatedFloatField))
                        throw TypeError(".jspb.test.FloatingPointFields.repeatedFloatField: array expected");
                    message.repeatedFloatField = [];
                    for (var i = 0; i < object.repeatedFloatField.length; ++i)
                        message.repeatedFloatField[i] = Number(object.repeatedFloatField[i]);
                }
                if (object.defaultFloatField != null)
                    message.defaultFloatField = Number(object.defaultFloatField);
                if (object.optionalDoubleField != null)
                    message.optionalDoubleField = Number(object.optionalDoubleField);
                if (object.requiredDoubleField != null)
                    message.requiredDoubleField = Number(object.requiredDoubleField);
                if (object.repeatedDoubleField) {
                    if (!Array.isArray(object.repeatedDoubleField))
                        throw TypeError(".jspb.test.FloatingPointFields.repeatedDoubleField: array expected");
                    message.repeatedDoubleField = [];
                    for (var i = 0; i < object.repeatedDoubleField.length; ++i)
                        message.repeatedDoubleField[i] = Number(object.repeatedDoubleField[i]);
                }
                if (object.defaultDoubleField != null)
                    message.defaultDoubleField = Number(object.defaultDoubleField);
                return message;
            };

            /**
             * Creates a plain object from a FloatingPointFields message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {jspb.test.FloatingPointFields} message FloatingPointFields
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatingPointFields.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedFloatField = [];
                    object.repeatedDoubleField = [];
                }
                if (options.defaults) {
                    object.optionalFloatField = 0;
                    object.requiredFloatField = 0;
                    object.defaultFloatField = 2;
                    object.optionalDoubleField = 0;
                    object.requiredDoubleField = 0;
                    object.defaultDoubleField = 2;
                }
                if (message.optionalFloatField != null && message.hasOwnProperty("optionalFloatField"))
                    object.optionalFloatField = options.json && !isFinite(message.optionalFloatField) ? String(message.optionalFloatField) : message.optionalFloatField;
                if (message.requiredFloatField != null && message.hasOwnProperty("requiredFloatField"))
                    object.requiredFloatField = options.json && !isFinite(message.requiredFloatField) ? String(message.requiredFloatField) : message.requiredFloatField;
                if (message.repeatedFloatField && message.repeatedFloatField.length) {
                    object.repeatedFloatField = [];
                    for (var j = 0; j < message.repeatedFloatField.length; ++j)
                        object.repeatedFloatField[j] = options.json && !isFinite(message.repeatedFloatField[j]) ? String(message.repeatedFloatField[j]) : message.repeatedFloatField[j];
                }
                if (message.defaultFloatField != null && message.hasOwnProperty("defaultFloatField"))
                    object.defaultFloatField = options.json && !isFinite(message.defaultFloatField) ? String(message.defaultFloatField) : message.defaultFloatField;
                if (message.optionalDoubleField != null && message.hasOwnProperty("optionalDoubleField"))
                    object.optionalDoubleField = options.json && !isFinite(message.optionalDoubleField) ? String(message.optionalDoubleField) : message.optionalDoubleField;
                if (message.requiredDoubleField != null && message.hasOwnProperty("requiredDoubleField"))
                    object.requiredDoubleField = options.json && !isFinite(message.requiredDoubleField) ? String(message.requiredDoubleField) : message.requiredDoubleField;
                if (message.repeatedDoubleField && message.repeatedDoubleField.length) {
                    object.repeatedDoubleField = [];
                    for (var j = 0; j < message.repeatedDoubleField.length; ++j)
                        object.repeatedDoubleField[j] = options.json && !isFinite(message.repeatedDoubleField[j]) ? String(message.repeatedDoubleField[j]) : message.repeatedDoubleField[j];
                }
                if (message.defaultDoubleField != null && message.hasOwnProperty("defaultDoubleField"))
                    object.defaultDoubleField = options.json && !isFinite(message.defaultDoubleField) ? String(message.defaultDoubleField) : message.defaultDoubleField;
                return object;
            };

            /**
             * Converts this FloatingPointFields to JSON.
             * @function toJSON
             * @memberof jspb.test.FloatingPointFields
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatingPointFields.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatingPointFields
             * @function getTypeUrl
             * @memberof jspb.test.FloatingPointFields
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatingPointFields.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.FloatingPointFields";
            };

            return FloatingPointFields;
        })();

        test.TestClone = (function() {

            /**
             * Properties of a TestClone.
             * @memberof jspb.test
             * @interface ITestClone
             * @property {string|null} [str] TestClone str
             * @property {jspb.test.ISimple1|null} [simple1] TestClone simple1
             * @property {Array.<jspb.test.ISimple1>|null} [simple2] TestClone simple2
             * @property {Uint8Array|null} [bytesField] TestClone bytesField
             * @property {string|null} [unused] TestClone unused
             * @property {jspb.test.ICloneExtension|null} [".jspb.test.CloneExtension.extField"] TestClone .jspb.test.CloneExtension.extField
             */

            /**
             * Constructs a new TestClone.
             * @memberof jspb.test
             * @classdesc Represents a TestClone.
             * @implements ITestClone
             * @constructor
             * @param {jspb.test.ITestClone=} [properties] Properties to set
             */
            function TestClone(properties) {
                this.simple2 = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestClone str.
             * @member {string} str
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype.str = "";

            /**
             * TestClone simple1.
             * @member {jspb.test.ISimple1|null|undefined} simple1
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype.simple1 = null;

            /**
             * TestClone simple2.
             * @member {Array.<jspb.test.ISimple1>} simple2
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype.simple2 = $util.emptyArray;

            /**
             * TestClone bytesField.
             * @member {Uint8Array} bytesField
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype.bytesField = $util.newBuffer([]);

            /**
             * TestClone unused.
             * @member {string} unused
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype.unused = "";

            /**
             * TestClone .jspb.test.CloneExtension.extField.
             * @member {jspb.test.ICloneExtension|null|undefined} .jspb.test.CloneExtension.extField
             * @memberof jspb.test.TestClone
             * @instance
             */
            TestClone.prototype[".jspb.test.CloneExtension.extField"] = null;

            /**
             * Creates a new TestClone instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestClone
             * @static
             * @param {jspb.test.ITestClone=} [properties] Properties to set
             * @returns {jspb.test.TestClone} TestClone instance
             */
            TestClone.create = function create(properties) {
                return new TestClone(properties);
            };

            /**
             * Encodes the specified TestClone message. Does not implicitly {@link jspb.test.TestClone.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestClone
             * @static
             * @param {jspb.test.ITestClone} message TestClone message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestClone.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestClone.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestClone.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
                if (message.simple1 != null && Object.hasOwnProperty.call(message, "simple1"))
                    $root.jspb.test.Simple1.encode(message.simple1, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.simple2 != null && message.simple2.length)
                    for (var i = 0; i < message.simple2.length; ++i)
                        $root.jspb.test.Simple1.encode(message.simple2[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.bytesField != null && Object.hasOwnProperty.call(message, "bytesField"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesField);
                if (message.unused != null && Object.hasOwnProperty.call(message, "unused"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.unused);
                if (message[".jspb.test.CloneExtension.extField"] != null && Object.hasOwnProperty.call(message, ".jspb.test.CloneExtension.extField"))
                    $root.jspb.test.CloneExtension.encode(message[".jspb.test.CloneExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestClone message, length delimited. Does not implicitly {@link jspb.test.TestClone.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestClone
             * @static
             * @param {jspb.test.ITestClone} message TestClone message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestClone.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestClone message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestClone
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestClone} TestClone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestClone.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestClone();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.str = reader.string();
                            break;
                        }
                    case 3: {
                            message.simple1 = $root.jspb.test.Simple1.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            if (!(message.simple2 && message.simple2.length))
                                message.simple2 = [];
                            message.simple2.push($root.jspb.test.Simple1.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.bytesField = reader.bytes();
                            break;
                        }
                    case 7: {
                            message.unused = reader.string();
                            break;
                        }
                    case 100: {
                            message[".jspb.test.CloneExtension.extField"] = $root.jspb.test.CloneExtension.decode(reader, reader.uint32());
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
             * Decodes a TestClone message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestClone
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestClone} TestClone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestClone.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestClone message.
             * @function verify
             * @memberof jspb.test.TestClone
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestClone.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                if (message.simple1 != null && message.hasOwnProperty("simple1")) {
                    var error = $root.jspb.test.Simple1.verify(message.simple1);
                    if (error)
                        return "simple1." + error;
                }
                if (message.simple2 != null && message.hasOwnProperty("simple2")) {
                    if (!Array.isArray(message.simple2))
                        return "simple2: array expected";
                    for (var i = 0; i < message.simple2.length; ++i) {
                        var error = $root.jspb.test.Simple1.verify(message.simple2[i]);
                        if (error)
                            return "simple2." + error;
                    }
                }
                if (message.bytesField != null && message.hasOwnProperty("bytesField"))
                    if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField)))
                        return "bytesField: buffer expected";
                if (message.unused != null && message.hasOwnProperty("unused"))
                    if (!$util.isString(message.unused))
                        return "unused: string expected";
                if (message[".jspb.test.CloneExtension.extField"] != null && message.hasOwnProperty(".jspb.test.CloneExtension.extField")) {
                    var error = $root.jspb.test.CloneExtension.verify(message[".jspb.test.CloneExtension.extField"]);
                    if (error)
                        return ".jspb.test.CloneExtension.extField." + error;
                }
                return null;
            };

            /**
             * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestClone
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestClone} TestClone
             */
            TestClone.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestClone)
                    return object;
                var message = new $root.jspb.test.TestClone();
                if (object.str != null)
                    message.str = String(object.str);
                if (object.simple1 != null) {
                    if (typeof object.simple1 !== "object")
                        throw TypeError(".jspb.test.TestClone.simple1: object expected");
                    message.simple1 = $root.jspb.test.Simple1.fromObject(object.simple1);
                }
                if (object.simple2) {
                    if (!Array.isArray(object.simple2))
                        throw TypeError(".jspb.test.TestClone.simple2: array expected");
                    message.simple2 = [];
                    for (var i = 0; i < object.simple2.length; ++i) {
                        if (typeof object.simple2[i] !== "object")
                            throw TypeError(".jspb.test.TestClone.simple2: object expected");
                        message.simple2[i] = $root.jspb.test.Simple1.fromObject(object.simple2[i]);
                    }
                }
                if (object.bytesField != null)
                    if (typeof object.bytesField === "string")
                        $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
                    else if (object.bytesField.length >= 0)
                        message.bytesField = object.bytesField;
                if (object.unused != null)
                    message.unused = String(object.unused);
                if (object[".jspb.test.CloneExtension.extField"] != null) {
                    if (typeof object[".jspb.test.CloneExtension.extField"] !== "object")
                        throw TypeError(".jspb.test.TestClone..jspb.test.CloneExtension.extField: object expected");
                    message[".jspb.test.CloneExtension.extField"] = $root.jspb.test.CloneExtension.fromObject(object[".jspb.test.CloneExtension.extField"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a TestClone message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestClone
             * @static
             * @param {jspb.test.TestClone} message TestClone
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestClone.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.simple2 = [];
                if (options.defaults) {
                    object.str = "";
                    object.simple1 = null;
                    if (options.bytes === String)
                        object.bytesField = "";
                    else {
                        object.bytesField = [];
                        if (options.bytes !== Array)
                            object.bytesField = $util.newBuffer(object.bytesField);
                    }
                    object.unused = "";
                    object[".jspb.test.CloneExtension.extField"] = null;
                }
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                if (message.simple1 != null && message.hasOwnProperty("simple1"))
                    object.simple1 = $root.jspb.test.Simple1.toObject(message.simple1, options);
                if (message.simple2 && message.simple2.length) {
                    object.simple2 = [];
                    for (var j = 0; j < message.simple2.length; ++j)
                        object.simple2[j] = $root.jspb.test.Simple1.toObject(message.simple2[j], options);
                }
                if (message.bytesField != null && message.hasOwnProperty("bytesField"))
                    object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
                if (message.unused != null && message.hasOwnProperty("unused"))
                    object.unused = message.unused;
                if (message[".jspb.test.CloneExtension.extField"] != null && message.hasOwnProperty(".jspb.test.CloneExtension.extField"))
                    object[".jspb.test.CloneExtension.extField"] = $root.jspb.test.CloneExtension.toObject(message[".jspb.test.CloneExtension.extField"], options);
                return object;
            };

            /**
             * Converts this TestClone to JSON.
             * @function toJSON
             * @memberof jspb.test.TestClone
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestClone.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestClone
             * @function getTypeUrl
             * @memberof jspb.test.TestClone
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestClone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestClone";
            };

            return TestClone;
        })();

        test.CloneExtension = (function() {

            /**
             * Properties of a CloneExtension.
             * @memberof jspb.test
             * @interface ICloneExtension
             * @property {string|null} [ext] CloneExtension ext
             */

            /**
             * Constructs a new CloneExtension.
             * @memberof jspb.test
             * @classdesc Represents a CloneExtension.
             * @implements ICloneExtension
             * @constructor
             * @param {jspb.test.ICloneExtension=} [properties] Properties to set
             */
            function CloneExtension(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CloneExtension ext.
             * @member {string} ext
             * @memberof jspb.test.CloneExtension
             * @instance
             */
            CloneExtension.prototype.ext = "";

            /**
             * Creates a new CloneExtension instance using the specified properties.
             * @function create
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {jspb.test.ICloneExtension=} [properties] Properties to set
             * @returns {jspb.test.CloneExtension} CloneExtension instance
             */
            CloneExtension.create = function create(properties) {
                return new CloneExtension(properties);
            };

            /**
             * Encodes the specified CloneExtension message. Does not implicitly {@link jspb.test.CloneExtension.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {jspb.test.ICloneExtension} message CloneExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloneExtension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.CloneExtension.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.CloneExtension.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.ext);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified CloneExtension message, length delimited. Does not implicitly {@link jspb.test.CloneExtension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {jspb.test.ICloneExtension} message CloneExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloneExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CloneExtension message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.CloneExtension} CloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloneExtension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.CloneExtension();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.ext = reader.string();
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
             * Decodes a CloneExtension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.CloneExtension} CloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloneExtension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CloneExtension message.
             * @function verify
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloneExtension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ext != null && message.hasOwnProperty("ext"))
                    if (!$util.isString(message.ext))
                        return "ext: string expected";
                return null;
            };

            /**
             * Creates a CloneExtension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.CloneExtension} CloneExtension
             */
            CloneExtension.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.CloneExtension)
                    return object;
                var message = new $root.jspb.test.CloneExtension();
                if (object.ext != null)
                    message.ext = String(object.ext);
                return message;
            };

            /**
             * Creates a plain object from a CloneExtension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {jspb.test.CloneExtension} message CloneExtension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloneExtension.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ext = "";
                if (message.ext != null && message.hasOwnProperty("ext"))
                    object.ext = message.ext;
                return object;
            };

            /**
             * Converts this CloneExtension to JSON.
             * @function toJSON
             * @memberof jspb.test.CloneExtension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloneExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CloneExtension
             * @function getTypeUrl
             * @memberof jspb.test.CloneExtension
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CloneExtension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.CloneExtension";
            };

            return CloneExtension;
        })();

        test.TestGroup = (function() {

            /**
             * Properties of a TestGroup.
             * @memberof jspb.test
             * @interface ITestGroup
             * @property {Array.<jspb.test.TestGroup.IRepeatedGroup>|null} [repeatedGroup] TestGroup repeatedGroup
             * @property {jspb.test.TestGroup.IRequiredGroup} requiredGroup TestGroup requiredGroup
             * @property {jspb.test.TestGroup.IOptionalGroup|null} [optionalGroup] TestGroup optionalGroup
             * @property {jspb.test.TestGroup.IMessageInGroup|null} [messageInGroup] TestGroup messageInGroup
             * @property {jspb.test.TestGroup.IEnumInGroup|null} [enumInGroup] TestGroup enumInGroup
             * @property {string|null} [id] TestGroup id
             * @property {jspb.test.ISimple2} requiredSimple TestGroup requiredSimple
             * @property {jspb.test.ISimple2|null} [optionalSimple] TestGroup optionalSimple
             */

            /**
             * Constructs a new TestGroup.
             * @memberof jspb.test
             * @classdesc Represents a TestGroup.
             * @implements ITestGroup
             * @constructor
             * @param {jspb.test.ITestGroup=} [properties] Properties to set
             */
            function TestGroup(properties) {
                this.repeatedGroup = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestGroup repeatedGroup.
             * @member {Array.<jspb.test.TestGroup.IRepeatedGroup>} repeatedGroup
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.repeatedGroup = $util.emptyArray;

            /**
             * TestGroup requiredGroup.
             * @member {jspb.test.TestGroup.IRequiredGroup} requiredGroup
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.requiredGroup = null;

            /**
             * TestGroup optionalGroup.
             * @member {jspb.test.TestGroup.IOptionalGroup|null|undefined} optionalGroup
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.optionalGroup = null;

            /**
             * TestGroup messageInGroup.
             * @member {jspb.test.TestGroup.IMessageInGroup|null|undefined} messageInGroup
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.messageInGroup = null;

            /**
             * TestGroup enumInGroup.
             * @member {jspb.test.TestGroup.IEnumInGroup|null|undefined} enumInGroup
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.enumInGroup = null;

            /**
             * TestGroup id.
             * @member {string} id
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.id = "";

            /**
             * TestGroup requiredSimple.
             * @member {jspb.test.ISimple2} requiredSimple
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.requiredSimple = null;

            /**
             * TestGroup optionalSimple.
             * @member {jspb.test.ISimple2|null|undefined} optionalSimple
             * @memberof jspb.test.TestGroup
             * @instance
             */
            TestGroup.prototype.optionalSimple = null;

            /**
             * Creates a new TestGroup instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestGroup
             * @static
             * @param {jspb.test.ITestGroup=} [properties] Properties to set
             * @returns {jspb.test.TestGroup} TestGroup instance
             */
            TestGroup.create = function create(properties) {
                return new TestGroup(properties);
            };

            /**
             * Encodes the specified TestGroup message. Does not implicitly {@link jspb.test.TestGroup.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestGroup
             * @static
             * @param {jspb.test.ITestGroup} message TestGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestGroup.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestGroup.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.repeatedGroup != null && message.repeatedGroup.length)
                    for (var i = 0; i < message.repeatedGroup.length; ++i)
                        $root.jspb.test.TestGroup.RepeatedGroup.encode(message.repeatedGroup[i], writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
                $root.jspb.test.TestGroup.RequiredGroup.encode(message.requiredGroup, writer.uint32(/* id 2, wireType 3 =*/19)).uint32(/* id 2, wireType 4 =*/20);
                if (message.optionalGroup != null && Object.hasOwnProperty.call(message, "optionalGroup"))
                    $root.jspb.test.TestGroup.OptionalGroup.encode(message.optionalGroup, writer.uint32(/* id 3, wireType 3 =*/27)).uint32(/* id 3, wireType 4 =*/28);
                if (message.messageInGroup != null && Object.hasOwnProperty.call(message, "messageInGroup"))
                    $root.jspb.test.TestGroup.MessageInGroup.encode(message.messageInGroup, writer.uint32(/* id 4, wireType 3 =*/35)).uint32(/* id 4, wireType 4 =*/36);
                if (message.enumInGroup != null && Object.hasOwnProperty.call(message, "enumInGroup"))
                    $root.jspb.test.TestGroup.EnumInGroup.encode(message.enumInGroup, writer.uint32(/* id 5, wireType 3 =*/43)).uint32(/* id 5, wireType 4 =*/44);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.id);
                $root.jspb.test.Simple2.encode(message.requiredSimple, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.optionalSimple != null && Object.hasOwnProperty.call(message, "optionalSimple"))
                    $root.jspb.test.Simple2.encode(message.optionalSimple, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestGroup
             * @static
             * @param {jspb.test.ITestGroup} message TestGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestGroup message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestGroup} TestGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestGroup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.repeatedGroup && message.repeatedGroup.length))
                                message.repeatedGroup = [];
                            message.repeatedGroup.push($root.jspb.test.TestGroup.RepeatedGroup.decode(reader));
                            break;
                        }
                    case 2: {
                            message.requiredGroup = $root.jspb.test.TestGroup.RequiredGroup.decode(reader);
                            break;
                        }
                    case 3: {
                            message.optionalGroup = $root.jspb.test.TestGroup.OptionalGroup.decode(reader);
                            break;
                        }
                    case 4: {
                            message.messageInGroup = $root.jspb.test.TestGroup.MessageInGroup.decode(reader);
                            break;
                        }
                    case 5: {
                            message.enumInGroup = $root.jspb.test.TestGroup.EnumInGroup.decode(reader);
                            break;
                        }
                    case 6: {
                            message.id = reader.string();
                            break;
                        }
                    case 7: {
                            message.requiredSimple = $root.jspb.test.Simple2.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.optionalSimple = $root.jspb.test.Simple2.decode(reader, reader.uint32());
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
                if (!message.hasOwnProperty("requiredGroup"))
                    throw $util.ProtocolError("missing required 'requiredGroup'", { instance: message });
                if (!message.hasOwnProperty("requiredSimple"))
                    throw $util.ProtocolError("missing required 'requiredSimple'", { instance: message });
                return message;
            };

            /**
             * Decodes a TestGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestGroup} TestGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestGroup.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestGroup message.
             * @function verify
             * @memberof jspb.test.TestGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestGroup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.repeatedGroup != null && message.hasOwnProperty("repeatedGroup")) {
                    if (!Array.isArray(message.repeatedGroup))
                        return "repeatedGroup: array expected";
                    for (var i = 0; i < message.repeatedGroup.length; ++i) {
                        var error = $root.jspb.test.TestGroup.RepeatedGroup.verify(message.repeatedGroup[i]);
                        if (error)
                            return "repeatedGroup." + error;
                    }
                }
                {
                    var error = $root.jspb.test.TestGroup.RequiredGroup.verify(message.requiredGroup);
                    if (error)
                        return "requiredGroup." + error;
                }
                if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup")) {
                    var error = $root.jspb.test.TestGroup.OptionalGroup.verify(message.optionalGroup);
                    if (error)
                        return "optionalGroup." + error;
                }
                if (message.messageInGroup != null && message.hasOwnProperty("messageInGroup")) {
                    var error = $root.jspb.test.TestGroup.MessageInGroup.verify(message.messageInGroup);
                    if (error)
                        return "messageInGroup." + error;
                }
                if (message.enumInGroup != null && message.hasOwnProperty("enumInGroup")) {
                    var error = $root.jspb.test.TestGroup.EnumInGroup.verify(message.enumInGroup);
                    if (error)
                        return "enumInGroup." + error;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                {
                    var error = $root.jspb.test.Simple2.verify(message.requiredSimple);
                    if (error)
                        return "requiredSimple." + error;
                }
                if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple")) {
                    var error = $root.jspb.test.Simple2.verify(message.optionalSimple);
                    if (error)
                        return "optionalSimple." + error;
                }
                return null;
            };

            /**
             * Creates a TestGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup} TestGroup
             */
            TestGroup.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestGroup)
                    return object;
                var message = new $root.jspb.test.TestGroup();
                if (object.repeatedGroup) {
                    if (!Array.isArray(object.repeatedGroup))
                        throw TypeError(".jspb.test.TestGroup.repeatedGroup: array expected");
                    message.repeatedGroup = [];
                    for (var i = 0; i < object.repeatedGroup.length; ++i) {
                        if (typeof object.repeatedGroup[i] !== "object")
                            throw TypeError(".jspb.test.TestGroup.repeatedGroup: object expected");
                        message.repeatedGroup[i] = $root.jspb.test.TestGroup.RepeatedGroup.fromObject(object.repeatedGroup[i]);
                    }
                }
                if (object.requiredGroup != null) {
                    if (typeof object.requiredGroup !== "object")
                        throw TypeError(".jspb.test.TestGroup.requiredGroup: object expected");
                    message.requiredGroup = $root.jspb.test.TestGroup.RequiredGroup.fromObject(object.requiredGroup);
                }
                if (object.optionalGroup != null) {
                    if (typeof object.optionalGroup !== "object")
                        throw TypeError(".jspb.test.TestGroup.optionalGroup: object expected");
                    message.optionalGroup = $root.jspb.test.TestGroup.OptionalGroup.fromObject(object.optionalGroup);
                }
                if (object.messageInGroup != null) {
                    if (typeof object.messageInGroup !== "object")
                        throw TypeError(".jspb.test.TestGroup.messageInGroup: object expected");
                    message.messageInGroup = $root.jspb.test.TestGroup.MessageInGroup.fromObject(object.messageInGroup);
                }
                if (object.enumInGroup != null) {
                    if (typeof object.enumInGroup !== "object")
                        throw TypeError(".jspb.test.TestGroup.enumInGroup: object expected");
                    message.enumInGroup = $root.jspb.test.TestGroup.EnumInGroup.fromObject(object.enumInGroup);
                }
                if (object.id != null)
                    message.id = String(object.id);
                if (object.requiredSimple != null) {
                    if (typeof object.requiredSimple !== "object")
                        throw TypeError(".jspb.test.TestGroup.requiredSimple: object expected");
                    message.requiredSimple = $root.jspb.test.Simple2.fromObject(object.requiredSimple);
                }
                if (object.optionalSimple != null) {
                    if (typeof object.optionalSimple !== "object")
                        throw TypeError(".jspb.test.TestGroup.optionalSimple: object expected");
                    message.optionalSimple = $root.jspb.test.Simple2.fromObject(object.optionalSimple);
                }
                return message;
            };

            /**
             * Creates a plain object from a TestGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestGroup
             * @static
             * @param {jspb.test.TestGroup} message TestGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.repeatedGroup = [];
                if (options.defaults) {
                    object.requiredGroup = null;
                    object.optionalGroup = null;
                    object.messageInGroup = null;
                    object.enumInGroup = null;
                    object.id = "";
                    object.requiredSimple = null;
                    object.optionalSimple = null;
                }
                if (message.repeatedGroup && message.repeatedGroup.length) {
                    object.repeatedGroup = [];
                    for (var j = 0; j < message.repeatedGroup.length; ++j)
                        object.repeatedGroup[j] = $root.jspb.test.TestGroup.RepeatedGroup.toObject(message.repeatedGroup[j], options);
                }
                if (message.requiredGroup != null && message.hasOwnProperty("requiredGroup"))
                    object.requiredGroup = $root.jspb.test.TestGroup.RequiredGroup.toObject(message.requiredGroup, options);
                if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup"))
                    object.optionalGroup = $root.jspb.test.TestGroup.OptionalGroup.toObject(message.optionalGroup, options);
                if (message.messageInGroup != null && message.hasOwnProperty("messageInGroup"))
                    object.messageInGroup = $root.jspb.test.TestGroup.MessageInGroup.toObject(message.messageInGroup, options);
                if (message.enumInGroup != null && message.hasOwnProperty("enumInGroup"))
                    object.enumInGroup = $root.jspb.test.TestGroup.EnumInGroup.toObject(message.enumInGroup, options);
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.requiredSimple != null && message.hasOwnProperty("requiredSimple"))
                    object.requiredSimple = $root.jspb.test.Simple2.toObject(message.requiredSimple, options);
                if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple"))
                    object.optionalSimple = $root.jspb.test.Simple2.toObject(message.optionalSimple, options);
                return object;
            };

            /**
             * Converts this TestGroup to JSON.
             * @function toJSON
             * @memberof jspb.test.TestGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestGroup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestGroup
             * @function getTypeUrl
             * @memberof jspb.test.TestGroup
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestGroup";
            };

            TestGroup.RepeatedGroup = (function() {

                /**
                 * Properties of a RepeatedGroup.
                 * @memberof jspb.test.TestGroup
                 * @interface IRepeatedGroup
                 * @property {string} id RepeatedGroup id
                 * @property {Array.<boolean>|null} [someBool] RepeatedGroup someBool
                 */

                /**
                 * Constructs a new RepeatedGroup.
                 * @memberof jspb.test.TestGroup
                 * @classdesc Represents a RepeatedGroup.
                 * @implements IRepeatedGroup
                 * @constructor
                 * @param {jspb.test.TestGroup.IRepeatedGroup=} [properties] Properties to set
                 */
                function RepeatedGroup(properties) {
                    this.someBool = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RepeatedGroup id.
                 * @member {string} id
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @instance
                 */
                RepeatedGroup.prototype.id = "";

                /**
                 * RepeatedGroup someBool.
                 * @member {Array.<boolean>} someBool
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @instance
                 */
                RepeatedGroup.prototype.someBool = $util.emptyArray;

                /**
                 * Creates a new RepeatedGroup instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRepeatedGroup=} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup instance
                 */
                RepeatedGroup.create = function create(properties) {
                    return new RepeatedGroup(properties);
                };

                /**
                 * Encodes the specified RepeatedGroup message. Does not implicitly {@link jspb.test.TestGroup.RepeatedGroup.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRepeatedGroup} message RepeatedGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RepeatedGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.TestGroup.RepeatedGroup.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.TestGroup.RepeatedGroup.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.someBool != null && message.someBool.length)
                        for (var i = 0; i < message.someBool.length; ++i)
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.someBool[i]);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified RepeatedGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.RepeatedGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRepeatedGroup} message RepeatedGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RepeatedGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RepeatedGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.RepeatedGroup();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.someBool && message.someBool.length))
                                    message.someBool = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.someBool.push(reader.bool());
                                } else
                                    message.someBool.push(reader.bool());
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
                    if (!message.hasOwnProperty("id"))
                        throw $util.ProtocolError("missing required 'id'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RepeatedGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RepeatedGroup message.
                 * @function verify
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RepeatedGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.id))
                        return "id: string expected";
                    if (message.someBool != null && message.hasOwnProperty("someBool")) {
                        if (!Array.isArray(message.someBool))
                            return "someBool: array expected";
                        for (var i = 0; i < message.someBool.length; ++i)
                            if (typeof message.someBool[i] !== "boolean")
                                return "someBool: boolean[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a RepeatedGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RepeatedGroup} RepeatedGroup
                 */
                RepeatedGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.TestGroup.RepeatedGroup)
                        return object;
                    var message = new $root.jspb.test.TestGroup.RepeatedGroup();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.someBool) {
                        if (!Array.isArray(object.someBool))
                            throw TypeError(".jspb.test.TestGroup.RepeatedGroup.someBool: array expected");
                        message.someBool = [];
                        for (var i = 0; i < object.someBool.length; ++i)
                            message.someBool[i] = Boolean(object.someBool[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RepeatedGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {jspb.test.TestGroup.RepeatedGroup} message RepeatedGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RepeatedGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.someBool = [];
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.someBool && message.someBool.length) {
                        object.someBool = [];
                        for (var j = 0; j < message.someBool.length; ++j)
                            object.someBool[j] = message.someBool[j];
                    }
                    return object;
                };

                /**
                 * Converts this RepeatedGroup to JSON.
                 * @function toJSON
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RepeatedGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RepeatedGroup
                 * @function getTypeUrl
                 * @memberof jspb.test.TestGroup.RepeatedGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RepeatedGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.TestGroup.RepeatedGroup";
                };

                return RepeatedGroup;
            })();

            TestGroup.RequiredGroup = (function() {

                /**
                 * Properties of a RequiredGroup.
                 * @memberof jspb.test.TestGroup
                 * @interface IRequiredGroup
                 * @property {string} id RequiredGroup id
                 */

                /**
                 * Constructs a new RequiredGroup.
                 * @memberof jspb.test.TestGroup
                 * @classdesc Represents a RequiredGroup.
                 * @implements IRequiredGroup
                 * @constructor
                 * @param {jspb.test.TestGroup.IRequiredGroup=} [properties] Properties to set
                 */
                function RequiredGroup(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RequiredGroup id.
                 * @member {string} id
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @instance
                 */
                RequiredGroup.prototype.id = "";

                /**
                 * Creates a new RequiredGroup instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRequiredGroup=} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup instance
                 */
                RequiredGroup.create = function create(properties) {
                    return new RequiredGroup(properties);
                };

                /**
                 * Encodes the specified RequiredGroup message. Does not implicitly {@link jspb.test.TestGroup.RequiredGroup.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRequiredGroup} message RequiredGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequiredGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.TestGroup.RequiredGroup.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.TestGroup.RequiredGroup.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified RequiredGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.RequiredGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {jspb.test.TestGroup.IRequiredGroup} message RequiredGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RequiredGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequiredGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.RequiredGroup();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
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
                    if (!message.hasOwnProperty("id"))
                        throw $util.ProtocolError("missing required 'id'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RequiredGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RequiredGroup message.
                 * @function verify
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RequiredGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.id))
                        return "id: string expected";
                    return null;
                };

                /**
                 * Creates a RequiredGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.RequiredGroup} RequiredGroup
                 */
                RequiredGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.TestGroup.RequiredGroup)
                        return object;
                    var message = new $root.jspb.test.TestGroup.RequiredGroup();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a RequiredGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {jspb.test.TestGroup.RequiredGroup} message RequiredGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RequiredGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this RequiredGroup to JSON.
                 * @function toJSON
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RequiredGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RequiredGroup
                 * @function getTypeUrl
                 * @memberof jspb.test.TestGroup.RequiredGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RequiredGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.TestGroup.RequiredGroup";
                };

                return RequiredGroup;
            })();

            TestGroup.OptionalGroup = (function() {

                /**
                 * Properties of an OptionalGroup.
                 * @memberof jspb.test.TestGroup
                 * @interface IOptionalGroup
                 * @property {string} id OptionalGroup id
                 */

                /**
                 * Constructs a new OptionalGroup.
                 * @memberof jspb.test.TestGroup
                 * @classdesc Represents an OptionalGroup.
                 * @implements IOptionalGroup
                 * @constructor
                 * @param {jspb.test.TestGroup.IOptionalGroup=} [properties] Properties to set
                 */
                function OptionalGroup(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OptionalGroup id.
                 * @member {string} id
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @instance
                 */
                OptionalGroup.prototype.id = "";

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {jspb.test.TestGroup.IOptionalGroup=} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup instance
                 */
                OptionalGroup.create = function create(properties) {
                    return new OptionalGroup(properties);
                };

                /**
                 * Encodes the specified OptionalGroup message. Does not implicitly {@link jspb.test.TestGroup.OptionalGroup.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {jspb.test.TestGroup.IOptionalGroup} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.TestGroup.OptionalGroup.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.TestGroup.OptionalGroup.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.OptionalGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {jspb.test.TestGroup.IOptionalGroup} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.OptionalGroup();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
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
                    if (!message.hasOwnProperty("id"))
                        throw $util.ProtocolError("missing required 'id'", { instance: message });
                    return message;
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OptionalGroup message.
                 * @function verify
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OptionalGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.id))
                        return "id: string expected";
                    return null;
                };

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.TestGroup.OptionalGroup)
                        return object;
                    var message = new $root.jspb.test.TestGroup.OptionalGroup();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {jspb.test.TestGroup.OptionalGroup} message OptionalGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OptionalGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @function toJSON
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OptionalGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OptionalGroup
                 * @function getTypeUrl
                 * @memberof jspb.test.TestGroup.OptionalGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OptionalGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.TestGroup.OptionalGroup";
                };

                return OptionalGroup;
            })();

            TestGroup.MessageInGroup = (function() {

                /**
                 * Properties of a MessageInGroup.
                 * @memberof jspb.test.TestGroup
                 * @interface IMessageInGroup
                 * @property {jspb.test.TestGroup.MessageInGroup.INestedMessage} id MessageInGroup id
                 */

                /**
                 * Constructs a new MessageInGroup.
                 * @memberof jspb.test.TestGroup
                 * @classdesc Represents a MessageInGroup.
                 * @implements IMessageInGroup
                 * @constructor
                 * @param {jspb.test.TestGroup.IMessageInGroup=} [properties] Properties to set
                 */
                function MessageInGroup(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageInGroup id.
                 * @member {jspb.test.TestGroup.MessageInGroup.INestedMessage} id
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @instance
                 */
                MessageInGroup.prototype.id = null;

                /**
                 * Creates a new MessageInGroup instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IMessageInGroup=} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.MessageInGroup} MessageInGroup instance
                 */
                MessageInGroup.create = function create(properties) {
                    return new MessageInGroup(properties);
                };

                /**
                 * Encodes the specified MessageInGroup message. Does not implicitly {@link jspb.test.TestGroup.MessageInGroup.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IMessageInGroup} message MessageInGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageInGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.TestGroup.MessageInGroup.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.TestGroup.MessageInGroup.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified MessageInGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.MessageInGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IMessageInGroup} message MessageInGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageInGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageInGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.MessageInGroup} MessageInGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageInGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.MessageInGroup();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.decode(reader, reader.uint32());
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
                    if (!message.hasOwnProperty("id"))
                        throw $util.ProtocolError("missing required 'id'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a MessageInGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.MessageInGroup} MessageInGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageInGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageInGroup message.
                 * @function verify
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageInGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    {
                        var error = $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    return null;
                };

                /**
                 * Creates a MessageInGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.MessageInGroup} MessageInGroup
                 */
                MessageInGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.TestGroup.MessageInGroup)
                        return object;
                    var message = new $root.jspb.test.TestGroup.MessageInGroup();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".jspb.test.TestGroup.MessageInGroup.id: object expected");
                        message.id = $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.fromObject(object.id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageInGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {jspb.test.TestGroup.MessageInGroup} message MessageInGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageInGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = null;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.toObject(message.id, options);
                    return object;
                };

                /**
                 * Converts this MessageInGroup to JSON.
                 * @function toJSON
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageInGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageInGroup
                 * @function getTypeUrl
                 * @memberof jspb.test.TestGroup.MessageInGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageInGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.TestGroup.MessageInGroup";
                };

                MessageInGroup.NestedMessage = (function() {

                    /**
                     * Properties of a NestedMessage.
                     * @memberof jspb.test.TestGroup.MessageInGroup
                     * @interface INestedMessage
                     * @property {string|null} [id] NestedMessage id
                     */

                    /**
                     * Constructs a new NestedMessage.
                     * @memberof jspb.test.TestGroup.MessageInGroup
                     * @classdesc Represents a NestedMessage.
                     * @implements INestedMessage
                     * @constructor
                     * @param {jspb.test.TestGroup.MessageInGroup.INestedMessage=} [properties] Properties to set
                     */
                    function NestedMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NestedMessage id.
                     * @member {string} id
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @instance
                     */
                    NestedMessage.prototype.id = "";

                    /**
                     * Creates a new NestedMessage instance using the specified properties.
                     * @function create
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {jspb.test.TestGroup.MessageInGroup.INestedMessage=} [properties] Properties to set
                     * @returns {jspb.test.TestGroup.MessageInGroup.NestedMessage} NestedMessage instance
                     */
                    NestedMessage.create = function create(properties) {
                        return new NestedMessage(properties);
                    };

                    /**
                     * Encodes the specified NestedMessage message. Does not implicitly {@link jspb.test.TestGroup.MessageInGroup.NestedMessage.verify|verify} messages.
                     * @function encode
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {jspb.test.TestGroup.MessageInGroup.INestedMessage} message NestedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NestedMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        var fullyUnknown = [];
                        if (message.$unknownFields && $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.decode)
                            for (var i = 0; i < message.$unknownFields.length; ++i)
                                try {
                                    var known = $root.jspb.test.TestGroup.MessageInGroup.NestedMessage.decode(message.$unknownFields[i]);
                                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                    message = Object.assign(known, message);
                                } catch (_) {
                                }
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        for (var i = 0; i < fullyUnknown.length; ++i)
                            writer._unknownField(fullyUnknown[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link jspb.test.TestGroup.MessageInGroup.NestedMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {jspb.test.TestGroup.MessageInGroup.INestedMessage} message NestedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NestedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NestedMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {jspb.test.TestGroup.MessageInGroup.NestedMessage} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NestedMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.MessageInGroup.NestedMessage();
                        while (reader.pos < end) {
                            var unknownStartPos = reader.pos;
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.string();
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
                     * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {jspb.test.TestGroup.MessageInGroup.NestedMessage} NestedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NestedMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NestedMessage message.
                     * @function verify
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NestedMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        return null;
                    };

                    /**
                     * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {jspb.test.TestGroup.MessageInGroup.NestedMessage} NestedMessage
                     */
                    NestedMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.jspb.test.TestGroup.MessageInGroup.NestedMessage)
                            return object;
                        var message = new $root.jspb.test.TestGroup.MessageInGroup.NestedMessage();
                        if (object.id != null)
                            message.id = String(object.id);
                        return message;
                    };

                    /**
                     * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {jspb.test.TestGroup.MessageInGroup.NestedMessage} message NestedMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NestedMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.id = "";
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        return object;
                    };

                    /**
                     * Converts this NestedMessage to JSON.
                     * @function toJSON
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NestedMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for NestedMessage
                     * @function getTypeUrl
                     * @memberof jspb.test.TestGroup.MessageInGroup.NestedMessage
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    NestedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/jspb.test.TestGroup.MessageInGroup.NestedMessage";
                    };

                    return NestedMessage;
                })();

                return MessageInGroup;
            })();

            TestGroup.EnumInGroup = (function() {

                /**
                 * Properties of an EnumInGroup.
                 * @memberof jspb.test.TestGroup
                 * @interface IEnumInGroup
                 * @property {jspb.test.TestGroup.EnumInGroup.NestedEnum} id EnumInGroup id
                 */

                /**
                 * Constructs a new EnumInGroup.
                 * @memberof jspb.test.TestGroup
                 * @classdesc Represents an EnumInGroup.
                 * @implements IEnumInGroup
                 * @constructor
                 * @param {jspb.test.TestGroup.IEnumInGroup=} [properties] Properties to set
                 */
                function EnumInGroup(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EnumInGroup id.
                 * @member {jspb.test.TestGroup.EnumInGroup.NestedEnum} id
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @instance
                 */
                EnumInGroup.prototype.id = 0;

                /**
                 * Creates a new EnumInGroup instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IEnumInGroup=} [properties] Properties to set
                 * @returns {jspb.test.TestGroup.EnumInGroup} EnumInGroup instance
                 */
                EnumInGroup.create = function create(properties) {
                    return new EnumInGroup(properties);
                };

                /**
                 * Encodes the specified EnumInGroup message. Does not implicitly {@link jspb.test.TestGroup.EnumInGroup.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IEnumInGroup} message EnumInGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumInGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.TestGroup.EnumInGroup.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.TestGroup.EnumInGroup.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified EnumInGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.EnumInGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {jspb.test.TestGroup.IEnumInGroup} message EnumInGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumInGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EnumInGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.TestGroup.EnumInGroup} EnumInGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumInGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup.EnumInGroup();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.int32();
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
                    if (!message.hasOwnProperty("id"))
                        throw $util.ProtocolError("missing required 'id'", { instance: message });
                    return message;
                };

                /**
                 * Decodes an EnumInGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.TestGroup.EnumInGroup} EnumInGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumInGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EnumInGroup message.
                 * @function verify
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumInGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    switch (message.id) {
                    default:
                        return "id: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                    return null;
                };

                /**
                 * Creates an EnumInGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.TestGroup.EnumInGroup} EnumInGroup
                 */
                EnumInGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.TestGroup.EnumInGroup)
                        return object;
                    var message = new $root.jspb.test.TestGroup.EnumInGroup();
                    switch (object.id) {
                    default:
                        if (typeof object.id === "number") {
                            message.id = object.id;
                            break;
                        }
                        break;
                    case "first":
                    case 0:
                        message.id = 0;
                        break;
                    case "second":
                    case 1:
                        message.id = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EnumInGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {jspb.test.TestGroup.EnumInGroup} message EnumInGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumInGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = options.enums === String ? "first" : 0;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = options.enums === String ? $root.jspb.test.TestGroup.EnumInGroup.NestedEnum[message.id] === undefined ? message.id : $root.jspb.test.TestGroup.EnumInGroup.NestedEnum[message.id] : message.id;
                    return object;
                };

                /**
                 * Converts this EnumInGroup to JSON.
                 * @function toJSON
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumInGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for EnumInGroup
                 * @function getTypeUrl
                 * @memberof jspb.test.TestGroup.EnumInGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                EnumInGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.TestGroup.EnumInGroup";
                };

                /**
                 * NestedEnum enum.
                 * @name jspb.test.TestGroup.EnumInGroup.NestedEnum
                 * @enum {number}
                 * @property {number} first=0 first value
                 * @property {number} second=1 second value
                 */
                EnumInGroup.NestedEnum = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "first"] = 0;
                    values[valuesById[1] = "second"] = 1;
                    return values;
                })();

                return EnumInGroup;
            })();

            return TestGroup;
        })();

        test.TestGroup1 = (function() {

            /**
             * Properties of a TestGroup1.
             * @memberof jspb.test
             * @interface ITestGroup1
             * @property {jspb.test.TestGroup.IRepeatedGroup|null} [group] TestGroup1 group
             */

            /**
             * Constructs a new TestGroup1.
             * @memberof jspb.test
             * @classdesc Represents a TestGroup1.
             * @implements ITestGroup1
             * @constructor
             * @param {jspb.test.ITestGroup1=} [properties] Properties to set
             */
            function TestGroup1(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestGroup1 group.
             * @member {jspb.test.TestGroup.IRepeatedGroup|null|undefined} group
             * @memberof jspb.test.TestGroup1
             * @instance
             */
            TestGroup1.prototype.group = null;

            /**
             * Creates a new TestGroup1 instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {jspb.test.ITestGroup1=} [properties] Properties to set
             * @returns {jspb.test.TestGroup1} TestGroup1 instance
             */
            TestGroup1.create = function create(properties) {
                return new TestGroup1(properties);
            };

            /**
             * Encodes the specified TestGroup1 message. Does not implicitly {@link jspb.test.TestGroup1.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {jspb.test.ITestGroup1} message TestGroup1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup1.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestGroup1.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestGroup1.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                    $root.jspb.test.TestGroup.RepeatedGroup.encode(message.group, writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestGroup1 message, length delimited. Does not implicitly {@link jspb.test.TestGroup1.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {jspb.test.ITestGroup1} message TestGroup1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestGroup1.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestGroup1 message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestGroup1} TestGroup1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestGroup1.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestGroup1();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.group = $root.jspb.test.TestGroup.RepeatedGroup.decode(reader);
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
             * Decodes a TestGroup1 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestGroup1} TestGroup1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestGroup1.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestGroup1 message.
             * @function verify
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestGroup1.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.group != null && message.hasOwnProperty("group")) {
                    var error = $root.jspb.test.TestGroup.RepeatedGroup.verify(message.group);
                    if (error)
                        return "group." + error;
                }
                return null;
            };

            /**
             * Creates a TestGroup1 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestGroup1} TestGroup1
             */
            TestGroup1.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestGroup1)
                    return object;
                var message = new $root.jspb.test.TestGroup1();
                if (object.group != null) {
                    if (typeof object.group !== "object")
                        throw TypeError(".jspb.test.TestGroup1.group: object expected");
                    message.group = $root.jspb.test.TestGroup.RepeatedGroup.fromObject(object.group);
                }
                return message;
            };

            /**
             * Creates a plain object from a TestGroup1 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {jspb.test.TestGroup1} message TestGroup1
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestGroup1.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.group = null;
                if (message.group != null && message.hasOwnProperty("group"))
                    object.group = $root.jspb.test.TestGroup.RepeatedGroup.toObject(message.group, options);
                return object;
            };

            /**
             * Converts this TestGroup1 to JSON.
             * @function toJSON
             * @memberof jspb.test.TestGroup1
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestGroup1.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestGroup1
             * @function getTypeUrl
             * @memberof jspb.test.TestGroup1
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestGroup1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestGroup1";
            };

            return TestGroup1;
        })();

        test.TestReservedNames = (function() {

            /**
             * Properties of a TestReservedNames.
             * @memberof jspb.test
             * @interface ITestReservedNames
             * @property {number|null} [extension] TestReservedNames extension
             * @property {number|null} [".jspb.test.TestReservedNamesExtension.foo"] TestReservedNames .jspb.test.TestReservedNamesExtension.foo
             */

            /**
             * Constructs a new TestReservedNames.
             * @memberof jspb.test
             * @classdesc Represents a TestReservedNames.
             * @implements ITestReservedNames
             * @constructor
             * @param {jspb.test.ITestReservedNames=} [properties] Properties to set
             */
            function TestReservedNames(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestReservedNames extension.
             * @member {number} extension
             * @memberof jspb.test.TestReservedNames
             * @instance
             */
            TestReservedNames.prototype.extension = 0;

            /**
             * TestReservedNames .jspb.test.TestReservedNamesExtension.foo.
             * @member {number} .jspb.test.TestReservedNamesExtension.foo
             * @memberof jspb.test.TestReservedNames
             * @instance
             */
            TestReservedNames.prototype[".jspb.test.TestReservedNamesExtension.foo"] = 0;

            /**
             * Creates a new TestReservedNames instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {jspb.test.ITestReservedNames=} [properties] Properties to set
             * @returns {jspb.test.TestReservedNames} TestReservedNames instance
             */
            TestReservedNames.create = function create(properties) {
                return new TestReservedNames(properties);
            };

            /**
             * Encodes the specified TestReservedNames message. Does not implicitly {@link jspb.test.TestReservedNames.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {jspb.test.ITestReservedNames} message TestReservedNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNames.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestReservedNames.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestReservedNames.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.extension);
                if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && Object.hasOwnProperty.call(message, ".jspb.test.TestReservedNamesExtension.foo"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message[".jspb.test.TestReservedNamesExtension.foo"]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestReservedNames message, length delimited. Does not implicitly {@link jspb.test.TestReservedNames.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {jspb.test.ITestReservedNames} message TestReservedNames message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNames.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestReservedNames message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestReservedNames.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestReservedNames();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.extension = reader.int32();
                            break;
                        }
                    case 10: {
                            message[".jspb.test.TestReservedNamesExtension.foo"] = reader.int32();
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
             * Decodes a TestReservedNames message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestReservedNames.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestReservedNames message.
             * @function verify
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestReservedNames.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.extension != null && message.hasOwnProperty("extension"))
                    if (!$util.isInteger(message.extension))
                        return "extension: integer expected";
                if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && message.hasOwnProperty(".jspb.test.TestReservedNamesExtension.foo"))
                    if (!$util.isInteger(message[".jspb.test.TestReservedNamesExtension.foo"]))
                        return ".jspb.test.TestReservedNamesExtension.foo: integer expected";
                return null;
            };

            /**
             * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNames} TestReservedNames
             */
            TestReservedNames.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestReservedNames)
                    return object;
                var message = new $root.jspb.test.TestReservedNames();
                if (object.extension != null)
                    message.extension = object.extension | 0;
                if (object[".jspb.test.TestReservedNamesExtension.foo"] != null)
                    message[".jspb.test.TestReservedNamesExtension.foo"] = object[".jspb.test.TestReservedNamesExtension.foo"] | 0;
                return message;
            };

            /**
             * Creates a plain object from a TestReservedNames message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {jspb.test.TestReservedNames} message TestReservedNames
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNames.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.extension = 0;
                    object[".jspb.test.TestReservedNamesExtension.foo"] = 0;
                }
                if (message.extension != null && message.hasOwnProperty("extension"))
                    object.extension = message.extension;
                if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && message.hasOwnProperty(".jspb.test.TestReservedNamesExtension.foo"))
                    object[".jspb.test.TestReservedNamesExtension.foo"] = message[".jspb.test.TestReservedNamesExtension.foo"];
                return object;
            };

            /**
             * Converts this TestReservedNames to JSON.
             * @function toJSON
             * @memberof jspb.test.TestReservedNames
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestReservedNames.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestReservedNames
             * @function getTypeUrl
             * @memberof jspb.test.TestReservedNames
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestReservedNames.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestReservedNames";
            };

            return TestReservedNames;
        })();

        test.TestReservedNamesExtension = (function() {

            /**
             * Properties of a TestReservedNamesExtension.
             * @memberof jspb.test
             * @interface ITestReservedNamesExtension
             */

            /**
             * Constructs a new TestReservedNamesExtension.
             * @memberof jspb.test
             * @classdesc Represents a TestReservedNamesExtension.
             * @implements ITestReservedNamesExtension
             * @constructor
             * @param {jspb.test.ITestReservedNamesExtension=} [properties] Properties to set
             */
            function TestReservedNamesExtension(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TestReservedNamesExtension instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {jspb.test.ITestReservedNamesExtension=} [properties] Properties to set
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension instance
             */
            TestReservedNamesExtension.create = function create(properties) {
                return new TestReservedNamesExtension(properties);
            };

            /**
             * Encodes the specified TestReservedNamesExtension message. Does not implicitly {@link jspb.test.TestReservedNamesExtension.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {jspb.test.ITestReservedNamesExtension} message TestReservedNamesExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNamesExtension.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestReservedNamesExtension.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestReservedNamesExtension.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestReservedNamesExtension message, length delimited. Does not implicitly {@link jspb.test.TestReservedNamesExtension.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {jspb.test.ITestReservedNamesExtension} message TestReservedNamesExtension message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestReservedNamesExtension.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestReservedNamesExtension.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestReservedNamesExtension();
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
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestReservedNamesExtension.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestReservedNamesExtension message.
             * @function verify
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestReservedNamesExtension.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TestReservedNamesExtension message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestReservedNamesExtension} TestReservedNamesExtension
             */
            TestReservedNamesExtension.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestReservedNamesExtension)
                    return object;
                return new $root.jspb.test.TestReservedNamesExtension();
            };

            /**
             * Creates a plain object from a TestReservedNamesExtension message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {jspb.test.TestReservedNamesExtension} message TestReservedNamesExtension
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestReservedNamesExtension.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TestReservedNamesExtension to JSON.
             * @function toJSON
             * @memberof jspb.test.TestReservedNamesExtension
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestReservedNamesExtension.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestReservedNamesExtension
             * @function getTypeUrl
             * @memberof jspb.test.TestReservedNamesExtension
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestReservedNamesExtension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestReservedNamesExtension";
            };

            return TestReservedNamesExtension;
        })();

        test.TestMessageWithOneof = (function() {

            /**
             * Properties of a TestMessageWithOneof.
             * @memberof jspb.test
             * @interface ITestMessageWithOneof
             * @property {string|null} [pone] TestMessageWithOneof pone
             * @property {string|null} [pthree] TestMessageWithOneof pthree
             * @property {jspb.test.ITestMessageWithOneof|null} [rone] TestMessageWithOneof rone
             * @property {string|null} [rtwo] TestMessageWithOneof rtwo
             * @property {boolean|null} [normalField] TestMessageWithOneof normalField
             * @property {Array.<string>|null} [repeatedField] TestMessageWithOneof repeatedField
             * @property {number|null} [aone] TestMessageWithOneof aone
             * @property {number|null} [atwo] TestMessageWithOneof atwo
             * @property {number|null} [bone] TestMessageWithOneof bone
             * @property {number|null} [btwo] TestMessageWithOneof btwo
             */

            /**
             * Constructs a new TestMessageWithOneof.
             * @memberof jspb.test
             * @classdesc Represents a TestMessageWithOneof.
             * @implements ITestMessageWithOneof
             * @constructor
             * @param {jspb.test.ITestMessageWithOneof=} [properties] Properties to set
             */
            function TestMessageWithOneof(properties) {
                this.repeatedField = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMessageWithOneof pone.
             * @member {string|null|undefined} pone
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.pone = null;

            /**
             * TestMessageWithOneof pthree.
             * @member {string|null|undefined} pthree
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.pthree = null;

            /**
             * TestMessageWithOneof rone.
             * @member {jspb.test.ITestMessageWithOneof|null|undefined} rone
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.rone = null;

            /**
             * TestMessageWithOneof rtwo.
             * @member {string|null|undefined} rtwo
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.rtwo = null;

            /**
             * TestMessageWithOneof normalField.
             * @member {boolean} normalField
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.normalField = false;

            /**
             * TestMessageWithOneof repeatedField.
             * @member {Array.<string>} repeatedField
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.repeatedField = $util.emptyArray;

            /**
             * TestMessageWithOneof aone.
             * @member {number|null|undefined} aone
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.aone = null;

            /**
             * TestMessageWithOneof atwo.
             * @member {number|null|undefined} atwo
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.atwo = null;

            /**
             * TestMessageWithOneof bone.
             * @member {number|null|undefined} bone
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.bone = null;

            /**
             * TestMessageWithOneof btwo.
             * @member {number|null|undefined} btwo
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            TestMessageWithOneof.prototype.btwo = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TestMessageWithOneof partialOneof.
             * @member {"pone"|"pthree"|undefined} partialOneof
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "partialOneof", {
                get: $util.oneOfGetter($oneOfFields = ["pone", "pthree"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof recursiveOneof.
             * @member {"rone"|"rtwo"|undefined} recursiveOneof
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "recursiveOneof", {
                get: $util.oneOfGetter($oneOfFields = ["rone", "rtwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof defaultOneofA.
             * @member {"aone"|"atwo"|undefined} defaultOneofA
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "defaultOneofA", {
                get: $util.oneOfGetter($oneOfFields = ["aone", "atwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * TestMessageWithOneof defaultOneofB.
             * @member {"bone"|"btwo"|undefined} defaultOneofB
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             */
            Object.defineProperty(TestMessageWithOneof.prototype, "defaultOneofB", {
                get: $util.oneOfGetter($oneOfFields = ["bone", "btwo"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TestMessageWithOneof instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {jspb.test.ITestMessageWithOneof=} [properties] Properties to set
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof instance
             */
            TestMessageWithOneof.create = function create(properties) {
                return new TestMessageWithOneof(properties);
            };

            /**
             * Encodes the specified TestMessageWithOneof message. Does not implicitly {@link jspb.test.TestMessageWithOneof.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {jspb.test.ITestMessageWithOneof} message TestMessageWithOneof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessageWithOneof.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestMessageWithOneof.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestMessageWithOneof.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.pone != null && Object.hasOwnProperty.call(message, "pone"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.pone);
                if (message.pthree != null && Object.hasOwnProperty.call(message, "pthree"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.pthree);
                if (message.rone != null && Object.hasOwnProperty.call(message, "rone"))
                    $root.jspb.test.TestMessageWithOneof.encode(message.rone, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.rtwo != null && Object.hasOwnProperty.call(message, "rtwo"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.rtwo);
                if (message.normalField != null && Object.hasOwnProperty.call(message, "normalField"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.normalField);
                if (message.repeatedField != null && message.repeatedField.length)
                    for (var i = 0; i < message.repeatedField.length; ++i)
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.repeatedField[i]);
                if (message.aone != null && Object.hasOwnProperty.call(message, "aone"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.aone);
                if (message.atwo != null && Object.hasOwnProperty.call(message, "atwo"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.atwo);
                if (message.bone != null && Object.hasOwnProperty.call(message, "bone"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.bone);
                if (message.btwo != null && Object.hasOwnProperty.call(message, "btwo"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.btwo);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestMessageWithOneof message, length delimited. Does not implicitly {@link jspb.test.TestMessageWithOneof.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {jspb.test.ITestMessageWithOneof} message TestMessageWithOneof message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMessageWithOneof.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMessageWithOneof message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessageWithOneof.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestMessageWithOneof();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.pone = reader.string();
                            break;
                        }
                    case 5: {
                            message.pthree = reader.string();
                            break;
                        }
                    case 6: {
                            message.rone = $root.jspb.test.TestMessageWithOneof.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.rtwo = reader.string();
                            break;
                        }
                    case 8: {
                            message.normalField = reader.bool();
                            break;
                        }
                    case 9: {
                            if (!(message.repeatedField && message.repeatedField.length))
                                message.repeatedField = [];
                            message.repeatedField.push(reader.string());
                            break;
                        }
                    case 10: {
                            message.aone = reader.int32();
                            break;
                        }
                    case 11: {
                            message.atwo = reader.int32();
                            break;
                        }
                    case 12: {
                            message.bone = reader.int32();
                            break;
                        }
                    case 13: {
                            message.btwo = reader.int32();
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
             * Decodes a TestMessageWithOneof message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMessageWithOneof.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMessageWithOneof message.
             * @function verify
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMessageWithOneof.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.pone != null && message.hasOwnProperty("pone")) {
                    properties.partialOneof = 1;
                    if (!$util.isString(message.pone))
                        return "pone: string expected";
                }
                if (message.pthree != null && message.hasOwnProperty("pthree")) {
                    if (properties.partialOneof === 1)
                        return "partialOneof: multiple values";
                    properties.partialOneof = 1;
                    if (!$util.isString(message.pthree))
                        return "pthree: string expected";
                }
                if (message.rone != null && message.hasOwnProperty("rone")) {
                    properties.recursiveOneof = 1;
                    {
                        var error = $root.jspb.test.TestMessageWithOneof.verify(message.rone);
                        if (error)
                            return "rone." + error;
                    }
                }
                if (message.rtwo != null && message.hasOwnProperty("rtwo")) {
                    if (properties.recursiveOneof === 1)
                        return "recursiveOneof: multiple values";
                    properties.recursiveOneof = 1;
                    if (!$util.isString(message.rtwo))
                        return "rtwo: string expected";
                }
                if (message.normalField != null && message.hasOwnProperty("normalField"))
                    if (typeof message.normalField !== "boolean")
                        return "normalField: boolean expected";
                if (message.repeatedField != null && message.hasOwnProperty("repeatedField")) {
                    if (!Array.isArray(message.repeatedField))
                        return "repeatedField: array expected";
                    for (var i = 0; i < message.repeatedField.length; ++i)
                        if (!$util.isString(message.repeatedField[i]))
                            return "repeatedField: string[] expected";
                }
                if (message.aone != null && message.hasOwnProperty("aone")) {
                    properties.defaultOneofA = 1;
                    if (!$util.isInteger(message.aone))
                        return "aone: integer expected";
                }
                if (message.atwo != null && message.hasOwnProperty("atwo")) {
                    if (properties.defaultOneofA === 1)
                        return "defaultOneofA: multiple values";
                    properties.defaultOneofA = 1;
                    if (!$util.isInteger(message.atwo))
                        return "atwo: integer expected";
                }
                if (message.bone != null && message.hasOwnProperty("bone")) {
                    properties.defaultOneofB = 1;
                    if (!$util.isInteger(message.bone))
                        return "bone: integer expected";
                }
                if (message.btwo != null && message.hasOwnProperty("btwo")) {
                    if (properties.defaultOneofB === 1)
                        return "defaultOneofB: multiple values";
                    properties.defaultOneofB = 1;
                    if (!$util.isInteger(message.btwo))
                        return "btwo: integer expected";
                }
                return null;
            };

            /**
             * Creates a TestMessageWithOneof message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMessageWithOneof} TestMessageWithOneof
             */
            TestMessageWithOneof.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestMessageWithOneof)
                    return object;
                var message = new $root.jspb.test.TestMessageWithOneof();
                if (object.pone != null)
                    message.pone = String(object.pone);
                if (object.pthree != null)
                    message.pthree = String(object.pthree);
                if (object.rone != null) {
                    if (typeof object.rone !== "object")
                        throw TypeError(".jspb.test.TestMessageWithOneof.rone: object expected");
                    message.rone = $root.jspb.test.TestMessageWithOneof.fromObject(object.rone);
                }
                if (object.rtwo != null)
                    message.rtwo = String(object.rtwo);
                if (object.normalField != null)
                    message.normalField = Boolean(object.normalField);
                if (object.repeatedField) {
                    if (!Array.isArray(object.repeatedField))
                        throw TypeError(".jspb.test.TestMessageWithOneof.repeatedField: array expected");
                    message.repeatedField = [];
                    for (var i = 0; i < object.repeatedField.length; ++i)
                        message.repeatedField[i] = String(object.repeatedField[i]);
                }
                if (object.aone != null)
                    message.aone = object.aone | 0;
                if (object.atwo != null)
                    message.atwo = object.atwo | 0;
                if (object.bone != null)
                    message.bone = object.bone | 0;
                if (object.btwo != null)
                    message.btwo = object.btwo | 0;
                return message;
            };

            /**
             * Creates a plain object from a TestMessageWithOneof message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {jspb.test.TestMessageWithOneof} message TestMessageWithOneof
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMessageWithOneof.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.repeatedField = [];
                if (options.defaults)
                    object.normalField = false;
                if (message.pone != null && message.hasOwnProperty("pone")) {
                    object.pone = message.pone;
                    if (options.oneofs)
                        object.partialOneof = "pone";
                }
                if (message.pthree != null && message.hasOwnProperty("pthree")) {
                    object.pthree = message.pthree;
                    if (options.oneofs)
                        object.partialOneof = "pthree";
                }
                if (message.rone != null && message.hasOwnProperty("rone")) {
                    object.rone = $root.jspb.test.TestMessageWithOneof.toObject(message.rone, options);
                    if (options.oneofs)
                        object.recursiveOneof = "rone";
                }
                if (message.rtwo != null && message.hasOwnProperty("rtwo")) {
                    object.rtwo = message.rtwo;
                    if (options.oneofs)
                        object.recursiveOneof = "rtwo";
                }
                if (message.normalField != null && message.hasOwnProperty("normalField"))
                    object.normalField = message.normalField;
                if (message.repeatedField && message.repeatedField.length) {
                    object.repeatedField = [];
                    for (var j = 0; j < message.repeatedField.length; ++j)
                        object.repeatedField[j] = message.repeatedField[j];
                }
                if (message.aone != null && message.hasOwnProperty("aone")) {
                    object.aone = message.aone;
                    if (options.oneofs)
                        object.defaultOneofA = "aone";
                }
                if (message.atwo != null && message.hasOwnProperty("atwo")) {
                    object.atwo = message.atwo;
                    if (options.oneofs)
                        object.defaultOneofA = "atwo";
                }
                if (message.bone != null && message.hasOwnProperty("bone")) {
                    object.bone = message.bone;
                    if (options.oneofs)
                        object.defaultOneofB = "bone";
                }
                if (message.btwo != null && message.hasOwnProperty("btwo")) {
                    object.btwo = message.btwo;
                    if (options.oneofs)
                        object.defaultOneofB = "btwo";
                }
                return object;
            };

            /**
             * Converts this TestMessageWithOneof to JSON.
             * @function toJSON
             * @memberof jspb.test.TestMessageWithOneof
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMessageWithOneof.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestMessageWithOneof
             * @function getTypeUrl
             * @memberof jspb.test.TestMessageWithOneof
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestMessageWithOneof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestMessageWithOneof";
            };

            return TestMessageWithOneof;
        })();

        test.TestEndsWithBytes = (function() {

            /**
             * Properties of a TestEndsWithBytes.
             * @memberof jspb.test
             * @interface ITestEndsWithBytes
             * @property {number|null} [value] TestEndsWithBytes value
             * @property {Uint8Array|null} [data] TestEndsWithBytes data
             */

            /**
             * Constructs a new TestEndsWithBytes.
             * @memberof jspb.test
             * @classdesc Represents a TestEndsWithBytes.
             * @implements ITestEndsWithBytes
             * @constructor
             * @param {jspb.test.ITestEndsWithBytes=} [properties] Properties to set
             */
            function TestEndsWithBytes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestEndsWithBytes value.
             * @member {number} value
             * @memberof jspb.test.TestEndsWithBytes
             * @instance
             */
            TestEndsWithBytes.prototype.value = 0;

            /**
             * TestEndsWithBytes data.
             * @member {Uint8Array} data
             * @memberof jspb.test.TestEndsWithBytes
             * @instance
             */
            TestEndsWithBytes.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new TestEndsWithBytes instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {jspb.test.ITestEndsWithBytes=} [properties] Properties to set
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes instance
             */
            TestEndsWithBytes.create = function create(properties) {
                return new TestEndsWithBytes(properties);
            };

            /**
             * Encodes the specified TestEndsWithBytes message. Does not implicitly {@link jspb.test.TestEndsWithBytes.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {jspb.test.ITestEndsWithBytes} message TestEndsWithBytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestEndsWithBytes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestEndsWithBytes.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestEndsWithBytes.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestEndsWithBytes message, length delimited. Does not implicitly {@link jspb.test.TestEndsWithBytes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {jspb.test.ITestEndsWithBytes} message TestEndsWithBytes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestEndsWithBytes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestEndsWithBytes message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestEndsWithBytes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestEndsWithBytes();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
                            break;
                        }
                    case 2: {
                            message.data = reader.bytes();
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
             * Decodes a TestEndsWithBytes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestEndsWithBytes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestEndsWithBytes message.
             * @function verify
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestEndsWithBytes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a TestEndsWithBytes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestEndsWithBytes} TestEndsWithBytes
             */
            TestEndsWithBytes.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestEndsWithBytes)
                    return object;
                var message = new $root.jspb.test.TestEndsWithBytes();
                if (object.value != null)
                    message.value = object.value | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a TestEndsWithBytes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {jspb.test.TestEndsWithBytes} message TestEndsWithBytes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestEndsWithBytes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.value = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this TestEndsWithBytes to JSON.
             * @function toJSON
             * @memberof jspb.test.TestEndsWithBytes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestEndsWithBytes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestEndsWithBytes
             * @function getTypeUrl
             * @memberof jspb.test.TestEndsWithBytes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestEndsWithBytes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestEndsWithBytes";
            };

            return TestEndsWithBytes;
        })();

        test.TestMapFieldsNoBinary = (function() {

            /**
             * Properties of a TestMapFieldsNoBinary.
             * @memberof jspb.test
             * @interface ITestMapFieldsNoBinary
             * @property {Object.<string,string>|null} [mapStringString] TestMapFieldsNoBinary mapStringString
             * @property {Object.<string,number>|null} [mapStringInt32] TestMapFieldsNoBinary mapStringInt32
             * @property {Object.<string,number|Long>|null} [mapStringInt64] TestMapFieldsNoBinary mapStringInt64
             * @property {Object.<string,boolean>|null} [mapStringBool] TestMapFieldsNoBinary mapStringBool
             * @property {Object.<string,number>|null} [mapStringDouble] TestMapFieldsNoBinary mapStringDouble
             * @property {Object.<string,jspb.test.MapValueEnumNoBinary>|null} [mapStringEnum] TestMapFieldsNoBinary mapStringEnum
             * @property {Object.<string,jspb.test.IMapValueMessageNoBinary>|null} [mapStringMsg] TestMapFieldsNoBinary mapStringMsg
             * @property {Object.<string,string>|null} [mapInt32String] TestMapFieldsNoBinary mapInt32String
             * @property {Object.<string,string>|null} [mapInt64String] TestMapFieldsNoBinary mapInt64String
             * @property {Object.<string,string>|null} [mapBoolString] TestMapFieldsNoBinary mapBoolString
             * @property {jspb.test.ITestMapFieldsNoBinary|null} [testMapFields] TestMapFieldsNoBinary testMapFields
             * @property {Object.<string,jspb.test.ITestMapFieldsNoBinary>|null} [mapStringTestmapfields] TestMapFieldsNoBinary mapStringTestmapfields
             */

            /**
             * Constructs a new TestMapFieldsNoBinary.
             * @memberof jspb.test
             * @classdesc Represents a TestMapFieldsNoBinary.
             * @implements ITestMapFieldsNoBinary
             * @constructor
             * @param {jspb.test.ITestMapFieldsNoBinary=} [properties] Properties to set
             */
            function TestMapFieldsNoBinary(properties) {
                this.mapStringString = {};
                this.mapStringInt32 = {};
                this.mapStringInt64 = {};
                this.mapStringBool = {};
                this.mapStringDouble = {};
                this.mapStringEnum = {};
                this.mapStringMsg = {};
                this.mapInt32String = {};
                this.mapInt64String = {};
                this.mapBoolString = {};
                this.mapStringTestmapfields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestMapFieldsNoBinary mapStringString.
             * @member {Object.<string,string>} mapStringString
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringString = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringInt32.
             * @member {Object.<string,number>} mapStringInt32
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringInt32 = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringInt64.
             * @member {Object.<string,number|Long>} mapStringInt64
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringInt64 = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringBool.
             * @member {Object.<string,boolean>} mapStringBool
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringBool = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringDouble.
             * @member {Object.<string,number>} mapStringDouble
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringDouble = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringEnum.
             * @member {Object.<string,jspb.test.MapValueEnumNoBinary>} mapStringEnum
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringEnum = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapStringMsg.
             * @member {Object.<string,jspb.test.IMapValueMessageNoBinary>} mapStringMsg
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringMsg = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapInt32String.
             * @member {Object.<string,string>} mapInt32String
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapInt32String = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapInt64String.
             * @member {Object.<string,string>} mapInt64String
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapInt64String = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary mapBoolString.
             * @member {Object.<string,string>} mapBoolString
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapBoolString = $util.emptyObject;

            /**
             * TestMapFieldsNoBinary testMapFields.
             * @member {jspb.test.ITestMapFieldsNoBinary|null|undefined} testMapFields
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.testMapFields = null;

            /**
             * TestMapFieldsNoBinary mapStringTestmapfields.
             * @member {Object.<string,jspb.test.ITestMapFieldsNoBinary>} mapStringTestmapfields
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             */
            TestMapFieldsNoBinary.prototype.mapStringTestmapfields = $util.emptyObject;

            /**
             * Creates a new TestMapFieldsNoBinary instance using the specified properties.
             * @function create
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {jspb.test.ITestMapFieldsNoBinary=} [properties] Properties to set
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary instance
             */
            TestMapFieldsNoBinary.create = function create(properties) {
                return new TestMapFieldsNoBinary(properties);
            };

            /**
             * Encodes the specified TestMapFieldsNoBinary message. Does not implicitly {@link jspb.test.TestMapFieldsNoBinary.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {jspb.test.ITestMapFieldsNoBinary} message TestMapFieldsNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMapFieldsNoBinary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.TestMapFieldsNoBinary.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.TestMapFieldsNoBinary.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.mapStringString != null && Object.hasOwnProperty.call(message, "mapStringString"))
                    for (var keys = Object.keys(message.mapStringString), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapStringString[keys[i]]).ldelim();
                if (message.mapStringInt32 != null && Object.hasOwnProperty.call(message, "mapStringInt32"))
                    for (var keys = Object.keys(message.mapStringInt32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringInt32[keys[i]]).ldelim();
                if (message.mapStringInt64 != null && Object.hasOwnProperty.call(message, "mapStringInt64"))
                    for (var keys = Object.keys(message.mapStringInt64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.mapStringInt64[keys[i]]).ldelim();
                if (message.mapStringBool != null && Object.hasOwnProperty.call(message, "mapStringBool"))
                    for (var keys = Object.keys(message.mapStringBool), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.mapStringBool[keys[i]]).ldelim();
                if (message.mapStringDouble != null && Object.hasOwnProperty.call(message, "mapStringDouble"))
                    for (var keys = Object.keys(message.mapStringDouble), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.mapStringDouble[keys[i]]).ldelim();
                if (message.mapStringEnum != null && Object.hasOwnProperty.call(message, "mapStringEnum"))
                    for (var keys = Object.keys(message.mapStringEnum), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringEnum[keys[i]]).ldelim();
                if (message.mapStringMsg != null && Object.hasOwnProperty.call(message, "mapStringMsg"))
                    for (var keys = Object.keys(message.mapStringMsg), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.jspb.test.MapValueMessageNoBinary.encode(message.mapStringMsg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.mapInt32String != null && Object.hasOwnProperty.call(message, "mapInt32String"))
                    for (var keys = Object.keys(message.mapInt32String), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapInt32String[keys[i]]).ldelim();
                if (message.mapInt64String != null && Object.hasOwnProperty.call(message, "mapInt64String"))
                    for (var keys = Object.keys(message.mapInt64String), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapInt64String[keys[i]]).ldelim();
                if (message.mapBoolString != null && Object.hasOwnProperty.call(message, "mapBoolString"))
                    for (var keys = Object.keys(message.mapBoolString), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapBoolString[keys[i]]).ldelim();
                if (message.testMapFields != null && Object.hasOwnProperty.call(message, "testMapFields"))
                    $root.jspb.test.TestMapFieldsNoBinary.encode(message.testMapFields, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.mapStringTestmapfields != null && Object.hasOwnProperty.call(message, "mapStringTestmapfields"))
                    for (var keys = Object.keys(message.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.jspb.test.TestMapFieldsNoBinary.encode(message.mapStringTestmapfields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified TestMapFieldsNoBinary message, length delimited. Does not implicitly {@link jspb.test.TestMapFieldsNoBinary.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {jspb.test.ITestMapFieldsNoBinary} message TestMapFieldsNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestMapFieldsNoBinary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMapFieldsNoBinary.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.TestMapFieldsNoBinary(), key, value;
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.mapStringString === $util.emptyObject)
                                message.mapStringString = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringString[key] = value;
                            break;
                        }
                    case 2: {
                            if (message.mapStringInt32 === $util.emptyObject)
                                message.mapStringInt32 = {};
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
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringInt32[key] = value;
                            break;
                        }
                    case 3: {
                            if (message.mapStringInt64 === $util.emptyObject)
                                message.mapStringInt64 = {};
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
                            message.mapStringInt64[key] = value;
                            break;
                        }
                    case 4: {
                            if (message.mapStringBool === $util.emptyObject)
                                message.mapStringBool = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = false;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringBool[key] = value;
                            break;
                        }
                    case 5: {
                            if (message.mapStringDouble === $util.emptyObject)
                                message.mapStringDouble = {};
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
                                    value = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringDouble[key] = value;
                            break;
                        }
                    case 6: {
                            if (message.mapStringEnum === $util.emptyObject)
                                message.mapStringEnum = {};
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
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringEnum[key] = value;
                            break;
                        }
                    case 7: {
                            if (message.mapStringMsg === $util.emptyObject)
                                message.mapStringMsg = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.jspb.test.MapValueMessageNoBinary.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringMsg[key] = value;
                            break;
                        }
                    case 8: {
                            if (message.mapInt32String === $util.emptyObject)
                                message.mapInt32String = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32String[key] = value;
                            break;
                        }
                    case 9: {
                            if (message.mapInt64String === $util.emptyObject)
                                message.mapInt64String = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt64String[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 10: {
                            if (message.mapBoolString === $util.emptyObject)
                                message.mapBoolString = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = false;
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.bool();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapBoolString[key] = value;
                            break;
                        }
                    case 11: {
                            message.testMapFields = $root.jspb.test.TestMapFieldsNoBinary.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            if (message.mapStringTestmapfields === $util.emptyObject)
                                message.mapStringTestmapfields = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.jspb.test.TestMapFieldsNoBinary.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringTestmapfields[key] = value;
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
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestMapFieldsNoBinary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestMapFieldsNoBinary message.
             * @function verify
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestMapFieldsNoBinary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mapStringString != null && message.hasOwnProperty("mapStringString")) {
                    if (!$util.isObject(message.mapStringString))
                        return "mapStringString: object expected";
                    var key = Object.keys(message.mapStringString);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.mapStringString[key[i]]))
                            return "mapStringString: string{k:string} expected";
                }
                if (message.mapStringInt32 != null && message.hasOwnProperty("mapStringInt32")) {
                    if (!$util.isObject(message.mapStringInt32))
                        return "mapStringInt32: object expected";
                    var key = Object.keys(message.mapStringInt32);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.mapStringInt32[key[i]]))
                            return "mapStringInt32: integer{k:string} expected";
                }
                if (message.mapStringInt64 != null && message.hasOwnProperty("mapStringInt64")) {
                    if (!$util.isObject(message.mapStringInt64))
                        return "mapStringInt64: object expected";
                    var key = Object.keys(message.mapStringInt64);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.mapStringInt64[key[i]]) && !(message.mapStringInt64[key[i]] && $util.isInteger(message.mapStringInt64[key[i]].low) && $util.isInteger(message.mapStringInt64[key[i]].high)))
                            return "mapStringInt64: integer|Long{k:string} expected";
                }
                if (message.mapStringBool != null && message.hasOwnProperty("mapStringBool")) {
                    if (!$util.isObject(message.mapStringBool))
                        return "mapStringBool: object expected";
                    var key = Object.keys(message.mapStringBool);
                    for (var i = 0; i < key.length; ++i)
                        if (typeof message.mapStringBool[key[i]] !== "boolean")
                            return "mapStringBool: boolean{k:string} expected";
                }
                if (message.mapStringDouble != null && message.hasOwnProperty("mapStringDouble")) {
                    if (!$util.isObject(message.mapStringDouble))
                        return "mapStringDouble: object expected";
                    var key = Object.keys(message.mapStringDouble);
                    for (var i = 0; i < key.length; ++i)
                        if (typeof message.mapStringDouble[key[i]] !== "number")
                            return "mapStringDouble: number{k:string} expected";
                }
                if (message.mapStringEnum != null && message.hasOwnProperty("mapStringEnum")) {
                    if (!$util.isObject(message.mapStringEnum))
                        return "mapStringEnum: object expected";
                    var key = Object.keys(message.mapStringEnum);
                    for (var i = 0; i < key.length; ++i)
                        switch (message.mapStringEnum[key[i]]) {
                        default:
                            return "mapStringEnum: enum value{k:string} expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                }
                if (message.mapStringMsg != null && message.hasOwnProperty("mapStringMsg")) {
                    if (!$util.isObject(message.mapStringMsg))
                        return "mapStringMsg: object expected";
                    var key = Object.keys(message.mapStringMsg);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.jspb.test.MapValueMessageNoBinary.verify(message.mapStringMsg[key[i]]);
                        if (error)
                            return "mapStringMsg." + error;
                    }
                }
                if (message.mapInt32String != null && message.hasOwnProperty("mapInt32String")) {
                    if (!$util.isObject(message.mapInt32String))
                        return "mapInt32String: object expected";
                    var key = Object.keys(message.mapInt32String);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32String: integer key{k:int32} expected";
                        if (!$util.isString(message.mapInt32String[key[i]]))
                            return "mapInt32String: string{k:int32} expected";
                    }
                }
                if (message.mapInt64String != null && message.hasOwnProperty("mapInt64String")) {
                    if (!$util.isObject(message.mapInt64String))
                        return "mapInt64String: object expected";
                    var key = Object.keys(message.mapInt64String);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapInt64String: integer|Long key{k:int64} expected";
                        if (!$util.isString(message.mapInt64String[key[i]]))
                            return "mapInt64String: string{k:int64} expected";
                    }
                }
                if (message.mapBoolString != null && message.hasOwnProperty("mapBoolString")) {
                    if (!$util.isObject(message.mapBoolString))
                        return "mapBoolString: object expected";
                    var key = Object.keys(message.mapBoolString);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key2Re.test(key[i]))
                            return "mapBoolString: boolean key{k:bool} expected";
                        if (!$util.isString(message.mapBoolString[key[i]]))
                            return "mapBoolString: string{k:bool} expected";
                    }
                }
                if (message.testMapFields != null && message.hasOwnProperty("testMapFields")) {
                    var error = $root.jspb.test.TestMapFieldsNoBinary.verify(message.testMapFields);
                    if (error)
                        return "testMapFields." + error;
                }
                if (message.mapStringTestmapfields != null && message.hasOwnProperty("mapStringTestmapfields")) {
                    if (!$util.isObject(message.mapStringTestmapfields))
                        return "mapStringTestmapfields: object expected";
                    var key = Object.keys(message.mapStringTestmapfields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.jspb.test.TestMapFieldsNoBinary.verify(message.mapStringTestmapfields[key[i]]);
                        if (error)
                            return "mapStringTestmapfields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TestMapFieldsNoBinary message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.TestMapFieldsNoBinary} TestMapFieldsNoBinary
             */
            TestMapFieldsNoBinary.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.TestMapFieldsNoBinary)
                    return object;
                var message = new $root.jspb.test.TestMapFieldsNoBinary();
                if (object.mapStringString) {
                    if (typeof object.mapStringString !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringString: object expected");
                    message.mapStringString = {};
                    for (var keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i)
                        message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
                }
                if (object.mapStringInt32) {
                    if (typeof object.mapStringInt32 !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringInt32: object expected");
                    message.mapStringInt32 = {};
                    for (var keys = Object.keys(object.mapStringInt32), i = 0; i < keys.length; ++i)
                        message.mapStringInt32[keys[i]] = object.mapStringInt32[keys[i]] | 0;
                }
                if (object.mapStringInt64) {
                    if (typeof object.mapStringInt64 !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringInt64: object expected");
                    message.mapStringInt64 = {};
                    for (var keys = Object.keys(object.mapStringInt64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapStringInt64[keys[i]] = $util.Long.fromValue(object.mapStringInt64[keys[i]])).unsigned = false;
                        else if (typeof object.mapStringInt64[keys[i]] === "string")
                            message.mapStringInt64[keys[i]] = parseInt(object.mapStringInt64[keys[i]], 10);
                        else if (typeof object.mapStringInt64[keys[i]] === "number")
                            message.mapStringInt64[keys[i]] = object.mapStringInt64[keys[i]];
                        else if (typeof object.mapStringInt64[keys[i]] === "object")
                            message.mapStringInt64[keys[i]] = new $util.LongBits(object.mapStringInt64[keys[i]].low >>> 0, object.mapStringInt64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapStringBool) {
                    if (typeof object.mapStringBool !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringBool: object expected");
                    message.mapStringBool = {};
                    for (var keys = Object.keys(object.mapStringBool), i = 0; i < keys.length; ++i)
                        message.mapStringBool[keys[i]] = Boolean(object.mapStringBool[keys[i]]);
                }
                if (object.mapStringDouble) {
                    if (typeof object.mapStringDouble !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringDouble: object expected");
                    message.mapStringDouble = {};
                    for (var keys = Object.keys(object.mapStringDouble), i = 0; i < keys.length; ++i)
                        message.mapStringDouble[keys[i]] = Number(object.mapStringDouble[keys[i]]);
                }
                if (object.mapStringEnum) {
                    if (typeof object.mapStringEnum !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringEnum: object expected");
                    message.mapStringEnum = {};
                    for (var keys = Object.keys(object.mapStringEnum), i = 0; i < keys.length; ++i)
                        switch (object.mapStringEnum[keys[i]]) {
                        default:
                            if (typeof object.mapStringEnum[keys[i]] === "number") {
                                message.mapStringEnum[keys[i]] = object.mapStringEnum[keys[i]];
                                break;
                            }
                            break;
                        case "MAP_VALUE_FOO_NOBINARY":
                        case 0:
                            message.mapStringEnum[keys[i]] = 0;
                            break;
                        case "MAP_VALUE_BAR_NOBINARY":
                        case 1:
                            message.mapStringEnum[keys[i]] = 1;
                            break;
                        case "MAP_VALUE_BAZ_NOBINARY":
                        case 2:
                            message.mapStringEnum[keys[i]] = 2;
                            break;
                        }
                }
                if (object.mapStringMsg) {
                    if (typeof object.mapStringMsg !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringMsg: object expected");
                    message.mapStringMsg = {};
                    for (var keys = Object.keys(object.mapStringMsg), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringMsg[keys[i]] !== "object")
                            throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringMsg: object expected");
                        message.mapStringMsg[keys[i]] = $root.jspb.test.MapValueMessageNoBinary.fromObject(object.mapStringMsg[keys[i]]);
                    }
                }
                if (object.mapInt32String) {
                    if (typeof object.mapInt32String !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapInt32String: object expected");
                    message.mapInt32String = {};
                    for (var keys = Object.keys(object.mapInt32String), i = 0; i < keys.length; ++i)
                        message.mapInt32String[keys[i]] = String(object.mapInt32String[keys[i]]);
                }
                if (object.mapInt64String) {
                    if (typeof object.mapInt64String !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapInt64String: object expected");
                    message.mapInt64String = {};
                    for (var keys = Object.keys(object.mapInt64String), i = 0; i < keys.length; ++i)
                        message.mapInt64String[keys[i]] = String(object.mapInt64String[keys[i]]);
                }
                if (object.mapBoolString) {
                    if (typeof object.mapBoolString !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapBoolString: object expected");
                    message.mapBoolString = {};
                    for (var keys = Object.keys(object.mapBoolString), i = 0; i < keys.length; ++i)
                        message.mapBoolString[keys[i]] = String(object.mapBoolString[keys[i]]);
                }
                if (object.testMapFields != null) {
                    if (typeof object.testMapFields !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.testMapFields: object expected");
                    message.testMapFields = $root.jspb.test.TestMapFieldsNoBinary.fromObject(object.testMapFields);
                }
                if (object.mapStringTestmapfields) {
                    if (typeof object.mapStringTestmapfields !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
                    message.mapStringTestmapfields = {};
                    for (var keys = Object.keys(object.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringTestmapfields[keys[i]] !== "object")
                            throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
                        message.mapStringTestmapfields[keys[i]] = $root.jspb.test.TestMapFieldsNoBinary.fromObject(object.mapStringTestmapfields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TestMapFieldsNoBinary message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {jspb.test.TestMapFieldsNoBinary} message TestMapFieldsNoBinary
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestMapFieldsNoBinary.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults) {
                    object.mapStringString = {};
                    object.mapStringInt32 = {};
                    object.mapStringInt64 = {};
                    object.mapStringBool = {};
                    object.mapStringDouble = {};
                    object.mapStringEnum = {};
                    object.mapStringMsg = {};
                    object.mapInt32String = {};
                    object.mapInt64String = {};
                    object.mapBoolString = {};
                    object.mapStringTestmapfields = {};
                }
                if (options.defaults)
                    object.testMapFields = null;
                var keys2;
                if (message.mapStringString && (keys2 = Object.keys(message.mapStringString)).length) {
                    object.mapStringString = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringString[keys2[j]] = message.mapStringString[keys2[j]];
                }
                if (message.mapStringInt32 && (keys2 = Object.keys(message.mapStringInt32)).length) {
                    object.mapStringInt32 = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringInt32[keys2[j]] = message.mapStringInt32[keys2[j]];
                }
                if (message.mapStringInt64 && (keys2 = Object.keys(message.mapStringInt64)).length) {
                    object.mapStringInt64 = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.mapStringInt64[keys2[j]] === "number")
                            object.mapStringInt64[keys2[j]] = options.longs === String ? String(message.mapStringInt64[keys2[j]]) : message.mapStringInt64[keys2[j]];
                        else
                            object.mapStringInt64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapStringInt64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapStringInt64[keys2[j]].low >>> 0, message.mapStringInt64[keys2[j]].high >>> 0).toNumber() : message.mapStringInt64[keys2[j]];
                }
                if (message.mapStringBool && (keys2 = Object.keys(message.mapStringBool)).length) {
                    object.mapStringBool = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringBool[keys2[j]] = message.mapStringBool[keys2[j]];
                }
                if (message.mapStringDouble && (keys2 = Object.keys(message.mapStringDouble)).length) {
                    object.mapStringDouble = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringDouble[keys2[j]] = options.json && !isFinite(message.mapStringDouble[keys2[j]]) ? String(message.mapStringDouble[keys2[j]]) : message.mapStringDouble[keys2[j]];
                }
                if (message.mapStringEnum && (keys2 = Object.keys(message.mapStringEnum)).length) {
                    object.mapStringEnum = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringEnum[keys2[j]] = options.enums === String ? $root.jspb.test.MapValueEnumNoBinary[message.mapStringEnum[keys2[j]]] === undefined ? message.mapStringEnum[keys2[j]] : $root.jspb.test.MapValueEnumNoBinary[message.mapStringEnum[keys2[j]]] : message.mapStringEnum[keys2[j]];
                }
                if (message.mapStringMsg && (keys2 = Object.keys(message.mapStringMsg)).length) {
                    object.mapStringMsg = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringMsg[keys2[j]] = $root.jspb.test.MapValueMessageNoBinary.toObject(message.mapStringMsg[keys2[j]], options);
                }
                if (message.mapInt32String && (keys2 = Object.keys(message.mapInt32String)).length) {
                    object.mapInt32String = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapInt32String[keys2[j]] = message.mapInt32String[keys2[j]];
                }
                if (message.mapInt64String && (keys2 = Object.keys(message.mapInt64String)).length) {
                    object.mapInt64String = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapInt64String[keys2[j]] = message.mapInt64String[keys2[j]];
                }
                if (message.mapBoolString && (keys2 = Object.keys(message.mapBoolString)).length) {
                    object.mapBoolString = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapBoolString[keys2[j]] = message.mapBoolString[keys2[j]];
                }
                if (message.testMapFields != null && message.hasOwnProperty("testMapFields"))
                    object.testMapFields = $root.jspb.test.TestMapFieldsNoBinary.toObject(message.testMapFields, options);
                if (message.mapStringTestmapfields && (keys2 = Object.keys(message.mapStringTestmapfields)).length) {
                    object.mapStringTestmapfields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mapStringTestmapfields[keys2[j]] = $root.jspb.test.TestMapFieldsNoBinary.toObject(message.mapStringTestmapfields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this TestMapFieldsNoBinary to JSON.
             * @function toJSON
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestMapFieldsNoBinary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestMapFieldsNoBinary
             * @function getTypeUrl
             * @memberof jspb.test.TestMapFieldsNoBinary
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestMapFieldsNoBinary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.TestMapFieldsNoBinary";
            };

            return TestMapFieldsNoBinary;
        })();

        /**
         * MapValueEnumNoBinary enum.
         * @name jspb.test.MapValueEnumNoBinary
         * @enum {number}
         * @property {number} MAP_VALUE_FOO_NOBINARY=0 MAP_VALUE_FOO_NOBINARY value
         * @property {number} MAP_VALUE_BAR_NOBINARY=1 MAP_VALUE_BAR_NOBINARY value
         * @property {number} MAP_VALUE_BAZ_NOBINARY=2 MAP_VALUE_BAZ_NOBINARY value
         */
        test.MapValueEnumNoBinary = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MAP_VALUE_FOO_NOBINARY"] = 0;
            values[valuesById[1] = "MAP_VALUE_BAR_NOBINARY"] = 1;
            values[valuesById[2] = "MAP_VALUE_BAZ_NOBINARY"] = 2;
            return values;
        })();

        test.MapValueMessageNoBinary = (function() {

            /**
             * Properties of a MapValueMessageNoBinary.
             * @memberof jspb.test
             * @interface IMapValueMessageNoBinary
             * @property {number|null} [foo] MapValueMessageNoBinary foo
             */

            /**
             * Constructs a new MapValueMessageNoBinary.
             * @memberof jspb.test
             * @classdesc Represents a MapValueMessageNoBinary.
             * @implements IMapValueMessageNoBinary
             * @constructor
             * @param {jspb.test.IMapValueMessageNoBinary=} [properties] Properties to set
             */
            function MapValueMessageNoBinary(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MapValueMessageNoBinary foo.
             * @member {number} foo
             * @memberof jspb.test.MapValueMessageNoBinary
             * @instance
             */
            MapValueMessageNoBinary.prototype.foo = 0;

            /**
             * Creates a new MapValueMessageNoBinary instance using the specified properties.
             * @function create
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {jspb.test.IMapValueMessageNoBinary=} [properties] Properties to set
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary instance
             */
            MapValueMessageNoBinary.create = function create(properties) {
                return new MapValueMessageNoBinary(properties);
            };

            /**
             * Encodes the specified MapValueMessageNoBinary message. Does not implicitly {@link jspb.test.MapValueMessageNoBinary.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {jspb.test.IMapValueMessageNoBinary} message MapValueMessageNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapValueMessageNoBinary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.MapValueMessageNoBinary.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.MapValueMessageNoBinary.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.foo != null && Object.hasOwnProperty.call(message, "foo"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.foo);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified MapValueMessageNoBinary message, length delimited. Does not implicitly {@link jspb.test.MapValueMessageNoBinary.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {jspb.test.IMapValueMessageNoBinary} message MapValueMessageNoBinary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MapValueMessageNoBinary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapValueMessageNoBinary.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.MapValueMessageNoBinary();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.foo = reader.int32();
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
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MapValueMessageNoBinary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MapValueMessageNoBinary message.
             * @function verify
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MapValueMessageNoBinary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.foo != null && message.hasOwnProperty("foo"))
                    if (!$util.isInteger(message.foo))
                        return "foo: integer expected";
                return null;
            };

            /**
             * Creates a MapValueMessageNoBinary message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.MapValueMessageNoBinary} MapValueMessageNoBinary
             */
            MapValueMessageNoBinary.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.MapValueMessageNoBinary)
                    return object;
                var message = new $root.jspb.test.MapValueMessageNoBinary();
                if (object.foo != null)
                    message.foo = object.foo | 0;
                return message;
            };

            /**
             * Creates a plain object from a MapValueMessageNoBinary message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {jspb.test.MapValueMessageNoBinary} message MapValueMessageNoBinary
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MapValueMessageNoBinary.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.foo = 0;
                if (message.foo != null && message.hasOwnProperty("foo"))
                    object.foo = message.foo;
                return object;
            };

            /**
             * Converts this MapValueMessageNoBinary to JSON.
             * @function toJSON
             * @memberof jspb.test.MapValueMessageNoBinary
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MapValueMessageNoBinary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MapValueMessageNoBinary
             * @function getTypeUrl
             * @memberof jspb.test.MapValueMessageNoBinary
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MapValueMessageNoBinary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.MapValueMessageNoBinary";
            };

            return MapValueMessageNoBinary;
        })();

        test.Deeply = (function() {

            /**
             * Properties of a Deeply.
             * @memberof jspb.test
             * @interface IDeeply
             */

            /**
             * Constructs a new Deeply.
             * @memberof jspb.test
             * @classdesc Represents a Deeply.
             * @implements IDeeply
             * @constructor
             * @param {jspb.test.IDeeply=} [properties] Properties to set
             */
            function Deeply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Deeply instance using the specified properties.
             * @function create
             * @memberof jspb.test.Deeply
             * @static
             * @param {jspb.test.IDeeply=} [properties] Properties to set
             * @returns {jspb.test.Deeply} Deeply instance
             */
            Deeply.create = function create(properties) {
                return new Deeply(properties);
            };

            /**
             * Encodes the specified Deeply message. Does not implicitly {@link jspb.test.Deeply.verify|verify} messages.
             * @function encode
             * @memberof jspb.test.Deeply
             * @static
             * @param {jspb.test.IDeeply} message Deeply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deeply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.jspb.test.Deeply.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.jspb.test.Deeply.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified Deeply message, length delimited. Does not implicitly {@link jspb.test.Deeply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof jspb.test.Deeply
             * @static
             * @param {jspb.test.IDeeply} message Deeply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deeply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Deeply message from the specified reader or buffer.
             * @function decode
             * @memberof jspb.test.Deeply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {jspb.test.Deeply} Deeply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deeply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Deeply();
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
             * Decodes a Deeply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof jspb.test.Deeply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {jspb.test.Deeply} Deeply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deeply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Deeply message.
             * @function verify
             * @memberof jspb.test.Deeply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Deeply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Deeply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof jspb.test.Deeply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {jspb.test.Deeply} Deeply
             */
            Deeply.fromObject = function fromObject(object) {
                if (object instanceof $root.jspb.test.Deeply)
                    return object;
                return new $root.jspb.test.Deeply();
            };

            /**
             * Creates a plain object from a Deeply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof jspb.test.Deeply
             * @static
             * @param {jspb.test.Deeply} message Deeply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deeply.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Deeply to JSON.
             * @function toJSON
             * @memberof jspb.test.Deeply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Deeply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Deeply
             * @function getTypeUrl
             * @memberof jspb.test.Deeply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Deeply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/jspb.test.Deeply";
            };

            Deeply.Nested = (function() {

                /**
                 * Properties of a Nested.
                 * @memberof jspb.test.Deeply
                 * @interface INested
                 */

                /**
                 * Constructs a new Nested.
                 * @memberof jspb.test.Deeply
                 * @classdesc Represents a Nested.
                 * @implements INested
                 * @constructor
                 * @param {jspb.test.Deeply.INested=} [properties] Properties to set
                 */
                function Nested(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @function create
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {jspb.test.Deeply.INested=} [properties] Properties to set
                 * @returns {jspb.test.Deeply.Nested} Nested instance
                 */
                Nested.create = function create(properties) {
                    return new Nested(properties);
                };

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.Deeply.Nested.verify|verify} messages.
                 * @function encode
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {jspb.test.Deeply.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.jspb.test.Deeply.Nested.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.jspb.test.Deeply.Nested.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.Deeply.Nested.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {jspb.test.Deeply.INested} message Nested message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Nested.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @function decode
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {jspb.test.Deeply.Nested} Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Nested.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Deeply.Nested();
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
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {jspb.test.Deeply.Nested} Nested
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
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Nested.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {jspb.test.Deeply.Nested} Nested
                 */
                Nested.fromObject = function fromObject(object) {
                    if (object instanceof $root.jspb.test.Deeply.Nested)
                        return object;
                    return new $root.jspb.test.Deeply.Nested();
                };

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {jspb.test.Deeply.Nested} message Nested
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Nested.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Nested to JSON.
                 * @function toJSON
                 * @memberof jspb.test.Deeply.Nested
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Nested.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Nested
                 * @function getTypeUrl
                 * @memberof jspb.test.Deeply.Nested
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Nested.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/jspb.test.Deeply.Nested";
                };

                Nested.Message = (function() {

                    /**
                     * Properties of a Message.
                     * @memberof jspb.test.Deeply.Nested
                     * @interface IMessage
                     * @property {number|null} [count] Message count
                     */

                    /**
                     * Constructs a new Message.
                     * @memberof jspb.test.Deeply.Nested
                     * @classdesc Represents a Message.
                     * @implements IMessage
                     * @constructor
                     * @param {jspb.test.Deeply.Nested.IMessage=} [properties] Properties to set
                     */
                    function Message(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Message count.
                     * @member {number} count
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @instance
                     */
                    Message.prototype.count = 0;

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @function create
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {jspb.test.Deeply.Nested.IMessage=} [properties] Properties to set
                     * @returns {jspb.test.Deeply.Nested.Message} Message instance
                     */
                    Message.create = function create(properties) {
                        return new Message(properties);
                    };

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link jspb.test.Deeply.Nested.Message.verify|verify} messages.
                     * @function encode
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {jspb.test.Deeply.Nested.IMessage} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        var fullyUnknown = [];
                        if (message.$unknownFields && $root.jspb.test.Deeply.Nested.Message.decode)
                            for (var i = 0; i < message.$unknownFields.length; ++i)
                                try {
                                    var known = $root.jspb.test.Deeply.Nested.Message.decode(message.$unknownFields[i]);
                                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                    message = Object.assign(known, message);
                                } catch (_) {
                                }
                        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
                        for (var i = 0; i < fullyUnknown.length; ++i)
                            writer._unknownField(fullyUnknown[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link jspb.test.Deeply.Nested.Message.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {jspb.test.Deeply.Nested.IMessage} message Message message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @function decode
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Message.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.jspb.test.Deeply.Nested.Message();
                        while (reader.pos < end) {
                            var unknownStartPos = reader.pos;
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.count = reader.int32();
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
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {jspb.test.Deeply.Nested.Message} Message
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
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Message.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.count != null && message.hasOwnProperty("count"))
                            if (!$util.isInteger(message.count))
                                return "count: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {jspb.test.Deeply.Nested.Message} Message
                     */
                    Message.fromObject = function fromObject(object) {
                        if (object instanceof $root.jspb.test.Deeply.Nested.Message)
                            return object;
                        var message = new $root.jspb.test.Deeply.Nested.Message();
                        if (object.count != null)
                            message.count = object.count | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {jspb.test.Deeply.Nested.Message} message Message
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Message.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.count = 0;
                        if (message.count != null && message.hasOwnProperty("count"))
                            object.count = message.count;
                        return object;
                    };

                    /**
                     * Converts this Message to JSON.
                     * @function toJSON
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Message.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Message
                     * @function getTypeUrl
                     * @memberof jspb.test.Deeply.Nested.Message
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/jspb.test.Deeply.Nested.Message";
                    };

                    return Message;
                })();

                return Nested;
            })();

            return Deeply;
        })();

        return test;
    })();

    return jspb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.FileDescriptorSet.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.FileDescriptorSet.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
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
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.FileDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.FileDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (var i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message["package"] = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        }
                    case 10: {
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        }
                    case 11: {
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.syntax = reader.string();
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
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (var i = 0; i < message.messageType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (var j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (var j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (var j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.DescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.DescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (var i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (var i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (var i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (var i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (var i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
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
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (var i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (var j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (var j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (var j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (var j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (var j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.google.protobuf.DescriptorProto.ExtensionRange.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.google.protobuf.DescriptorProto.ExtensionRange.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
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
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.google.protobuf.DescriptorProto.ReservedRange.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.google.protobuf.DescriptorProto.ReservedRange.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
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
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.FieldDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.FieldDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.number = reader.int32();
                            break;
                        }
                    case 4: {
                            message.label = reader.int32();
                            break;
                        }
                    case 5: {
                            message.type = reader.int32();
                            break;
                        }
                    case 6: {
                            message.typeName = reader.string();
                            break;
                        }
                    case 2: {
                            message.extendee = reader.string();
                            break;
                        }
                    case 7: {
                            message.defaultValue = reader.string();
                            break;
                        }
                    case 9: {
                            message.oneofIndex = reader.int32();
                            break;
                        }
                    case 10: {
                            message.jsonName = reader.string();
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
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
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                default:
                    if (typeof object.label === "number") {
                        message.label = object.label;
                        break;
                    }
                    break;
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.OneofDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.OneofDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
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
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.EnumDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.EnumDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
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
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.EnumValueDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.EnumValueDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
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
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.ServiceDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.ServiceDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
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
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.MethodDescriptorProto.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.MethodDescriptorProto.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.inputType = reader.string();
                            break;
                        }
                    case 3: {
                            message.outputType = reader.string();
                            break;
                        }
                    case 4: {
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.clientStreaming = reader.bool();
                            break;
                        }
                    case 6: {
                            message.serverStreaming = reader.bool();
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
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.FileOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.FileOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.javaPackage = reader.string();
                            break;
                        }
                    case 8: {
                            message.javaOuterClassname = reader.string();
                            break;
                        }
                    case 10: {
                            message.javaMultipleFiles = reader.bool();
                            break;
                        }
                    case 20: {
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        }
                    case 27: {
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        }
                    case 9: {
                            message.optimizeFor = reader.int32();
                            break;
                        }
                    case 11: {
                            message.goPackage = reader.string();
                            break;
                        }
                    case 16: {
                            message.ccGenericServices = reader.bool();
                            break;
                        }
                    case 17: {
                            message.javaGenericServices = reader.bool();
                            break;
                        }
                    case 18: {
                            message.pyGenericServices = reader.bool();
                            break;
                        }
                    case 23: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 31: {
                            message.ccEnableArenas = reader.bool();
                            break;
                        }
                    case 36: {
                            message.objcClassPrefix = reader.string();
                            break;
                        }
                    case 37: {
                            message.csharpNamespace = reader.string();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                default:
                    if (typeof object.optimizeFor === "number") {
                        message.optimizeFor = object.optimizeFor;
                        break;
                    }
                    break;
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.MessageOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.MessageOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageSetWireFormat = reader.bool();
                            break;
                        }
                    case 2: {
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 7: {
                            message.mapEntry = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.FieldOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.FieldOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ctype = reader.int32();
                            break;
                        }
                    case 2: {
                            message.packed = reader.bool();
                            break;
                        }
                    case 6: {
                            message.jstype = reader.int32();
                            break;
                        }
                    case 5: {
                            message.lazy = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 10: {
                            message.weak = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                default:
                    if (typeof object.ctype === "number") {
                        message.ctype = object.ctype;
                        break;
                    }
                    break;
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                default:
                    if (typeof object.jstype === "number") {
                        message.jstype = object.jstype;
                        break;
                    }
                    break;
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.OneofOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.OneofOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofOptions
             * @function getTypeUrl
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofOptions";
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             * @property {string|null} [".jspb.test.IsExtension.simpleOption"] EnumOptions .jspb.test.IsExtension.simpleOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumOptions .jspb.test.IsExtension.simpleOption.
             * @member {string} .jspb.test.IsExtension.simpleOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".jspb.test.IsExtension.simpleOption"] = "";

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.EnumOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.EnumOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".jspb.test.IsExtension.simpleOption"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IsExtension.simpleOption"))
                    writer.uint32(/* id 42113038, wireType 2 =*/336904306).string(message[".jspb.test.IsExtension.simpleOption"]);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.allowAlias = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 42113038: {
                            message[".jspb.test.IsExtension.simpleOption"] = reader.string();
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
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".jspb.test.IsExtension.simpleOption"] != null && message.hasOwnProperty(".jspb.test.IsExtension.simpleOption"))
                    if (!$util.isString(message[".jspb.test.IsExtension.simpleOption"]))
                        return ".jspb.test.IsExtension.simpleOption: string expected";
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".jspb.test.IsExtension.simpleOption"] != null)
                    message[".jspb.test.IsExtension.simpleOption"] = String(object[".jspb.test.IsExtension.simpleOption"]);
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                    object[".jspb.test.IsExtension.simpleOption"] = "";
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".jspb.test.IsExtension.simpleOption"] != null && message.hasOwnProperty(".jspb.test.IsExtension.simpleOption"))
                    object[".jspb.test.IsExtension.simpleOption"] = message[".jspb.test.IsExtension.simpleOption"];
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.EnumValueOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.EnumValueOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.ServiceOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.ServiceOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotencyLevel.
             * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.idempotencyLevel = 0;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.MethodOptions.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.MethodOptions.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                    writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 34: {
                            message.idempotencyLevel = reader.int32();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    switch (message.idempotencyLevel) {
                    default:
                        return "idempotencyLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                switch (object.idempotencyLevel) {
                default:
                    if (typeof object.idempotencyLevel === "number") {
                        message.idempotencyLevel = object.idempotencyLevel;
                        break;
                    }
                    break;
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotencyLevel = 0;
                    break;
                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotencyLevel = 1;
                    break;
                case "IDEMPOTENT":
                case 2:
                    message.idempotencyLevel = 2;
                    break;
                }
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] === undefined ? message.idempotencyLevel : $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodOptions";
            };

            /**
             * IdempotencyLevel enum.
             * @name google.protobuf.MethodOptions.IdempotencyLevel
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.UninterpretedOption.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.UninterpretedOption.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.identifierValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.positiveIntValue = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.negativeIntValue = reader.int64();
                            break;
                        }
                    case 6: {
                            message.doubleValue = reader.double();
                            break;
                        }
                    case 7: {
                            message.stringValue = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.aggregateValue = reader.string();
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
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.google.protobuf.UninterpretedOption.NamePart.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.google.protobuf.UninterpretedOption.NamePart.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.namePart = reader.string();
                                break;
                            }
                        case 2: {
                                message.isExtension = reader.bool();
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
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.SourceCodeInfo.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.SourceCodeInfo.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
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
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.google.protobuf.SourceCodeInfo.Location.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.google.protobuf.SourceCodeInfo.Location.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            }
                        case 3: {
                                message.leadingComments = reader.string();
                                break;
                            }
                        case 4: {
                                message.trailingComments = reader.string();
                                break;
                            }
                        case 6: {
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
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
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                var fullyUnknown = [];
                if (message.$unknownFields && $root.google.protobuf.GeneratedCodeInfo.decode)
                    for (var i = 0; i < message.$unknownFields.length; ++i)
                        try {
                            var known = $root.google.protobuf.GeneratedCodeInfo.decode(message.$unknownFields[i]);
                            fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                            message = Object.assign(known, message);
                        } catch (_) {
                        }
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                for (var i = 0; i < fullyUnknown.length; ++i)
                    writer._unknownField(fullyUnknown[i]);
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var unknownStartPos = reader.pos;
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
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
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    var fullyUnknown = [];
                    if (message.$unknownFields && $root.google.protobuf.GeneratedCodeInfo.Annotation.decode)
                        for (var i = 0; i < message.$unknownFields.length; ++i)
                            try {
                                var known = $root.google.protobuf.GeneratedCodeInfo.Annotation.decode(message.$unknownFields[i]);
                                fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                                message = Object.assign(known, message);
                            } catch (_) {
                            }
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    for (var i = 0; i < fullyUnknown.length; ++i)
                        writer._unknownField(fullyUnknown[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var unknownStartPos = reader.pos;
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                message.sourceFile = reader.string();
                                break;
                            }
                        case 3: {
                                message.begin = reader.int32();
                                break;
                            }
                        case 4: {
                                message.end = reader.int32();
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
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Annotation
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
