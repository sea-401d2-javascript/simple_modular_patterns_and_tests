'use strict';

var expect = require('chai').expect;
var greeting = require(__dirname + '/../lib/greet.js');
var greet = greeting('thorn');
console.log(greet);


describe('greeting', function(){
  it('greeting should return "hello + name"', function(){
    expect(greet).to.eql('hello thorn');
  });
});
