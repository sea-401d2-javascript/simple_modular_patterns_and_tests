'use strict';
var greet = require(__dirname + '/../lib/greet.js');
function greetUtility(){
  var result = greet(process.argv[2]);
  console.log(result);
  return result;
}
greetUtility();
module.exports = greetUtility;
