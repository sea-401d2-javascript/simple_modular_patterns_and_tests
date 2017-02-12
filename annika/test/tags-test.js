'use strict';

var expect = require('chai').expect;
// var tags = require(__dirname + '/../tags');
var friendliness = require(__dirname + '/../greet');

describe('arg from command line', function() {

  beforeEach(function() {
    this.processArgvBackup = process.argv;
    process.argv = ['node', 'mypath', 'plz'];
  });

  afterEach(function() {
    process.argv = this.processArgvBackup;
  });

  it('should greet arg from command line', function() {
    var arg = process.argv.slice(2);
    if (arg && arg.length > 0) {
      expect(friendliness.greet(arg)).eql('hello, '+arg);
    }
  });
});
