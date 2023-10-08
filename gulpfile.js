'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./*.scss')
   .pipe(concat('styles.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./'));
});

gulp.task('watch', gulp.series( 'sass', function() {
    var watch = require('gulp-watch')
    watch('./*.scss', gulp.series('sass'));
  })
);