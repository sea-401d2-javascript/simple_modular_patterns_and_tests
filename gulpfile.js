'use strict';

var jshint = require('gulp-jshint');
var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');


var paths = ['*.js', 'lib/greet.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(lint({
      'rules': {
        'no-console': 0,
        'indent': [
          2,
          2
        ],
        'quotes': [
          2,
          'single'
        ],
        'linebreak-style': [
          2,
          'unix'
            ],
            'semi': [
              2,
              'always'
            ]
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'globals': {
        'describe': false,
        'it': false,
        'beforeEach': false,
        'afterEach': false,
        'before': false,
        'after': false
      },
      'ecmaFeatures': {
        'modules': true,
        'experimentalObjectRestSpread': true
      },
      'extends': 'eslint:recommended'
    }
))
    .pipe(lint.formatEach('compact', process.stderr));
});

gulp.task('mocha', function(){
  return gulp.src(paths, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', function(){
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function (){
  gulp.watch(paths, ['mocha', 'jshint']);
});

gulp.task('default', ['lint', 'mocha', 'watch']);
