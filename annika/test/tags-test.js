'use strict';

var expect = require('chai').expect;
var tags = require(__dirname + '/../tags');

describe('arg from command line', function() {
  it('should greet arg from command line', function() {
    var arg = process.argv.slice(2);
    if (arg && arg.length > 0) {
      expect(friendliness.greet(arg)).eql('hello, '+arg);
    }
  });

});
