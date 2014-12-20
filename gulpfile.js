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
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css');

// Concatenate & Minify JS
gulp.task('js', function() {
    gulp.src('./assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(addsrc('./assets/lib/*.js'))
        .pipe(order([
                'assets/lib/jquery.min-1.11.1.js',
                'assets/lib/bootstrap.min.js',
                'assets/lib/angular.min-1.2.25.js',
                'assets/lib/angular-ui-router.min-0.2.8.js',
                'assets/lib/ui-bootstrap-tpls-0.11.2.min.js',
                'assets/js/app.js'
            ], { base: './' }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist'))
        .pipe(notify({ message: 'JS task complete' }));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({ message: 'Sass task complete' }));
});

// Concatenate & Minify CSS
gulp.task('css', function() {
    gulp.src('./assets/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('assets/dist'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('assets/dist'))
        .pipe(notify({ message: 'CSS task complete' }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/sass/*.scss', ['sass']);
    gulp.watch('assets/css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['js', 'sass', 'css', 'watch']);