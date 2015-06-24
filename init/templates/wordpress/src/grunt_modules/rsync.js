module.exports = {

    options: {
        args: ['--verbose'],
        exclude: [
            '../_{dev,prod}/**/*',
            '../**/.DS_Store',
            '../.git/*',
            '../.gitignore',
            '../.editorconfig',
            '../assets/styles/**/*',
            '../assets/scripts/**/*',
            '../assets/fonts/*.zip',
            '../src/**/*',
            '../*.md',
            '../htaccess.txt',

            // DO NOT IGNORE
            '!../assets/styles/style.css',
            '!../assets/scripts/main.min.js',
            '!../assets/scripts/vendors/**'
        ],
        recursive   : true,
        syncDest    : true
    },
    staging: {
        options: {
            src     : '../',
            dest    : 'public_html/',
            host    : 'user@host.com',
        }
    },
    production: {
        options: {
            src     : '../',
            dest    : 'public_html/',
            host    : 'user@host.com',
        }
    }

};
