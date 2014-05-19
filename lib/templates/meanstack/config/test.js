
'use strict';

///////////////////////////////////////////
// KARMA CONFIGURATION                   //
///////////////////////////////////////////

var path = require('path');

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: path.join('../', process.cwd()),


        // frameworks to use
        frameworks: ['mocha', 'browserify'],


        // preprocessors
        preprocessors: {
            'public/scripts/modules/*.js': ['coverage'],
            'spec/*': ['browserify']
        },


        // list of files / patterns to load in the browser
        files: [
            // You can optionally remove this or swap out for a different expect.
            'public/scripts/vendor/chai/chai.js',
            'spec/**/*.js',
            { pattern: 'app/**/*.*', included: false },
            { pattern: 'test/<%= karma.options.frameworks[0] %>/**/*.spec.js', included: false },
            { pattern: 'public/scripts/vendor/**/*.js', included: false }
        ],


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        // reporters: ['progress'],
        reporters: ['progress', 'coverage'],


        // web server port
        // CLI --port 9876
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        // CLI --single-run --no-single-run
        singleRun: false,


        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,


        // plugins to Load
        plugins: ['karma-*'],


        // Configs
        browserify: {
            // extensions: ['.coffee'],
            // ignore: [],
            // transform: ['coffeeify'],
            // debug: true,
            // noParse: ['jquery'],
            watch: true
        },

        coverageReporter: {
            type: 'html',
            dir: 'spec/coverage/'
        }

    });
};
