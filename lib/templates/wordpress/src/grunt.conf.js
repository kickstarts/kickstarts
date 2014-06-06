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
        '../assets/scripts/app.min.js',
        '../**/*.{php,html}'
    ],

    // UglifyJS
    minify: ['../assets/scripts/**/*.js'],

    // JSHint
    lint: {
        script: ['Gruntfile.js', '../assets/scripts/app.js'],
        style: '../assets/styles/style.css'
    }
};
