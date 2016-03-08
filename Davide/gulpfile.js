'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var files = ['*.js', 'test/*.js'];

gulp.task('eslint', function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format()); //*prints things to the screen*//
});

gulp.task('mocha', function(){
  return gulp.src(files, {read: false})
    .pipe(mocha());
});

gulp.task('default', ['eslint', 'mocha']);

gulp.task('watch', function(){
  gulp.watch('*.js',[eslint]);
});

gulp.task('default',['watch', 'eslint']);
