"use strict";

// Object.defineProperty(window,'CONST', { INT : 'int', writable: false });
var CONST = Object.freeze(
{
    INT:    'int',
    STRING: 'string',
    define: function (constant, value) {}
});

// data type setting
var Set = function (datatype)
{

};
// var is_int = function () {};



// --- example

CONST.define('YOUR_CONSTANT', 'value');

var x = Set('int').define(123);

var y = Set(CONST.INT);
    y.define(123);

// if (y.is_int()) {}
//if (y.gettype() != CONST.INT) {}