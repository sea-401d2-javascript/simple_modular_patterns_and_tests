'use strict';

var expect = require('chai').expect;
var hello = require(__dirname + '/../app.js');

describe('testing app.js', function(){
  describe('testing app with no args', function(){
    it('should return "Hello, human. Would you like to play a game of chess?"', function(){
      expect(hello()).to.equal('Hello, human. Would you like to play a game of chess?');
    });
  });

  describe('test app with arguments', function(){
    beforeEach(function(){
      this.processArgvBackup = process.argv;
      process.argv = ['node', 'path/to/hello.js', 'Professor', 'Falken'];
    });
    afterEach(function(){
      process.argv = this.processArgvBackup;
    });
    it('it should return "Hello, Professor Falken. Would you like to play a game of chess?"', function(){
      expect(hello()).to.equal('Hello, Professor Falken. Would you like to play a game of chess?');
    });
  });
});
