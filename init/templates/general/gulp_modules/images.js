'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp     = require('gulp'),
    __       = require('gulp-load-plugins')(),
    sync     = require('browser-sync').create(),
    pngquant = require('imagemin-pngquant');


var imgOptions = {
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
};


///////////////////////////////////////////
// IMAGES                                //
///////////////////////////////////////////

gulp.task('images:optimize', function () {
    return gulp.src('./www/assets/images')
        .pipe(imagemin(imgOptions))
        .pipe(gulp.dest('./www/assets/images/opt'))
        .pipe(sync.stream());
});
