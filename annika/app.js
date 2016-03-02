'use strict';

require(__dirname + '/gulpfile.js');

var friendliness = require(__dirname + '/greet');
var greet = friendliness.greet;

var arg = require(__dirname + '/tags')();
var greeting = greet(arg || 'Tad');
console.log(greeting);
