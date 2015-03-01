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
    minifyCSS = require('gulp-minify-css'),
    ngmin = require('gulp-ngmin');
    minifyHTML = require('gulp-minify-html');

// Concatenate & Minify JS
gulp.task('js', function() {
    gulp.src('./dev/app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(addsrc('./dev/app/components/home/*.js'))
        .pipe(addsrc('./dev/app/components/admin/*.js'))
        .pipe(addsrc('./dev/app/components/shop/*.js'))
        .pipe(addsrc('./dev/app/components/partners/*.js'))
        .pipe(addsrc('./dev/app/components/book/*.js'))
        .pipe(addsrc('./dev/app/components/contact/*.js'))
        .pipe(addsrc('./dev/app/components/team/*.js'))
        .pipe(addsrc('./dev/app/components/account/*.js'))
        .pipe(addsrc('./dev/app/shared/*.js'))
        .pipe(order([
                'dev/app/app.js',
                'dev/app/components/home/carouselController.js',
                'dev/app/components/home/postsController.js',
                'dev/app/components/home/postViewerController.js',
                'dev/app/components/partners/sponsorsController.js',
                'dev/app/components/admin/newPostController.js',
                'dev/app/components/admin/editPostController.js',
                'dev/app/components/admin/fileUploaderController.js',
                'dev/app/components/admin/menusController.js',
                'dev/app/components/admin/sectionsController.js',
                'dev/app/components/book/bookController.js',
                'dev/app/components/contact/formController.js',
                'dev/app/components/team/thumbnailsController.js',
                'dev/app/components/shop/product.js',
                'dev/app/components/shop/shop.js',                
                'dev/app/components/shop/cart.js',
                'dev/app/components/shop/shopController.js',
                'dev/app/components/shop/shopService.js',     
                'dev/app/components/account/profileController.js',
                'dev/app/shared/mainController.js',
                'dev/app/shared/loginService.js',
                'dev/app/shared/apiConnectionFactory.js',
                'dev/app/shared/navigationController.js',
                'dev/app/shared/partitionService.js',
                'dev/app/shared/htmlSafeFilter.js'
            ], { base: './' }))
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dev/js'))
        .pipe(notify({ message: 'JS APP task complete' }));

    gulp.src('./dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(addsrc('./dev/lib/*.js'))
        .pipe(order([
                'dev/lib/jquery.min-1.11.1.js',
                'dev/lib/angular.min-1.2.25.js',
                'dev/lib/angular-ui-router.min-0.2.8.js',
                'dev/lib/angular-translate.min.js',
                'dev/lib/angular-translate-loader-url.min.js',
                'dev/lib/angular-cookies.min.js',
                'dev/lib/angular-resource.min.js',
                'dev/lib/angular-animate.min.js',
                'dev/lib/angular-sanitize.min.js',
                'dev/lib/angular-social-links.js',
                'dev/lib/angular-translate-storage-cookie.min.js',
                'dev/lib/ngToast.min.js',
                'dev/lib/bootstrap.min.js',
                'dev/lib/ui-bootstrap-tpls-0.11.2.min.js',
                'dev/lib/wallop-slider-directive.js',
                'dev/lib/angular-file-upload.min.js',
                'dev/lib/ng-ckeditor.min.js',
                'dev/js/build.js',
                'dev/js/functions.js'
            ], { base: './' }))
        .pipe(concat('all.js'))
        .pipe(ngmin())
        .pipe(gulp.dest('public/js'))
        .pipe(uglify({mangle: false}))
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(notify({ message: 'JS ALL task complete' }));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('dev/sass/*.scss')
        .pipe(sass({'sourcemap=none': true, // What the crap is this ugly garbage?
                        cacheLocation: '/dev/.sass-cache'}))
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

// Minify HTML files
gulp.task('html', function() {
    var opts = { comments:false };

    gulp.src('./dev/index.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('.'));

    gulp.src('./dev/html/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('public/views/'))
        .pipe(notify({ message: 'HTML task complete' }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/app/shared/*.js', ['js']);
    gulp.watch('dev/app/components/*/*.js', ['js']);
    gulp.watch('dev/app/*.js', ['js']);
    gulp.watch('dev/js/functions.js', ['js']);
    gulp.watch('dev/sass/*.scss', ['sass']);
    gulp.watch('dev/css/*.css', ['css']);
    gulp.watch('dev/index.html', ['html']);
    gulp.watch('dev/html/*.html', ['html']);
});

// Default Task
gulp.task('default', ['js', 'sass', 'css', 'html', 'watch']);
