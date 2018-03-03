var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/main.scss',['styles']);
});