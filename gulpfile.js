var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var zip = require('gulp-zip');

gulp.task('compress', function() {
  gulp.src('word-count.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
});

var filesToInclude = [
        './*.png',
        './*.min.js',
        './manifest.json'
    ];

gulp.task('build', function () {
    return gulp.src(filesToInclude, { base: './' })
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('.'));
});