'use strict';
function greet(name){
  console.log('module.exports returns Hello ' + name);
  return 'Hello, ' + name;
}
module.exports = greet;
