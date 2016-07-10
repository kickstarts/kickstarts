///////////////////////////////////////////
// TASK CONFIGURATION                    //
///////////////////////////////////////////

'use strict';

var pkg  = require('../package'),
    path = require('path');

module.exports = {

    // Paths
    path: {
        script: 'public/assets/scripts',
        style:  'public/assets/styles',
        images: 'public/assets/images',
        views:  'public'
    },

    // Nodemon Config
    nodemon: {
        script: path.join(__dirname, '../server.js'),
        ext: 'js',
        ignore: [
            path.join(__dirname, '../Gruntfile.js'),
            path.join(__dirname, '../public'),
            path.join(__dirname, '../node_modules')
        ]
    },

    // Watch Config
    watch: {
        scripts: ['./client/*.js', './server/**/*.js', './config/**/*.js'],
        styles:  './assets/styles/**/*.styl',
        views:   './server/views/**/*.jade'
    },

    // JSHint Config
    jshint: {
        all: [
            // './vendors/**/*.js',
            './config/*.js',
            './test/{client,server}/*.js',
            './server/**/*.js',
            './client/*.js'
        ],
        options: {
            jshintrc: '.jshintrc'
        }
    },

    // Browserify Config
    browserify: {
        files: {
            './public/assets/scripts/bundle.js': ['./client/app.js']
        },
        options: {
            transforms: ['jadeify']
        }
    },

    // UglifyJS Config
    uglify: {
        files: {
            './public/assets/scripts/bundle.min.js':  ['./public/assets/scripts/bundle.js'],
        },
        options: {
            compress: true,
            mangle: false,
            banner: [
                '/**',
                ' * -------------------------------------------------------',
                ' * ' + pkg.title + ' - ' + pkg.description,
                ' * @version v' + pkg.version,
                ' * @link    ' + pkg.homepage,
                ' * @license ' + pkg.license,
                ' * -------------------------------------------------------',
                ' */',
                ''
            ].join('\n')
        }
    },

    // Stylus Config
    compile: './assets/styles/**/*.styl',

    // Imagemin Config
    imagemin: './public/images/**/*.{jpg,png}',

    // Karma Config
    karma: {
        setup: 'test.js',
        coveralls: './test/coverage'
    },

    // Share Config (include clean, copy and compress tasks)
    share: {
        clean: [
            '!./public/assets/scripts/bundle.js',
            './public/assets/scripts/**/*.min.js',
            '!./public/assets/styles/**/*.css',
            './public/assets/styles/**/*.min.css'
        ],
        copy: ['!../node_modules'],
        dist: '../_build/'
    }
};
