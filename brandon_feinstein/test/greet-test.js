'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../greet.js');

describe('testing greet function from greet.js', function(){
  it('greet should return "hello, Brandon"', function(){
    expect(greet('Brandon')).to.equal('hello, Brandon');;
  });
});
