/**
 * Created by at15 on 2016/4/6.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sassFiles = [
    './src/app/main.scss',
    './src/app/**/*.scss'
];
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
var sassOutput = './src/assets';

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

gulp.task('watch', function() {
    return gulp
        .watch(sassFiles, ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', function () {
    console.log('This is the default gulp task.');
});