"use strict";

/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */
var wrappers = exports;

var Message = require("./message");
var LongBits = require("./util/longbits")

/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */

// Custom wrapper for Any
wrappers[".google.protobuf.Any"] = {

    fromObject: function(object) {

        // unwrap value type if mapped
        if (object && object["@type"]) {
             // Only use fully qualified type name after the last '/'
            var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */
            if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ?
                    object["@type"].slice(1) : object["@type"];
                // type_url prefix is optional, but path seperator is required
                if (type_url.indexOf("/") === -1) {
                    type_url = "/" + type_url;
                }
                return this.create({
                    type_url: type_url,
                    value: type.encode(type.fromObject(object)).finish()
                });
            }
        }

        return this.fromObject(object);
    },

    toObject: function(message, options) {

        // Default prefix
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name = "";

        // decode value if requested and unmapped
        if (options && options.json && message.type_url && message.value) {
            // Only use fully qualified type name after the last '/'
            name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            // Separate the prefix used
            prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */
            if (type)
                message = type.decode(message.value);
        }

        // wrap value if unmapped
        if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            var messageName = message.$type.fullName[0] === "." ?
                message.$type.fullName.slice(1) : message.$type.fullName;
            // Default to type.googleapis.com prefix if no prefix is used
            if (prefix === "") {
                prefix = googleApi;
            }
            name = prefix + messageName;
            object["@type"] = name;
            return object;
        }

        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.Timestamp"] = {
    fromObject: function(object) {
        if (typeof object === 'string') {
            var dt = Date.parse(object);
            if (isNaN(dt)) {
                throw TypeError("Unable to parse to timestamp");
            }
            return this.fromObject({
                seconds: Math.floor(dt/1000),
                nanos: (dt % 1000) * 1000000
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return new Date(message.seconds*1000 + message.nanos/1000000).toISOString();
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.Duration"] = {
    fromObject: function(object) {
        if (typeof object === 'string') {
            let regex = /-?\d+\.?\d*s$/
            if (object.match(regex) === null) {
                throw TypeError("Should be a number followed by s");
            }
            let duration = parseFloat(object);
            let seconds = parseInt(duration);
            let nanos = (duration - seconds) * 1000000000;
            return this.fromObject({
                seconds: seconds,
                nanos: nanos
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            let duration = message.seconds.toNumber();
            if (message.nanos !== 0) {
                duration += message.nanos / 1000000000;
            }
            return `${duration}s`;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.DoubleValue"] = {
    fromObject: function(object) {
        if (typeof object === 'number') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.FloatValue"] = {
    fromObject: function(object) {
        if (typeof object === 'number') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.Int64Value"] = {
    fromObject: function(object) {
        if (typeof object === 'string') {
            if (isNaN(object)) {
                throw TypeError("Should be a number");
            }
            var longbits = LongBits.from(object);
            return this.fromObject({
                value: {
                    low: longbits.lo,
                    high: longbits.hi,
                    unsigned: false
                }
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            var long = new LongBits(message.value.low, message.value.high);
            return `${long.toNumber(false)}`;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.UInt64Value"] = {
    fromObject: function(object) {
        if (typeof object === 'string') {
            if (isNaN(object)) {
                throw TypeError("Should be a number");
            }
            var longbits = LongBits.from(object);
            return this.fromObject({
                value: {
                    low: longbits.lo,
                    high: longbits.hi,
                    unsigned: true
                }
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            var long = new LongBits(message.value.low, message.value.high);
            return `${long.toNumber(true)}`;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.Int32Value"] = {
    fromObject: function(object) {
        if (typeof object === 'number') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.UInt32Value"] = {
    fromObject: function(object) {
        if (typeof object === 'number') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.StringValue"] = {
    fromObject: function(object) {
        if (typeof object === 'string') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};

wrappers[".google.protobuf.BoolValue"] = {
    fromObject: function(object) {
        if (typeof object === 'boolean') {
            return this.fromObject({
                value: object
            });
        }
        return this.fromObject(object);
    },

    toObject: function(message, options) {
        if (options && options.standard) {
            return message.value;
        }
        return this.toObject(message, options);
    }
};
