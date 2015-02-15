module.exports = {

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------



    // SYNC AND WATCH FILE
    // -----------------------------------------------------------

    // Browser Sync
    sync: {
        bsFiles: {
            src: [
                '../public/assets/styles/style.css',
                '../public/assets/scripts/main.min.js',
                '../app/views/**/*.php'
            ],
        },
        options: {
            watchTask: true
        }
    },

    // Watch
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: '../public/assets/styles/**/*.scss',
            tasks: ['compass', 'csslint']
        },
        js: {
            files: ['Gruntfile.js', '../public/assets/scripts/modules/*.js', '../public/assets/scripts/main.js'],
            tasks: ['jshint', 'browserify', 'uglify']
        }
    },


    // BUILD JS
    // -----------------------------------------------------------

    // Browserify
    bundle: {
        files: {
            '../public/assets/scripts/bundle.js': ['../public/assets/scripts/app.js']
        }
    },

    // UglifyJS
    minify: {
        options: {
            // compress: true,
            mangle: false
        },
        files: {
            '../public/assets/scripts/app.min.js': [
                '../public/assets/scripts/vendors/*.js',
                '../public/assets/scripts/libs/*.js',
                '../public/assets/scripts/legacy/*.js',
                '../public/assets/scripts/bundle.js'
            ]
        }
    },


    // BUILD CSS
    // -----------------------------------------------------------

    // Compass
    compass: {
        options: {
            force: false,
            sassDir: '../public/assets/styles',
            cssDir: '../public/assets/styles',
            javascriptsDir: '../public/assets/scripts',
            fontsDir: '../public/assets/fonts',
            imagesDir: '../public/assets/images',
            outputStyle: 'compressed'
        }
    },


    // SPEC & LINT
    // -----------------------------------------------------------

    // JSHint
    jslint: {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
            'Gruntfile.js',
            '../public/assets/scripts/modules/*.js',
            '../public/assets/scripts/main.js'
        ]
    },

    // CSSLint
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: {
            src: ['../public/assets/styles/style.css']
        }
    },


    // SHARE PROJECT
    // -----------------------------------------------------------

    // Clean
    clean: {
        files: [
            '!../src/.sass-cache',
            '!../src/node_modules',
            '!../src/components',
            '../src/**'
        ],
        dist: '../_build/'
    },

    // Copy
    copy: {
        dev: {
            files: {
                expand: true,
                src: [
                    '!src/.sass-cache',
                    '!src/node_modules',
                    '!src/components',
                    'src/**',
                    '../**'
                ],
                dest: '../_build/'
            },
        },
        dist: {
            files: {
                expand: true,
                src: [
                    '!/src/**',
                    '!.*',
                    '!htaccess.txt',
                    'README.md',
                    '../public/assets/images',
                    '../public/assets/fonts',
                    '../public/assets/scripts/main.min.js',
                    '../public/assets/styles/style.css',
                    '../ie',
                    '../*.{html,php}',
                    '../includes',
                ],
                dest: '../_build/'
            },
        }
    },

    // Compress
    compress: {
        options: {
            mode: 'zip'
        },
        expand: true,
        cwd: '../_build/',
        src: ['**/*'],
        dest: '../_build/'
    }

};
