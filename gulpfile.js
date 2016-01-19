var gulp = require('gulp');
var utils = require('gulp-util');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var connect = require('gulp-connect');
var rimraf = require('rimraf');
var historyApiFallback = require('connect-history-api-fallback');

// Build directory
var build = 'build';

var copyfiles = ['public/**/*'];

var tasks = ['copyfiles', 'sass'];

// Copies public folder to build
gulp.task('copyfiles', function() {
  return gulp.src(copyfiles)
    .pipe(gulp.dest(build))
    .pipe(connect.reload());
});

// Coplies scss files to css
gulp.task('sass', function() {
  return gulp.src('sass/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(build + '/assets/css/'))
    .pipe(connect.reload());
});

// Cleans build directory (wipe everything)
gulp.task('clean', function() {
  rimraf(build, function() {});
});

// Starts webserver with livereload which serves build directory
gulp.task('webserver', function() {
  connect.server({
    root: build,
    livereload: true,
    port: 8181
  });
});

// Starts webserver and watches files for changes
gulp.task('listen', ['tasks', 'watch', 'webserver']);

// Watches directories and runs tasks on changes
gulp.task('watch', function() {
  gulp.watch(copyfiles, ['copyfiles']);
  gulp.watch(['sass/**/*.*'], ['sass']);
});

gulp.task('tasks', tasks);

gulp.task('default', ['tasks']);
