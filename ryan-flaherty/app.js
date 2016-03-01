'use strict';

var greet = require(__dirname + '/app/greet.js');

var greeting = greet(process.argv.slice(2).join(' '));
console.log(greeting);

