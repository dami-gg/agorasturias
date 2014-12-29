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
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css');

// Concatenate & Minify JS
gulp.task('js', function() {
    gulp.src('./dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(addsrc('./dev/lib/*.js'))
        .pipe(order([
                'dev/lib/jquery.min-1.11.1.js',
                'dev/lib/bootstrap.min.js',
                'dev/lib/angular.min-1.2.25.js',
                'dev/lib/angular-ui-router.min-0.2.8.js',
                'dev/lib/ui-bootstrap-tpls-0.11.2.min.js',
                'dev/lib/wallop-slider-directive.js',
                'dev/js/app.js'
            ], { base: './' }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(notify({ message: 'JS task complete' }));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('dev/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/css'))
        .pipe(notify({ message: 'Sass task complete' }));
});

// Concatenate & Minify CSS
gulp.task('css', function() {
    gulp.src('./dev/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(notify({ message: 'CSS task complete' }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/*.js', ['js']);
    gulp.watch('dev/sass/*.scss', ['sass']);
    gulp.watch('dev/css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['js', 'sass', 'css', 'watch']);