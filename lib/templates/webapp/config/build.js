///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

'use strict';

module.exports = {

    // PATHS
    paths: {
        src: {
            script: 'public/app',
            style:  'public/assets/styles',
            views:  'public/app/templates'
        },
        dist: {
            script: 'public/assets/scripts',
            style:  'public/assets/styles',
            images: 'public/assets/images',
            views:  'public'
        }
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
            '{app,public}/assets/styles/**/*.styl',
            'public/app/templates/**/*.jade',
            'public/app/**/*.js'
        ],
        lint: [
            'app/assets/scripts/**/*.js',
            'app/controllers/**/*.js',
            'app/models/**/*.js',
            'app/routes/**/*.js',
            'spec/**/*.js',
            'public/app/**/*.js'
        ],
        minify:  'app/assets/scripts/bundle.js',
        bundle:  'public/app/app.js',
        compile: 'app/assets/styles/**/*.styl',
        images:  'public/images/**/*',
        clean: [
            '!public/scripts/bundle.js',
            'public/scripts/**/*.min.js',
            '!public/styles/**/*.css',
            'public/styles/**/*.min.css'
        ],
        test: 'spec/**/*.js',
        karma: {
            files: [
                'spec/**/*.js',
                'public/scripts/modules/**/*.js'
            ],
            config: __dirname + '/config/test.js'
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
