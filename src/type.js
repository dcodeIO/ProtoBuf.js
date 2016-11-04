var Namespace = require("./namespace"),
    Enum      = require("./enum"),
    OneOf     = require("./oneof"),
    Field     = require("./field"),
    Service   = require("./service"),
    Prototype = require("./prototype"),
    util      = require("./util"),
    Reader    = require("./reader"),
    Writer    = require("./writer");

module.exports = Type;

/**
 * Reflected message type.
 * @extends Namespace
 * @constructor
 * @param {string} name Message name
 * @param {!Object.<string,*>} [options] Message options
 */
function Type(name, options) {
    Namespace.call(this, name, options);

    /**
     * Message fields.
     * @type {!Object.<string,!Field>}
     */
    this.fields = {};  // exposed

    /**
     * Oneofs declared within this namespace, if any.
     * @type {!Object.<string,!Array.<string>>|undefined}
     */
    this.oneofs = undefined; // exposed

    /**
     * Extension ranges, if any.
     * @type {!Array.<!Array<number>>|undefined}
     */
    this.extensions = undefined; // exposed

    /**
     * Reserved ranges, if any.
     * @type {!Array.<!Array<number>|number>|undefined}
     */
    this.reserved = undefined; // exposed

    /**
     * Cached fields by id.
     * @type {?Object.<number,!Field>}
     * @private
     */
    this._fieldsById = null;

    /**
     * Cached field names.
     * @type {?Array.<string>}
     * @private
     */
    this._fieldNames = null;

    /**
     * Cached prototype.
     * @type {?Prototype}
     * @private
     */
    this._prototype = null;
}

var TypePrototype = Namespace.extend(Type, [ "fields", "oneofs", "extensions", "reserved" ]);
var NamespacePrototype = Namespace.prototype;

Object.defineProperties(TypePrototype, {

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {!Object.<number,!Field>}
     * @readonly
     */
    fieldsById: {
        get: function() {
            if (!this._fieldsById) {
                this._fieldsById = {};
                var names = this.fieldNames;
                for (var i = 0, k = names.length; i < k; ++i) {
                    var field = this.fields[names[i]],
                        id = field.id;
                    if (this._fieldsById[id])
                        throw Error("duplicate id " + id + " in " + this);
                    this._fieldsById[id] = field;
                }
            }
            return this._fieldsById;
        }
    },

    /**
     * Message field names for iteration.
     * @name Type#fieldNames
     * @type {!Array.<string>}
     * @readonly
     */
    fieldNames: {
        get: function() {
            return this._fieldNames || (this._fieldNames = Object.keys(this.fields));
        }
    }
});

/**
 * Tests if the specified JSON object describes a message type.
 * @param {*} json JSON object to test
 * @returns {boolean} `true` if the object describes a message type
 */
Type.testJSON = function testJSON(json) {
    return Boolean(json && json.fields);
};

var nestedTypes = [ Enum, Type, Service ];

/**
 * Creates a type from JSON.
 * @param {string} name Message name
 * @param {!Object} json JSON object
 * @returns {!Type} Created message type
 */
Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    if (json.fields)
        Object.keys(json.fields).forEach(function(fieldName) {
            type.add(Field.fromJSON(fieldName, json.fields[fieldName]));
        });
    if (json.oneofs)
        Object.keys(json.oneofs).forEach(function(oneOfName) {
            type.add(OneOf.fromJSON(oneOfName, json.oneofs[oneOfName]));
        });
    if (json.nested)
        Object.keys(json.nested).forEach(function(nestedName) {
            var nested = json.nested[nestedName];
            for (var i = 0, k = nestedTypes.length, clazz; i < k; ++i)
                if ((clazz = nestedTypes[i]).testJSON(nested)) {
                    type.add(clazz.fromJSON(nestedName, nested));
                    return;
                }
            throw Error("invalid nested object in " + type + ": " + nestedName);
        });
    return type;
};

/**
 * @override
 */
TypePrototype.resolve = function resolve() {
    // NOTE: Types aren't resolved internally - this is here as utility.
    if (this.resolved)
        return this;
    this.each(function(field) {
        field.resolve();
    }, this, this.fields);
    if (this.oneofs)
        this.each(function(oneof) {
            oneof.resolve();
        }, this, this.oneofs);
    return Namespace.prototype.resolve.call(this);
};

/**
 * @override 
 */
TypePrototype.exists = function exists(name) {
    return Boolean(this.fields && this.fields[name] || this.nested && this.nested[name] || this.oneofs && this.oneofs[name]);
};

/**
 * @override
 */
TypePrototype.add = function add(object) {
    if (this.exists(object.name))
        throw Error("duplicate name '" + object.name + '" in ' + this);
    if (object instanceof Field) {
        if (object.parent)
            object.parent.remove(object);
        this.fields[object.name] = object;
        this._fieldsById = this._fieldNames = null;
        object.message = this;
        object.onAdd(this);
        return this;
    }
    if (object instanceof OneOf) {
        if (!this.oneofs)
            this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return this;
    }
    return NamespacePrototype.add.call(this, object);
};

/**
 * @override
 */
TypePrototype.remove = function remove(object) {
    if (object instanceof Field) {
        if (this.fields[object.name] !== object)
            throw Error("not a member of " + this);
        delete this.fields[object.name];
        this._fieldsById = this._fieldNames = null;
        object.message = null;
        return this;
    }
    return NamespacePrototype.remove.call(this, object);
};

