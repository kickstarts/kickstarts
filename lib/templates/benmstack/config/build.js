///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

'use strict';

module.exports = {

    // PATHS
    dist: {
        script: 'public/assets/scripts',
        style:  'public/assets/styles',
        images: 'public/assets/images',
        views:  'public'
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
            'public/assets/styles/style.css',
            'public/assets/scripts/bundle.min.js',
            'public/*.html'
        ],
        lint: [
            // 'vendors/**/*.js',
            'config/*.js',
            'spec/{client,server}/*.js',
            'server/**/*.js',
            'client/scripts/**/*.js'
        ],
        bundle: {
            src: 'client/scripts/app.js',
            shims: []
        },
        minify:  'public/assets/scripts/bundle.js',
        compile: 'app/assets/styles/**/*.styl',
        images:  'public/images/**/*',
        clean: [
            '!public/assets/scripts/bundle.js',
            'public/assets/scripts/**/*.min.js',
            '!public/assets/styles/**/*.css',
            'public/assets/styles/**/*.min.css'
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
