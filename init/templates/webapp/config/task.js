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
        views: 'public/assets/scripts/app/views',
        images: 'public/assets/images'
    },

    // TASKS
    task: {
        sync: {
                files: [
                'public/assets/styles/**/*.styl',
                // 'public/assets/scripts/app/views/**/*.jade',
                'public/assets/scripts/**/**/*.js'
            ],
            server: {
                baseDir: 'public',
                index: 'index.html'
            }
        },
        mocha: 'test/**/*.js',
        jshint: [
            'public/assets/scripts/{app,libs}/**/*.js',
            'test/**/*.js',
            'gulpfile.js'
        ],
        compilejs:   'public/assets/scripts/**/*.js',
        compilecss:  'public/assets/styles/**/*.styl',
        jsmin:       'app.js',
        cssmin:      'public/assets/styles/style.css',
        images:      '**/*'
    },

    // WATCH
    watch:{
        css: 'public/assets/styles/**/*.styl',
        js: ['public/assets/scripts/{app,libs}/**/*.js', 'public/assets/scripts/app.js', 'gulpfile.js'],
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
            md:  'cp -R README.md ./build/',
            css: 'cp -R public/assets/styles/style.min.css ./build/assets/styles/style.min.css',
            js: 'cp -R public/assets/scripts/app.min.js ./build/assets/scripts/app.min.js',
            imgs: 'cp -R public/assets/images/**/* ./build/assets/images/**/*.{png,jpg,gif}'
        },
        gzip: 'gzip ./build/<%= pkg.title %>.gzip'
    }
};
