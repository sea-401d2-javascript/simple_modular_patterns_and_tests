'use strict';

var greet = require(__dirname + '/app/greet.js');

var hello = function() {
  var greeting = greet(process.argv.slice(2).join(' ') || 'human');
  console.log(greeting);
  return greeting;
};
hello();

module.exports = hello;
