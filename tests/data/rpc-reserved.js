/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../../minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["test_rpc-reserved"] || ($protobuf.roots["test_rpc-reserved"] = {});

$root.MyService = (function() {

    /**
     * Constructs a new MyService service.
     * @exports MyService
     * @classdesc Represents a MyService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function MyService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (MyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MyService;

    /**
     * Creates new MyService service using the specified rpc implementation.
     * @function create
     * @memberof MyService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {MyService} RPC service. Useful where requests and/or responses are streamed.
     */
    MyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link MyService#delete_}.
     * @memberof MyService
     * @typedef DeleteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MyResponse} [response] MyResponse
     */

    /**
     * Calls Delete.
     * @function delete
     * @memberof MyService
     * @instance
     * @param {IMyRequest} request MyRequest message or plain object
     * @param {MyService.DeleteCallback} callback Node-style callback called with the error, if any, and MyResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(MyService.prototype["delete"] = function delete_(request, callback) {
        return this.rpcCall(delete_, $root.MyRequest, $root.MyResponse, request, callback);
    }, "name", { value: "Delete" });

    /**
     * Calls Delete.
     * @function delete
     * @memberof MyService
     * @instance
     * @param {IMyRequest} request MyRequest message or plain object
     * @returns {Promise<MyResponse>} Promise
     * @variation 2
     */

    return MyService;
})();

$root.MyRequest = (function() {

    /**
     * Properties of a MyRequest.
     * @exports IMyRequest
     * @interface IMyRequest
     * @property {string|null} [path] MyRequest path
     */

    /**
     * Constructs a new MyRequest.
     * @exports MyRequest
     * @classdesc Represents a MyRequest.
     * @implements IMyRequest
     * @constructor
     * @param {IMyRequest=} [properties] Properties to set
     */
    function MyRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MyRequest path.
     * @member {string} path
     * @memberof MyRequest
     * @instance
     */
    MyRequest.prototype.path = "";

    /**
     * Creates a new MyRequest instance using the specified properties.
     * @function create
     * @memberof MyRequest
     * @static
     * @param {IMyRequest=} [properties] Properties to set
     * @returns {MyRequest} MyRequest instance
     */
    MyRequest.create = function create(properties) {
        return new MyRequest(properties);
    };

    /**
     * Encodes the specified MyRequest message. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @function encode
     * @memberof MyRequest
     * @static
     * @param {IMyRequest} message MyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MyRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.MyRequest.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.MyRequest.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified MyRequest message, length delimited. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MyRequest
     * @static
     * @param {IMyRequest} message MyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MyRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MyRequest} MyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MyRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MyRequest();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.path = reader.string();
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
     * Decodes a MyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MyRequest} MyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MyRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MyRequest message.
     * @function verify
     * @memberof MyRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MyRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a MyRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MyRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MyRequest} MyRequest
     */
    MyRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MyRequest)
            return object;
        var message = new $root.MyRequest();
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a MyRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MyRequest
     * @static
     * @param {MyRequest} message MyRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MyRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.path = "";
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this MyRequest to JSON.
     * @function toJSON
     * @memberof MyRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MyRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MyRequest
     * @function getTypeUrl
     * @memberof MyRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MyRequest";
    };

    return MyRequest;
})();

$root.MyResponse = (function() {

    /**
     * Properties of a MyResponse.
     * @exports IMyResponse
     * @interface IMyResponse
     * @property {number|null} [status] MyResponse status
     */

    /**
     * Constructs a new MyResponse.
     * @exports MyResponse
     * @classdesc Represents a MyResponse.
     * @implements IMyResponse
     * @constructor
     * @param {IMyResponse=} [properties] Properties to set
     */
    function MyResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MyResponse status.
     * @member {number} status
     * @memberof MyResponse
     * @instance
     */
    MyResponse.prototype.status = 0;

    /**
     * Creates a new MyResponse instance using the specified properties.
     * @function create
     * @memberof MyResponse
     * @static
     * @param {IMyResponse=} [properties] Properties to set
     * @returns {MyResponse} MyResponse instance
     */
    MyResponse.create = function create(properties) {
        return new MyResponse(properties);
    };

    /**
     * Encodes the specified MyResponse message. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @function encode
     * @memberof MyResponse
     * @static
     * @param {IMyResponse} message MyResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MyResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        var fullyUnknown = [];
        if (message.$unknownFields && $root.MyResponse.decode)
            for (var i = 0; i < message.$unknownFields.length; ++i)
                try {
                    var known = $root.MyResponse.decode(message.$unknownFields[i]);
                    fullyUnknown = fullyUnknown.concat(known.$unknownFields || []);
                    message = Object.assign(known, message);
                } catch (_) {
                }
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        for (var i = 0; i < fullyUnknown.length; ++i)
            writer._unknownField(fullyUnknown[i]);
        return writer;
    };

    /**
     * Encodes the specified MyResponse message, length delimited. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MyResponse
     * @static
     * @param {IMyResponse} message MyResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MyResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MyResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MyResponse} MyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MyResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MyResponse();
        while (reader.pos < end) {
            var unknownStartPos = reader.pos;
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.status = reader.int32();
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
     * Decodes a MyResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MyResponse} MyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MyResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MyResponse message.
     * @function verify
     * @memberof MyResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MyResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a MyResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MyResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MyResponse} MyResponse
     */
    MyResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MyResponse)
            return object;
        var message = new $root.MyResponse();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a MyResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MyResponse
     * @static
     * @param {MyResponse} message MyResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MyResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this MyResponse to JSON.
     * @function toJSON
     * @memberof MyResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MyResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MyResponse
     * @function getTypeUrl
     * @memberof MyResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MyResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MyResponse";
    };

    return MyResponse;
})();

module.exports = $root;
