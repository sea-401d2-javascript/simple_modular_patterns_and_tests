'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint')

var paths = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('mocha', function(){

});

gulp.task('jshint', function(){

});

gulp.task('default', ['lint', 'mocha', 'jshint']);
