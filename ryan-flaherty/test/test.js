'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/..app/greet.js');

describe('testing greet function from greet.js', function(){
  it('greet(Ryan) should return "Hello Ryan.  Would you like to play a game of chess?"', function(){
    expect(greet('Ryan')).to.equal('Hello Ryan.  Would you like to play a game of chess?');
  });
});
