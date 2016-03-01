'use strict'
var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');
var greetUtility = require(__dirname + '/../lib/greet-utility.js');

describe('greet',function(){
  it('should return Hello, name', function(){
    var arg = 'Frazier';
    var results = greet(arg);
    expect(results).to.equal('Hello, ' + arg);
  });
  it('should take a name in from proces.argv[2]', function(){
    process.argv.push('Frazier');
    var results = greetUtility();
    expect(results).to.equal('Hello, ' + process.argv[2]);
  });
});
