'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['*.js', 'test/*.js'];

gulp.task('eslint', function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format()); //*prints things to the screen*//
});

gulp.task('default', ['eslint']);
