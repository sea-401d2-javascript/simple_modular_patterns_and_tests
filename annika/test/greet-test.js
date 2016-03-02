'use strict';

var expect = require('chai').expect;
var friendliness = require(__dirname + '/../greet');

describe('testing greet function from greet.js', function() {
  it('should welcome Tad with "hello, Tad"', function() {
    console.log('testing');
    expect(friendliness.greet('Tad')).eql('hello, Tad');
  });
});
