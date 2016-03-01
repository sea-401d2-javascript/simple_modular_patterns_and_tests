'use strict';

function greet(name){
  return "hello, " + name;
}

var args = process.argv.slice(2);
console.log('Hello ' + args.join(' ') + '!');

module.exports = greet;
