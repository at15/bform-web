/**
 * Created by at15 on 2016/4/6.
 */
var gulp = require('gulp');

// npm run gulp mie, used for test if npm run can pass commandline arguments
gulp.task('mie', function () {
    console.log('mie');
});

gulp.task('default', function () {
    console.log('This is the default gulp task.');
});