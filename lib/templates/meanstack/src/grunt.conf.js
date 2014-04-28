var pkg = require('./package');

module.exports = {

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Setup
    init: {
        // Select a Template Engine    - OPTIONS: none, jade, handlebars
        view: 'none',

        // Select a preprocessor       - OPTIONS: none, compass, stylus, less
        style: 'stylus',

        // Select a JavaScript module  - OPTIONS: none, umd, requirejs, browserify
        module: 'none',

        // Select a deploy method      - OPTIONS: none, ftp-deploy, rsync
        deploy: 'none',

        // Select a unit test tool     - OPTIONS: none, mocha, jasmine, qunit
        test: 'none',

        // Would you like to use Karma?
        karma: true,

        // Select a development side   - OPTIONS: client, server, both
        side: 'client'
    },

    // Folders
    modules: 'app/scritps/modules',
    requires: 'app/scripts/requires',
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
    syncFiles: [
        'public/styles/style.css',
        'public/scripts/app.min.js',
        'public/*.{php, html}'
    ],

    // Uglify
    minifyFiles: ['app/scripts/**/*.js'],

    // Lint
    lintFiles: ['Gruntfile.js', 'app/scripts/main.js'],

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

    // Modules
    transforms: [
        'hsbfy',
        'es6fy',
        'coffefy',
        'debowerify',
        'decomponentify',
        'deamdify',
        'deglobalify'
    ],
    dependencies: {
        'default': [''],
        global: ['jquery'],
        amd: [''],
        cjs: ['']
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
