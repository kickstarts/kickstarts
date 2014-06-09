module.exports = {

    // -------------------------------------------------------------------------------------
    // STRUCTURE CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Folders
    dist: {
        main:    '../',
        styles:  '../assets/styles',
        scripts: '../assets/scripts',
        images:  '../assets/images',
        fonts:   '../assets/fonts'
    },
    src: {
        main:    '../',
        styles:  '../assets/styles',
        scripts: '../assets/scripts',
        images:  '../assets/images',
        fonts:   '../assets/fonts'
    },

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Browser Sync
    sync: [
        '../assets/styles/style.css',
        '../assets/scripts/main.min.js',
        '../**/*.php'
    ],

    // UglifyJS
    minify: ['../assets/scripts/**/*.js'],

    // JSHint
    lint: {
        script: ['Gruntfile.js', '../assets/scripts/main.js'],
        style: '../assets/styles/style.css'
    },

    // FTP Deploy
    deploy: {
        host: 'ftp.host.com',
        port: 21,
        auth: 'key1',
        src: '../**',
        dest: '/host/web/',
        ignore: [
            '../@*',
            '../**/.DS_Store',
            '../**/Thumbs.db',
            '../.git/*',
            '../.gitignore',
            '../.editorconfig',
            '../assets/styles/**',
            '../assets/scripts/**',
            '!../assets/styles/style.css',
            '!../assets/scripts/main.min.js',
            '!../assets/scripts/vendors/**',
            // '../assets/fonts/*.zip',
            '../src/**',
            '../*.md',
            '../htaccess.txt'
        ]
    },

    // Share
    share: {
        files: [
            '!../src/.sass-cache',
            '!../src/node_modules',
            '!../src/components',
            '../src/**'
        ],
        dist: '../_build/'
    }
};
