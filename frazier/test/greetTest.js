'use strict';
var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');
var greetUtility = require(__dirname + '/../lib/greet-utility.js');

describe('greet',function(){
  it('should return Hello, name', function(){
    var arg = 'Frazier';
    var results = greet(arg);
    expect(results).to.equal('Hello, ' + arg);
  });
});

describe('greet-utility', function(){
  beforeEach(function(){
    this.processArgvStored = process.argv;
    process.argv = ['stuff', 'stuff', 'Frazier']
  });
  
  afterEach(function(){
    process.argv = this.processArgvStored;
  });
  
  it('should take a name in from proces.argv[2]', function(){
    
    var results = greetUtility();
    expect(results).to.equal('Hello, ' + process.argv[2]);
  });
});
