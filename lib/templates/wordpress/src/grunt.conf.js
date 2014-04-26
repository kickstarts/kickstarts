var pkg = require('./package');

module.exports = {

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Setup
    init: {
        view:   'none',       // Select a Template Engine    - OPTIONS: none, jade, handlebars
        style:  'stylus',     // Select a preprocessor       - OPTIONS: none, compass, stylus, less
        module: 'none',       // Select a JavaScript module  - OPTIONS: none, umd, requirejs, browserify
        deploy: 'ftp-deploy', // Select a deploy method      - OPTIONS: none, ftp-deploy, rsync
        test:   'mocha',      // Select a unit test tool     - OPTIONS: mocha, jasmine, qunit
        side:   'both',       // Select a dev side           - OPTIONS: client, server, both
        env:    '--dev',      // Choose an envinroment       - OPTIONS: --dev, --prod
        utils:  false         // Would you like to use utils tasks (copy, clean, compress) ?
    },

    // Folders
    modules: 'app/scritps/modules',
    test: {
        main:    'spec',

        helpers: 'spec/helpers',
        modules: 'spec/modules'
    },
    dist: {
        main:    'public',
        styles:  'public/styles',
        scripts: 'public/scripts',
        images:  'public/images',
        fonts:   'public/fonts'
    },
    src: {
        main:    'app',
        views:   'app/views',
        styles:  'app/styles',
        scripts: 'app/scripts',
        images:  'app/images',
        fonts:   'app/fonts'
    },

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Browser Sync
    sync: {
        files: [
            'public/styles/style.css',
            'public/scripts/app.min.js',
            'public/*.{php, html}'
        ]
    },

    // Deploy
    deploy: {
        host: 'ftp.domain.com',
        port: 21,
        src:  'public/',
        dest: 'public/www',
        ignore: [
            '.git*',
            '*.scss',
            'node_modules'
        ]
    },

    // Uglify
    minify: {
        files: ['app/scripts/**/*.js']
    },

    // Lint
    lint: {
        files: ['Gruntfile.js', 'app/scripts/main.js']
    },

    // Banner
    banner: '\n' +
    '/*\n' +
    ' * -------------------------------------------------------\n' +
    ' * ' + pkg.title + ' - v' + pkg.version + '\n' +
    ' *\n' +
    ' * Copyright (c) <%= grunt.template.today(\"yyyy\") %> ' + pkg.author.name + '\n' +
    ' * -------------------------------------------------------\n' +
    ' */\n' +
    '\n'
};
