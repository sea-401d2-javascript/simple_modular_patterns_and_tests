'use strict';


var greet = function(name) {
  return 'hello ' + name;
};

var commandLine = process.argv.slice(2);

if (commandLine) {
  console.log(greet(commandLine));
}

var exports = module.exports = {
  greet: greet
};
