'use strict';


var greet = function(name) {
  return 'hello ' + name;
}

var exports = module.exports = {
  greet: greet
}
