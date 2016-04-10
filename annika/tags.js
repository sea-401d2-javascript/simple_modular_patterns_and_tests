'use strict';

module.exports = function() {
  var args = process.argv.slice(2);
  if (args && args.length > 0) {
    return args[0];
  }
};
