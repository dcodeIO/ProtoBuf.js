"use strict";
module.exports = Service;

var util = require("../util/minimal");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {
    
    if (typeof rpcImpl !== "object" && typeof rpcImpl !== "function") {
        throw TypeError("rpcImpl must be a function");
    } else if (typeof rpcImpl === "object" && !isRPCV2(rpcImpl)) {
        throw TypeError("rpcImpl should implement RPCHandler")
    }

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

function isRPCV2(rpcImpl) {
    return typeof rpcImpl.unaryCall === "function" &&
    typeof rpcImpl.serverStreamCall === "function" &&
    typeof rpcImpl.clientStreamCall === "function" &&
    typeof rpcImpl.bidiStreamCall === "function";
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    var rpcUnaryImpl = self.rpcImpl;
    if (!rpcUnaryImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    if (typeof rpcUnaryImpl.unaryCall === "function") {
        rpcUnaryImpl = rpcUnaryImpl.unaryCall;
    }

    try {
        return rpcUnaryImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

// TODO: docs
Service.prototype.serverStreamCall = function serverStreamCall(method, requestCtor, responseCtor, request) {
    if (!request)
        throw TypeError("request must be specified");

    var self = this;

    if (typeof self.rpcImpl.serverStreamCall !== "function") {
        throw new Error("rpcImpl should implement serverStreamCall to support server streaming");
    }

    return self.rpcImpl.serverStreamCall(
        method,
        requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
        function responseFn (response) {
            return responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        }
    );
};

// TODO: docs
Service.prototype.clientStreamCall = function clientStreamCall(method, requestCtor, responseCtor) {
    var self = this;

    if (typeof self.rpcImpl.clientStreamCall !== "function") {
        throw new Error("rpcImpl should implement clientStreamCall to support client streaming");
    }

    return self.rpcImpl.clientStreamCall(
        method,
        function encodeFn (request) {
            return requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish()
        },
        function decodeFn (response) {
            return responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        }
    );
};

// TODO: docs
Service.prototype.bidiStreamCall = function bidiStreamCall(method, requestCtor, responseCtor) {
    var self = this;

    if (typeof self.rpcImpl.bidiStreamCall !== "function") {
        throw new Error("rpcImpl should implement bidiStreamCall to support bidi streaming");
    }

    return self.rpcImpl.bidiStreamCall(
        method,
        function encodeFn (request) {
            return requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish()
        },
        function decodeFn (response) {
            return responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        }
    );
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};
