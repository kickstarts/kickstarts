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
                '../assets/styles/style.css',
                '../assets/scripts/main.min.js',
                '../**/*.php'
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
            files: '../assets/styles/**/*.scss',
            tasks: ['compass', 'csslint']
        },
        js: {
            files: ['Gruntfile.js', '../assets/scripts/modules/*.js', '../assets/scripts/main.js'],
            tasks: ['jshint', 'browserify', 'uglify']
        }
    },


    // BUILD JS
    // -----------------------------------------------------------

    // Browserify
    bundle: {
        files: {
            '../assets/scripts/bundle.js': ['../assets/scripts/main.js']
        }
    },

    // UglifyJS
    minify: {
        options: {
            // compress: true,
            mangle: false
        },
        files: {
            '../assets/scripts/main.min.js': [
                '../assets/scripts/vendors/*.js',
                '../assets/scripts/libs/*.js',
                // '../assets/scripts/legacy/*.js',
                '../assets/scripts/bundle.js'
            ]
        }
    },


    // BUILD CSS
    // -----------------------------------------------------------

    // Compass
    compass: {
        options: {
            force: false,
            sassDir: '../assets/styles',
            cssDir: '../assets/styles',
            javascriptsDir: '../assets/scripts',
            fontsDir: '../assets/fonts',
            imagesDir: '../assets/images',
            outputStyle: 'compressed'
        }
    },

    // ASSETS
    // -----------------------------------------------------------

    // Optimize Images
    images: {
        dist: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: '../assets/images/',
                src: ['**/*.{png,jpg,jpeg}'],
                dest: '../assets/images/'
            }]
        }
    },

    // SVG Minify
    svgs: {
        options: {
            plugins: [
                {removeViewBox: false },
                { removeUselessStrokeAndFill: false }
            ]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '../assets/images',
                src: ['*.svg'],
                dest: '../assets/images'
            }]
        }
    },

    // Generate Icons
    icons: {
        files: [{
            expand: true,
            cwd: '../assets/images',
            src: ['*.svg', '*.png'],
            dest: '../assets/styles/modules/icons'
        }],
        options: {
            datasvgcss: 'icons.data.svg.css',
            datapngcss: 'icons.data.png.css',
            urlpngcss: 'icons.fallback.css',
            previewhtml: 'preview.html',
            loadersnippet: 'icons.txt',
            pngpath: '../assets/styles/modules/icons/png'
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
            '../assets/scripts/modules/*.js',
            '../assets/scripts/main.js'
        ]
    },

    // CSSLint
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        strict: {
            options: {},
            src: ['../assets/styles/*.css']
        },
        lax: {
            options: {}
            // src: ['../assets/styles/*.css']
        }
    },

    // QUnit
    spec: '../spec/index.html',


    // DEPLOY PROJECT
    // -----------------------------------------------------------

    // FTP Deploy
    ftp: {
        auth: {
            host: 'ftp.host.com',
            port: 21,
            auth: 'key1'
        },
        src: '../**',
        dest: '/host/web/',
        ignore: [
            '../_build/*',
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
            '../assets/fonts/*.zip',
            '../src/**',
            '../*.md',
            '../htaccess.txt'
        ]
    },

    // Shell Commands
    // Reference: http://docs.aws.amazon.com/gettingstarted/latest/computebasics-linux/getting-started-deploy-app-connect-linux.html
    shell: {
        ec2: {
            command: 'ssh -i mykeypair.pem ec2-user@ec2-184-72-209-110.compute-1.amazonaws.com'
        }
    },

    // Rsync Deploy
    rsync: {
        options: {
            args: ['--verbose'],
            exclude: [
                '../_build/*',
                '../**/.DS_Store',
                '../.git/*',
                '../.gitignore',
                '../.editorconfig',
                '../.jshintrc',
                '../assets/styles/**',
                '../assets/scripts/**',
                '../src/**',
                '../README.md',
                '../htaccess.txt',
                '!../assets/styles/style.css',
                '!../assets/scripts/main.min.js'
            ],
            recursive: true,
            syncDest: true
        },
        staging: {
            options: {
                src: '../',
                dest: '~/PATH/to/project/',
                host: 'user@host.com',
            }
        },
        production: {
            options: {
                src: '../',
                dest: '~/PATH/to/project/',
                host: 'user@host.com',
            }
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
                    '../assets/images',
                    '../assets/fonts',
                    '../assets/scripts/main.min.js',
                    '../assets/styles/style.css',
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
