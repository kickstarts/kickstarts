///////////////////////////////////////////
// GENERAL CONFIG                        //
///////////////////////////////////////////

module.exports = {
    app: {
        root: __dirname,
        env: process.env.NODE_ENV || 'development',
        port: 8080
    },
    db: {
        host: 'mongodb://localhost/api/'
    },
    task: {
        sync:   ['public/styles/style.css', 'public/scripts/app.js', 'public/*.html', 'app/views/**/*.jade'],
        lint:   ['app/routes/*.js', 'app/models/*.js', 'spec/**/*.js'],
        test:   'spec/**/*.js',
        minify: 'app/assets/scripts/app.js',
        dist: {
            script: 'public/assets/scripts/'
        }
    }
};
