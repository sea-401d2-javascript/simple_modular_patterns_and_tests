'use strict';

var greet = require(__dirname + '/app/greet.js');
var insertName = process.argv[2];
var greeting = greet(insertName);
console.log(greeting);
