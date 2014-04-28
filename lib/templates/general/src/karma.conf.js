// Karma configuration
// Generated on Thu Dec 12 2013 21:30:26 GMT-0500 (EST)

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: process.cwd(),


        // frameworks to use
        frameworks: ['mocha'],


        plugins: [
            'karma-jasmine',
            'karma-mocha',
            'karma-qunit',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        preprocessors: {
            'app/**/*.js': 'coverage'
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage'
        },


        // list of files / patterns to load in the browser
        // NOTE: do NOT include jasmine here because grunt-karma already does
        files: [
            // You can optionally remove this or swap out for a different expect.
            'vendor/bower/chai/chai.js',
            'vendor/bower/requirejs/require.js',
            'test/runner.js',

            { pattern: 'app/**/*.*', included: false },
            // Derives test framework from Karma configuration.
            {
                pattern: 'test/<%= karma.options.frameworks[0] %>/**/*.spec.js',
                included: false
            },
            { pattern: 'vendor/**/*.js', included: false }
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


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
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
