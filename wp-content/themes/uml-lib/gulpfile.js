require('es6-promise').polyfill();

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer  = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var rtlcss  = require('gulp-rtlcss');
var rename  = require('gulp-rename');

var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

var onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

// SASS task
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'))

        .pipe(rtlcss())                     // Convert to RTL
        .pipe(rename({ basename: 'rtl' }))  // Rename to rtl.css
        .pipe(gulp.dest('./'));             // Output RTL stylesheets (rtl.css)
});

// JS task
gulp.task('js', function() {
    return gulp.src(['./src/js/custom/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'))
        .on('change', function(path) {
            console.log('Changed: ' + path);
            // code to execute on change
        })
    gulp.watch('./src/js/custom/*.js', gulp.parallel('js'))
        .on('change', function(path) {
            console.log('Changed: ' + path);
            // code to execute on change
        })
});


// default task
gulp.task('default', gulp.series('sass', 'js', 'watch', function () {
    //some code
}));