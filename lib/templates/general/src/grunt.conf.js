var pkg = require('./package');

module.exports = {

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Setup
    init: {
        // Select a preprocessor       - OPTIONS: none, compass
        style: 'compass',

        // Select a deploy method      - OPTIONS: none, ftp-deploy, rsync
        deploy: 'none'
    },

    // Folders
    dist: {
        main:    '../',
        styles:  'assets/styles',
        scripts: 'assets/scripts',
        images:  'assets/images',
        fonts:   'assets/fonts'
    },
    src: {
        main:    '../',
        styles:  'assets/styles',
        scripts: 'assets/scripts',
        images:  'assets/images',
        fonts:   'assets/fonts'
    },

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Browser Sync
    syncFiles: [
        '../assets/styles/style.css',
        '../assets/scripts/app.min.js',
        '../*.{php, html}'
    ],

    // Uglify
    minifyFiles: ['../scripts/**/*.js'],

    // Lint
    lintFiles: ['Gruntfile.js', '../scripts/app.js'],

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
