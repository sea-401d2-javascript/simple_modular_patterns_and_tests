'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('testing greet function from greet.js', function() {
  it('greet(Josh) should return "hello, Josh"', function(){

    expect(greet('Josh')).to.eql('hello, Josh');
  });


});
