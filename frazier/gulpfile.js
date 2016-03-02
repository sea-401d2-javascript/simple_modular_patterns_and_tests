'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = ['lib/*.js', 'test/*.js'];

gulp.task('eslint', function(){
  console.log('eslint called');
  return gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', ['eslint'], function(){
  console.log('test called');
  return gulp.src('test/greetTest.js')
  .pipe(mocha());
});
