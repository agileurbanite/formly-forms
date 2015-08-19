var gulp = require('gulp'),
  compass = require('gulp-compass'),
  connect = require('gulp-connect'),
  open = require('gulp-open');

gulp.task('compass', function() {
  gulp.src('scss/*.scss')
  .pipe(compass({
    config_file: 'config.rb',
    css: 'css',
    sass: 'scss'
  }));
});

gulp.task('open', function() {
  var options = {
    url: 'http://localhost:8080/example.html',    
    // app:'chrome'  //Use chrome to open app on PCs
    app:'Google Chrome' //Use Google Chrome to open the app on Chrome for Mac's
  };

  gulp.src('./example.html')
    .pipe(open("",options));
});

gulp.task('connect', function() {
  gulp.start('compass');
  connect.server({
    livereload: true,
    port: 8080
  });

  gulp.start('open');

  gulp.start('watch');
});


gulp.task('watch', function() {
  gulp.watch(['./scss/*.scss', './scss/**/*.scss'], ['compass']);
});