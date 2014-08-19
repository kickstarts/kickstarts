module.exports = {

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Browser Sync
    sync: {
        bsFiles: {
            src: [
                '../assets/styles/style.css',
                '../assets/scripts/main.min.js',
                '../**/*.php'
            ],
        },
        options: {
            watchTask: true,
            ghostMode: {
                clicks: true,
                scroll: true,
                links: true,
                forms: true
            }
        }
    },

    // Watch
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: '../assets/styles/**/*.scss',
            tasks: 'compass'
        },
        js: {
            files: ['Gruntfile.js', '../assets/scripts/main.js'],
            tasks: ['jshint', 'browserify', 'uglify']
        }
    },

    // Browserify
    bundle: {
        files: {
            '../assets/scripts/bundle.js': ['../assets/scripts/main.js']
        }
    },

    // UglifyJS
    minify: {
        options: {
            compress: true,
            mangle: false
        },
        dist: {
            files: {
                '../assets/scripts/main.min.js': [
                    '../assets/scripts/vendors/*.js',
                    '../assets/scripts/libs/*.js',
                    '../assets/scripts/legacy/*.js',
                    '../assets/scripts/bundle.js'
                ]
            }
        }
    },

    // JSHint
    lint: {
        options: {
            jshintrc: '.jshintrc'
        },
        all: ['Gruntfile.js', '../assets/scripts/main.js']
    },

    // Compass
    compass: {
        options: {
            force: false,
            // require: []
            // banner: config.banner,
            sassDir: '../assets/styles',
            cssDir: '../assets/styles',
            javascriptsDir: '../assets/scripts',
            fontsDir: '../assets/fonts',
            imagesDir: '../assets/images',
            outputStyle: 'compressed'
        }
    },

    // FTP Deploy
    deploy: {
        auth: {
            host: 'ftp.host.com',
            port: 21,
            auth: 'key1'
        },
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
        files: [
            {
                expand: true,
                src: [
                    '!../src/.sass-cache',
                    '!../src/node_modules',
                    '!../src/components',
                    '../src/**'
                ],
                dest: '../_build/'
            },
        ]
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
