'use strict';

var greet = require(__dirname + '/../app/greet.js');
var expect = require('chai').expect;

describe('testing greet function from greet.js', function(){
  it('should greet(Professor Falken) should return "Hello Professor Falken. Would you like to play a game of chess?"', function(){
    expect(greet('Professor Falken')).to.equal('Hello Professor Falken. Would you like to play a game of chess?');
  });
});
