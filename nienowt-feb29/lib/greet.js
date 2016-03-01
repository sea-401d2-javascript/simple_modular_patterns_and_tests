'use strict';

 function greet(name){
   return('hello ' + name);
 };

if(process.argv[2] !== undefined){
  console.log(greet(process.argv[2]));
};

module.exports = greet;
