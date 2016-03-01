'use strict';

var greet = require(__dirname + '/app/greet.js');
// var insertName = process.argv[2];
var insertName = function(i) {
  var i = process.argv[];
  for (var i = 2; i < length; i++) {
    return ' ' + i;
  };
} ;
var greeting = greet(insertName);
console.log(greeting);
