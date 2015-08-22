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
            '!../assets/styles/main.min.css',
            '!../assets/scripts/main.min.js',
            '!../assets/scripts/vendors/**'
        ],
        recursive   : true,
        syncDest    : true
    },
    dist: {
        options: {
            src:  '../',
            dest: '<%= deploy.ssh.dest %>',
            host: '<%= deploy.ssh.host %>',
        }
    }

};
