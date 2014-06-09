///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

'use strict';

module.exports = {

    // PATHS
    paths: {
        src: {
            script: 'app/assets/scripts',
            style: 'app/assets/styles',
            views: 'app/views'
        },
        dist: {
            script: 'public/scripts',
            style: 'public/styles',
            images: 'public/images',
            views: 'public/views'
        },
        vendors: 'vendors'
    },

    // TASKS
    task: {
        banner: [
            '/**',
            ' * -------------------------------------------------------',
            ' * <%= pkg.title %> - <%= pkg.description %>',
            ' * @version v<%= pkg.version %>',
            ' * @link    <%= pkg.homepage %>',
            ' * @license <%= pkg.license %>',
            ' * -------------------------------------------------------',
            ' */',
            ''
        ].join('\n'),
        // load: {
        //     pattern: 'gulp-*',
        //     config: 'package.json',
        //     scope: ['devDependencies'],
        //     replaceString: 'gulp-',
        //     camelize: false,
        //     lazy: true
        // },
        nodemon: {
            script: 'app.js',
            ext: 'js',
            ignore: ['gulpfile.js', 'public/', 'node_modules/'],
            verbose: true
        },
        watch: [
            'app/assets/styles/**/*.styl',
            'app/views/**/*.jade',
            'public/scripts/**/*.js'
        ],
        lint: [
            'app/assets/scripts/**/*.js',
            'app/controllers/**/*.js',
            'app/models/**/*.js',
            'app/routes/**/*.js',
            'spec/**/*.js',
            'public/scripts/**/*.js'
        ],
        minify: 'app/assets/scripts/main.js',
        compile: 'app/assets/styles/**/*.styl',
        images: 'public/images/**/*',
        clean: [
            '!public/scripts/main.js',
            'public/scripts/**/*.min.js',
            'public/styles/**/*.css',
            'public/styles/**/*.min.css'
        ],
        test: 'spec/**/*.js',
        karma: {
            files: [
                'spec/**/*.js',
                'public/scripts/modules/**/*.js'
            ],
            config: 'config/test.js'
        },
        bundle: 'public/scripts/modules/**/*.js',
        shims: {
            'ng': {
                path: '../public/scripts/vendors/angular/angular.js',
                exports: 'ng'
            },
            'ngRoute': {
                path: '../public/scripts/vendors/angular-route/angular-route.js',
                exports: 'ngRoute',
                depends: {
                    ng: 'ng'
                }
            },
            'ngResource': {
                path: '../public/scripts/vendors/angular-resource/angular-resource.js',
                exports: 'ngResource',
                depends: {
                    ng: 'ng'
                }
            }
        }
    },

    // MESSAGES
    messages: {
        fail: function (error) {
            return console.log('Something went wrong: %s', error.message);
        },
        success: function (task) {
            return console.log('%s complete!', task);
        },
    }
};
