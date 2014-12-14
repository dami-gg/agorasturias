// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    order = require('gulp-order'),
    addsrc = require('gulp-add-src'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

// Concatenate & Minify JS
gulp.task('js', function() {
    gulp.src('./js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(addsrc('./js/vendor/*.js'))
        .pipe(order([
                'js/vendor/jquery.min-1.11.1.js',
                'js/vendor/bootstrap.min.js',
                'js/vendor/angular.min-1.2.25.js',
                'js/vendor/angular-ui-router.min-0.2.8.js',
                'js/vendor/ui-bootstrap-tpls-0.11.2.min.js',
                'js/app.js'
            ], { base: './' }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'JS task complete' }));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Sass task complete' }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['js', 'sass', 'watch']);