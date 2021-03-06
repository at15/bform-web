/**
 * Created by at15 on 2016/4/6.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sassFiles = [
    './src/app/main.scss',
    './src/app/**/*.scss',
    './src/app/style/**/*.scss'
];
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
var sassOutput = './src/assets';

var templateFiles = [
    './src/app/**/*.html'
];
var templateOutput = './src/assets';

// npm run gulp mie, used for test if npm run can pass commandline arguments
gulp.task('mie', function () {
    console.log('mie');
});

gulp.task('sass', function () {
    return gulp
        .src(sassFiles)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(sassOutput));
});

gulp.task('copy', function () {
    return gulp
        .src(templateFiles)
        .pipe(gulp.dest(templateOutput));
});

gulp.task('watch', function () {
    return gulp
        .watch(sassFiles.concat(templateFiles), ['sass', 'copy'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('build', ['sass', 'copy'], function () {
    console.log('build finished');
});

gulp.task('default', ['build']);