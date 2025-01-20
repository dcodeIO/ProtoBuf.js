"use strict";
var fs       = require("fs"),
    path     = require("path"),
    protobuf = require("protobufjs");

function getFullTypeName(type) {
    var seen = [];
    while(type && type.name) {
        seen.unshift(type.name);
        type = type.parent;
    }
    return seen.join(".");
}

/**
 * DFS to get all message dependencies, cache in filterResult and saved set.
 * @param {Root} root  The protobuf root instance
 * @param {object} filterParams
 * @param {Map} filterResult The result of message you need and their dependencies.
 * @param {Map} saved Set that records which messages are in the filterResults using fully qualified name.
 * @returns {undefined}  Does not return a value
 */
function dfsFilterDependencies(root, message, filterResult, saved) {
    if (message instanceof protobuf.Type) {
        if (saved.has(`${message.fullName}`)) return;
        saved.add(`${message.fullName}`);
        for (var field of message.fieldsArray) {
            if (field.resolvedType) {
                // handle nested message type
                if (field.resolvedType.parent.name === message.name) {
                    var nestedMessage = message.nested[field.resolvedType.name];
                    dfsFilterDependencies(root, nestedMessage, filterResult, saved);
                    continue;
                }
                var fullTypeName = getFullTypeName(field.resolvedType);
                doFilterMessage(root, { messageNames: [fullTypeName] }, filterResult, saved);
            }
        }
    }
}

/**
 * DFS to get all message you need and their dependencies, cache in filterMap.
 * @param {Root} root  The protobuf root instance
 * @param {object} filterParams
 * @param {Map} filterResult The result of message you need and their dependencies.
 * @param {Map} saved Set that records which messages are in the filterResults using fully qualified name.
 * @returns {undefined}  Does not return a value
 */
function doFilterMessage(root, filterParams, filterResult, resolved) {
    var messageNameFilter = filterParams.messageNames;
    filterResult.set(root, new Set());

    for (var messageFullName of messageNameFilter) {
        var nameSplit = messageFullName.split(".");
        var namespaces = nameSplit.slice(0, -1);
        var messageName = nameSplit.slice(-1);

        // traverse path to ensure namespace exists, add namespaces if first time
        var messageNamespace = root;
        if (nameSplit.length > 1) {
            var seen = [];
            for (var packageName of namespaces) {
                seen.push(packageName);
                messageNamespace = messageNamespace.nested[packageName];
                if (!messageNamespace || !(messageNamespace instanceof protobuf.Namespace)) {
                    throw new Error(`namespace not found ${seen.join(".")}}`);
                }
                if (!filterResult.has(messageNamespace)) {
                    filterResult.set(messageNamespace, new Set());
                }
            }
        }

        // ensure message exists in namespace
        var message = messageNamespace.nested[messageName];
        if (!message) {
            throw new Error(`message not found ${messageFullName}`);
        }
        filterResult.get(messageNamespace).add(message);

        // dfs to find all dependencies
        dfsFilterDependencies(root, message, filterResult, resolved);
    }
}

/**
 * Filter scanned protobuf types for specific types and their dependencies. All others will be dropped from Root and will not be in codegen.
 * @param {Root} root the protobuf root instance
 * @param {object} filterParams
 * @param {string[]} filterParams.messageNames  The message names array in the root namespace you want gen for. example: [msg1, msg2]
 */
exports.filterMessage = function (root, filterParams) {
    var filterResult = new Map();
    var resolved = new Set();
    doFilterMessage(root, filterParams, filterResult, resolved);

    // mutate the passed in Root object, removing types not found in the filterResult
    var filterChildren = function(parent, ns) {
        if (ns instanceof protobuf.Type || ns instanceof protobuf.Enum) {
            return filterResult.get(parent).has(ns);
        } else if (ns instanceof protobuf.Namespace) {
            var filteredChildren = filterResult.get(ns);
            if (!filteredChildren) {
                return false;
            }
            ns._nestedArray = ns._nestedArray.filter(child => filterChildren(ns, child));

            return true;
        }
        return true;
    };
    root._nestedArray = root._nestedArray.filter(child => filterChildren(root, child));
};
