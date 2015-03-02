'use strict';

module.exports = {

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------



    // SYNC AND WATCH FILE
    // -----------------------------------------------------------

    // Watch
    watch: {
        css: {
            files: ['../assets/styles/**/*.scss', '../assets/styles/*.css'],
            tasks: ['compass', 'csscomb', 'csslint', 'cssmin']
        },
        js: {
            files: ['Gruntfile.js', '../assets/scripts/modules/*.js', '../assets/scripts/main.js'],
            tasks: ['jshint', 'browserify', 'uglify']
        }
    },

    // Browser Sync
    sync: {
        bsFiles: {
            src: [
                '../assets/styles/style.min.css',
                '../assets/scripts/main.min.js',
                '../**/*.php'
            ],
        },
        options: {
            watchTask: true
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
    uglify: {
        options: {
            // compress: true,
            mangle: false
        },
        files: {
            '../assets/scripts/main.min.js': [
                // '../assets/scripts/vendor/*.js',
                // '../assets/scripts/libs/*.js',
                '../assets/scripts/bundle.js'
            ]
        }
    },


    // BUILD CSS
    // -----------------------------------------------------------

    // Compile
    compass: {
        options: {
            force: true,
            sassDir: '../assets/styles',
            cssDir: '../assets/styles',
            javascriptsDir: '../assets/scripts',
            fontsDir: '../assets/fonts',
            imagesDir: '../assets/images',
            outputStyle: 'expanded'
        }
    },

    // Organize
    csscomb: {
        options: {
            config: '.csscomb'
        },
        files: {
            '../assets/styles/style.sorted.css': ['../assets/styles/style.css']
        }
    },

    // Minify
    cssmin: {
        files: {
            '../assets/styles/style.min.css': ['../assets/styles/style.sorted.css']
        }
    },


    // ASSETS
    // -----------------------------------------------------------

    // Optimize Images
    images: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: '../assets/images/',
            src: ['**/*.{png,jpg,jpeg}'],
            dest: '../assets/images/'
        }]
    },

    // SVG Minify
    svgs: {
        options: {
            plugins: [
                { removeViewBox: false },
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
            src: ['../assets/styles/style.css']
        }
    },

    // Mocha
    spec: '../spec/**/*.js',


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
    shell: {
        mycmd: {
            command: ''
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

    git: {
        options: {
            files: ['package.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['package.json'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'upstream',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
            globalReplace: false
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
                    '../assets/styles/style.min.css',
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
    },


    // TRANSLATE
    // -----------------------------------------------------------

    // Generate POT file
    makepot: {
        options: {
            cwd: '..',
            domainPath: 'languages/',
            type: 'wp-theme', // options: wp-theme, wp-plugin
            potFilename: 'textdomain.pot',
            processPot: function(pot) {
                var translation,
                    excluded_meta = [
                        'Plugin Name of the plugin/theme',
                        'Theme Name of the plugin/theme',
                        'Plugin URI of the plugin/theme',
                        'Theme URI of the plugin/theme',
                        'Description of the plugin/theme',
                        'Author of the plugin/theme',
                        'Author URI of the plugin/theme',
                        'Tags of the plugin/theme'
                    ];

                for (translation in pot.translations['']) {
                    if ('undefined' !== typeof pot.translations[''][ translation ].comments.extracted) {
                        if (excluded_meta.indexOf(pot.translations[''][ translation ].comments.extracted) >= 0 ) {
                            console.log('Excluded meta: ' + pot.translations[''][ translation ].comments.extracted);
                            delete pot.translations[''][ translation ];
                        }
                    }
                }

                return pot;
            }
        }
    },

    // Generates *.mo file
    po2mo: {
        files: {
            src: '../languages/*.po',
            expand: true
        }
    }

};
