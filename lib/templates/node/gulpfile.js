// Include gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-styl');
var jade   = require('gulp-jade');
var uglify = require('gulp-uglify');

// Include Paths
var paths = {
    src: {
        views: "./assets/views/",
        styles: "./assets/styles/",
        scripts: "./assets/scripts/",
        images: "./assets/images/",
    },
    dist: {
        views: "./public/",
        styles: "./public/css/",
        scripts: "./public/js/",
        images: "./public/images/"
    }
};

// Lint Scripts
gulp.task('lint', function() {
    gulp.src(paths.src.scripts + '*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile CSS
gulp.task('compile', function() {
    gulp.src(paths.src.styles + 'style.styl')
        .pipe(stylus())
        .pipe(gulp.dest(paths.dist.styles));
});

// Concatenate & Minify JS
gulp.task('minify', function() {
    gulp.src(paths.src.scripts + '*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.scripts));
});

// Compile Templates
gulp.task('template', function() {
    gulp.src(paths.src.views + '*.jade')
        .pipe(jade())
        .pipe(gulp.dest(paths.dist.views));
});

// Copy all static assets
gulp.task('copy', function() {
    gulp.src(paths.src.images + '*')
        .pipe(gulp.dest(paths.dist.images));

    gulp.src(paths.src.scripts + 'vendor/**')
        .pipe(gulp.dest(paths.dist.scripts));
});

// Default Task
gulp.task('default', function(){
    gulp.run('compile', 'lint', 'minify', 'template', 'copy');

    // Watch files and run tasks if they change
    gulp.watch('./assets/**', function(){
        gulp.run('compile', 'lint', 'minify', 'template', 'copy');
    });
});
