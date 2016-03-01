'use strict';

var expect = require('chai').expect;
var program = require('/../lib/tags.js');

describe('greet', function() {
  it('should return hello plus the name parameter', function(){
    expect(greet('ted').to.equal('hello ted'););
  });
});
