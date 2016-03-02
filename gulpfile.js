'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

var paths = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('mocha', function(){
  return gulp.src(paths, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', function(){
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['lint', 'mocha', 'jshint']);
