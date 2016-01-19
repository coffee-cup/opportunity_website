var gulp = require('gulp');
var utils = require('gulp-util');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var rimraf = require('rimraf');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');

// Build directory
var build = 'build';

var PROD = utils.env.production;

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
    .pipe(gulpif(!PROD, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(!PROD, sourcemaps.write()))
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
    livereload: !PROD,
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
