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
        watch: [
            'public/assets/styles/style.css',
            'public/assets/scripts/bundle.min.js',
            'public/*.html'
        ],
        lint: [
            // 'vendors/**/*.js',
            'app/scripts/**/*.js',
            'spec/**/*.js',
            'config/*.js'
        ],
        bundle:  {
            src: 'app/scripts/app.js',
            shims: []
        },
        minify:  'app/assets/scripts/bundle.js',
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
