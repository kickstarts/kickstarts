///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

module.exports = {
    task: {
        banner: [
            '/**',
            ' * -------------------------------------------------------',
            ' * <%= pkg.title %> - <%= pkg.description %>',
            ' * @version v<%= pkg.version %>',
            ' * @link    <%= pkg.homepage %>',
            ' * @license <%= pkg.license %>',
            ' * -------------------------------------------------------',
            ' */',
            ''
        ].join('\n'),
        load: {
            pattern: 'gulp-*',
            config: 'package.json',
            scope: ['devDependencies'],
            replaceString: 'gulp-',
            camelize: false,
            lazy: true
        },
        nodemon: {
            script: 'app.js',
            ext: 'js',
            ignore: ['gulpfile.js', 'public/', 'node_modules/'],
            verbose: true
        },
        src: {
            script: 'app/assets/scripts',
            style: 'app/assets/styles',
            views: 'app/views'
        },
        dist: {
            script: 'public/assets/scripts',
            style: 'public/assets/styles',
            images: 'public/assets/images'
        },
        watch: [
            'app/assets/styles/**/*.styl',
            'app/views/**/*.jade',
            'public/assets/scripts/**/*.js'
        ],
        lint: [
            'app/assets/scripts/**/*.js',
            'app/controllers/**/*.js',
            'app/models/**/*.js',
            'app/routes/**/*.js',
            'spec/**/*.js',
            'public/assets/scripts/**/*.js'
        ],
        test: 'spec/**/*.js',
        minify: 'app/assets/scripts/main.js',
        compile: 'app/assets/styles/**/*.styl',
        images: 'public/assets/images/**/*',
        clean: [
            '!public/assets/scripts/main.js',
            'public/assets/scripts/**/*.min.js',
            'public/assets/styles/**/*.css',
            'public/assets/styles/**/*.min.css'
        ]
    }
};
