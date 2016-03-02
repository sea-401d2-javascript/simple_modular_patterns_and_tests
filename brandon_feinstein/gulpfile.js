'use strict';
var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = ['*.js', 'greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('test', function () {
  return gulp.src('test/greet-test.js', {read: false})
	.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function () {
  gulp.watch('*.js', ['lint', 'test']);
});
