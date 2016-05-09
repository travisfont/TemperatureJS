"use strict";

var CONST = {};
function setConstant(key, value)
{
    Object.defineProperty(CONST, key, {value: value });
}

setConstant('constantName', 'constantValue');

var DT = Object.freeze(
{
    INT:    'int',
    STRING: 'string',
    define: function (constant, value) {}
});


// data type setting
var Set = function (datatype)
{
    return {
        define : function (value)
        {
            return {
                'type':  datatype,
                'value': value
            }
        }
    };
}

// --- example
//CONST.define('YOUR_CONSTANT', 'value');

var x = Set(DT.INT).define(123);

// x.get();

console.log(x);
console.log(CONST);

// if (y.is_int()) {}
//if (y.gettype() != CONST.INT) {}