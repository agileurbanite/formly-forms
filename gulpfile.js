'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var webapp = 'app/';
 
gulp.task('sass', function () {
  gulp.src(webapp + 'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(webapp + 'css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(webapp + 'sass/**/*.scss', ['sass']);
});