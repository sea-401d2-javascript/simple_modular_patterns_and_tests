'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');
var fs = require('fs');
var mocha = require('gulp-mocha');


var paths = ['lib/*.js', 'test/*.js'];

gulp.task('eslint', function(){
  return gulp.src(paths)
  .pipe(eslint(fs.readFileSync('gulp-eslintrc')))
  .pipe(eslint.format());
});

//no longer being used because we are using eslint instead
gulp.task('jshint', function(){
  return gulp.src(paths)
  .pipe(jshint());
});

gulp.task('test', ['eslint'], function(){
  return gulp.src('test/greetTest.js')
  .pipe(mocha());
});
