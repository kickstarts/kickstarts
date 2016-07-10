///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

module.exports = {

    // GLOBAL CONFIG
    load: {
        pattern: 'gulp-*',
        config: 'package.json',
        scope: ['devDependencies'],
        replaceString: 'gulp-',
        camelize: false,
        lazy: true
    },
    paths: {
        script: 'public/assets/scripts',
        style: 'public/assets/styles',
        images: 'public/assets/images',
        tests:  'test'
    },

    // TASKS
    task: {
        sync: {
                files: [
                'public/assets/styles/**/*.styl',
                'public/assets/scripts/**/*.js'
            ],
            server: {
                baseDir: 'public',
                index: 'index.html'
            }
        },
        bundle:      ['./public/assets/scripts/app.jsx'],
        stylus:      'public/assets/styles/**/*.styl',
        jsmin:       'app.js',
        cssmin:      'public/assets/styles/style.css',
        images:      '**/*',
        jest: {
            scriptPreprocessor: '<rootDir>/preprocessor.js',
            rootDir: 'public',
            unmockedModulePathPatterns: [
                'node_modules/react'
            ],
            testDirectoryName: 'test',
            testPathIgnorePatterns: [
                '/node_modules/'
            ],
            moduleFileExtensions: [
                'js',
                'json',
                'react'
            ]
        }
    },

    // WATCH
    watch:{
        css: 'public/assets/styles/**/*.styl',
        js: ['public/assets/scripts/**/*.jsx', 'gulpfile.js'],
        imgs: 'public/assets/images/*.{png,jpg,gif}',
        html: 'public/*.html'
    },

    // SHELL COMMANDS
    shell: {
        create: 'mkdir -p ./build/assets/{styles,scripts,images}',
        copy: {
            html: 'cp -R public/*.html ./build/',
            txt:  'cp -R public/*.txt ./build/',
            xml:  'cp -R public/*.xml ./build/',
            md:   'cp -R README.md ./build/',
            css:  'cp -R public/assets/styles/style.min.css ./build/assets/styles/style.min.css',
            js:   'cp -R public/assets/scripts/bundle.min.js ./build/assets/scripts/bundle.min.js',
            imgs: 'cp -R public/assets/images/**/* ./build/assets/images/**/*.{png,jpg,gif}'
        },
        gzip: 'gzip ./build/<%= pkg.title %>.gzip'
    }
};