/**
 * Resolves any deferred extension fields that might belong to this type.
 * @returns {!Type} this
 */
TypePrototype.resolveExtends = function resolveExtends() {
    this.root.handleResolve(this);
    return this;
};

/**
 * Creates a new message of this type using the specified properties.
 * @param {!Object} [properties] Properties to set
 * @param {function(new:Prototype)} [constructor] Optional constructor to use (should extend {@link Prototype})
 * @returns {!Prototype} Message instance
 */
TypePrototype.create = function create(properties, constructor) {
    if (util.isFunction(properties)) {
        constructor = properties;
        properties = undefined;
    }

    // If there is a dedicated constructor, take the fast route
    if (constructor)
        return new constructor(properties);
    
    // Otherwise set everything up for automagic creation
    if (!properties)
        properties = {};
    var fieldNames = this.resolveExtends().fieldNames,
        prototype  = this._prototype;

    // When creating an instance for the first time, prepare the prototype once
    if (!prototype) {
        prototype = new Prototype();
        for (var i = 0, k = fieldNames.length; i < k; ++i) {
            var name  = fieldNames[i],
                field = this.fields[name].resolve(),
                value = field.defaultValue;
            if (!util.isObject(value)) // note that objects are immutable and thus cannot be on the prototype
                prototype[name] = value;
        }
        this._prototype = prototype;
    }

    // Create a new message instance and populate it
    var message = Object.create(prototype);
    for (var i = 0, k = fieldNames.length; i < k; ++i) {
        var name  = fieldNames[i],
            field = this.fields[name].resolve(),
            value = properties[name] || field.defaultValue;
        if (field.required || field.repeated || field.map || value !== field.defaultValue || util.isObject(value))
            message[name] = value;
    }
    return message;
};

/**
 * Encodes a message of this type.
 * @param {!Prototype|!Object} message Message instance or plain object
 * @param {!Writer} [writer] Writer to encode to
 * @returns {!Writer} writer
 */
TypePrototype.encode = function encode(message, writer) {
    if (!writer)
        writer = Writer();
    this.resolveExtends();
    var fieldNames = this.fieldNames;
    for (var i = 0, k = fieldNames.length; i < k; ++i) {
        var name  = fieldNames[i],
            field = this.fields[name],
            value = message[name];
        if (field.resolve().required || value != field.defaultValue) // eslint-disable-line eqeqeq
            field.encode(value, writer);
    }
    return writer;
};

/**
 * Encodes a message of this type, preceeded by its byte length as a varint.
 * @param {!Prototype|!Object} message Message instance or plain object
 * @param {!Writer} [writer] Writer to encode to
 * @returns {!Writer} writer
 */
TypePrototype.encodeDelimited = function encodeDelimited(message, writer) {
    if (writer)
        writer.fork();
    else
        writer = Writer();
    return writer.bytes(this.encode(message, writer).finish());
};

/**
 * Decodes a runtime message of this message's type.
 * @param {!Reader|!Array|!Buffer} readerOrBuffer Reader or buffer to decode from
 * @param {function(new:Prototype)} [constructor] Optional constructor of the created message, see {@link Type#create}
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {!Message} Decoded message
 */
TypePrototype.decode = function decode(readerOrBuffer, constructor, length) {
    if (typeof constructor === 'number') {
        length = constructor;
        constructor = undefined;
    }
    this.resolveExtends();

    var reader     = readerOrBuffer instanceof Reader ? readerOrBuffer : Reader(readerOrBuffer),
        limit      = length === undefined ? reader.len : reader.pos + length,
        message    = this.create({}, constructor),
        fieldsById = this.fieldsById;

    while (reader.pos < limit) {
        var tag   = reader.tag(),
            field = fieldsById[tag.id];
        if (field) {
            var name  = field.name,
                value = field.decode(reader, tag.wireType);
            if (field.repeated) {
                var array = message[name] || (message[name] = []);
                if (util.isArray(value))
                    Array.prototype.push.apply(array, value);
                else
                    array.push(value);
            } else
                message[name] = value;
        } else {
            switch (tag.wireType) {
                case 0:
                    reader.skip();
                    break;
                case 1:
                    reader.skip(8);
                    break;
                case 2:
                    reader.skip(reader.uint32());
                    break;
                case 5:
                    reader.skip(4);
                    break;
                default:
                    throw Error("unsupported wire type of unknown field #" + tag.id + " in " + this + ": " + tag.wireType);
            }
        }
    }
    if (reader.pos !== limit)
        throw Error("invalid wire format: index " + reader.pos + " != " + limit);
    return message;
};

/**
 * Decodes a message of this type,
 * which is preceeded by its byte length as a varint.
 * @param {!Reader|!Array|!Buffer} readerOrBuffer Reader or buffer to decode from
 * @param {function(new:Prototype)} [constructor] Optional constructor of the created message, see {@link Type#create}
 * @returns {!Message} Decoded message
 */
TypePrototype.decodeDelimited = function decodeDelimited(readerOrBuffer, constructor) {
    if (!(readerOrBuffer instanceof Reader))
        readerOrBuffer = Reader(/* of type */ readerOrBuffer);
    return this.decode(readerOrBuffer.bytes(), constructor);
};
