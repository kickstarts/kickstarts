'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    __     = require('gulp-load-plugins')(),
    ftp    = require('vinyl-ftp');

var deploy = {
    'ftp': {
        'host':     'ftp.domain.com.br',
        'user':     '',
        'password': '',
        'parallel': 10,
        'dest':     './public_html',
        'log':      gutil.log
    },
    'rsync': {
        'root': './www',
        'hostname': 'ftp.domain.com.br',
        'destination': './public_html'
    },
    'paths': [
        'assets/fonts/*',
        'assets/images/*',
        'assets/scripts/main.min.js',
        'assets/styles/main.min.css',
        'includes/*',
        '*.{php,html,md,txt}'
    ]
}


///////////////////////////////////////////
// DEPLOYS                               //
///////////////////////////////////////////

// Deploy using FTP
gulp.task('deploy:ftp', function() {

    var conn = ftp.create(deploy.ftp);

    return gulp.src(deploy.paths, { base: './www', buffer: false })
        .pipe(conn.newer(deploy.ftp.dest))
        .pipe(conn.dest(deploy.ftp.dest));

});

// Deploy using Rsync / SSH
gulp.task('deploy:rsync', function() {
    return gulp.src(deploy.paths)
        .pipe(__.rsync(deploy.rsync));
});
