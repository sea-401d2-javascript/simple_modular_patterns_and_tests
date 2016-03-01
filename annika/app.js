'use strict';

var friendliness = require(__dirname + '/greet');
var greet = friendliness.greet;

var arg = require(__dirname + '/tags')();
if (!arg) { arg = "Tad"; }

console.log(greet(arg));
