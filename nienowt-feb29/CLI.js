'use strict';

var greet = require(__dirname + '/lib/greet');

var hey = function(){
  var greeting = greet(process.argv[2] || 'human');
  console.log(greeting);
  return greeting;
};

hey();

module.exports = hey;
