'use strict';

var expect = require('chai').expect;
var program = require('../lib/tags.js');

describe('greet', function() {
  it('should return hello plus the name parameter', function(){
    var testGreet = program.greet('ted');
    expect(testGreet).to.equal('hello ted');
  });
});
