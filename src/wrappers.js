"use strict";

/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */
var wrappers = exports;

var Message = require("./message");

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

// Custom wrapper for ListValue
wrappers[".google.protobuf.ListValue"] = {
    fromObject: function(object) {
        var Value = this.lookup("google.protobuf.Value");
        return this.create({values: object.map(Value.fromObject)});
    },

    toObject: function(message /*, options */) {
        var Value = this.lookup("google.protobuf.Value");
        return message.values.map(Value.toObject);
    }
};

// Custom wrapper for Value
wrappers[".google.protobuf.Value"] = {
    // given a plain javascript scalar or object, return a protobuf Value
    fromObject: function(object) {
        var Struct = this.lookup("google.protobuf.Struct");
        var NullValue = this.lookup("google.protobuf.NullValue");
        var ListValue = this.lookup("google.protobuf.ListValue");

        var valueDef;
        if (object === null) {
            valueDef = {nullValue: NullValue.values.NULL_VALUE};
        } else if (typeof object === "number") {
            valueDef = {numberValue: object};
        } else if (typeof object === "string") {
            valueDef = {stringValue: object};
        } else if (typeof object === "boolean") {
            valueDef = {boolValue: object};
        } else if (Array.isArray(object)) {
            valueDef = {listValue: ListValue.fromObject(object)};
        } else if (typeof object === "object") {
            valueDef = {structValue: Struct.fromObject(object)};
        } else {
            return valueDef = {nullValue: 0};
        }
        return this.create(valueDef);
    },

    toObject: function(message, options) {
        var Struct = this.lookup("google.protobuf.Struct");
        var ListValue = this.lookup("google.protobuf.ListValue");

        var object;
        if (message.kind === "nullValue") {
            object = null;
        } else if (message.kind === "numberValue") {
            object = message.numberValue;
        } else if (message.kind === "stringValue") {
            object = message.stringValue;
        } else if (message.kind === "boolValue") {
            object = message.boolValue;
        } else if (message.kind === "structValue") {
            object = Struct.toObject(message.structValue, options);
        } else if (message.kind === "listValue") {
            object = ListValue.toObject(message.listValue, options);
        }

        return object;
    }
};

// Custom wrapper for Struct
wrappers[".google.protobuf.Struct"] = {

    // given a plain javascript object, return a protobuf Struct object
    fromObject: function(object) {
        var Value = this.lookup("google.protobuf.Value");
        var structDef = {fields: {}};

        Object.keys(object).forEach(function (k) {
            structDef.fields[k] = Value.fromObject(object[k]);
        });
        return this.create(structDef);
    },

    // given a protobuf Struct object, return a plain JS object
    toObject: function(message, options) {
        var Value = this.lookup("google.protobuf.Value");
        var object = {};
        var fields = message.fields;

        Object.keys(fields).forEach(function (k) {
            object[k] = Value.toObject(fields[k], options);
        });
        return object;
    }
};
