var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  return gulp
    .src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('scripts', function () {
  return gulp
    .src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('default', gulp.series('browserSync', 'styles', 'scripts'));
