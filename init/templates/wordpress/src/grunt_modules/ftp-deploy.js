module.exports = {

    auth: {
        host:       'ftp.host.com',
        authKey:    'key1',
        port:       21
    },
    src: '../',
    dest: '/public_html/',
    exclusions: [
        '../_{dev,prod}/**/*',
        '../**/.DS_Store',
        '../**/Thumbs.db',
        '../.git/*',
        '../.gitignore',
        '../.editorconfig',
        '../*.md',
        '../htaccess.txt',
        '../__*',
        '../assets/styles/**/*',
        '../assets/scripts/**/*',
        '../assets/fonts/*.zip',
        '../src/**/*',

        // DO NOT IGNORE
        '!../assets/styles/style.min.css',
        '!../assets/scripts/main.min.js',
        '!../assets/scripts/vendors/**'
    ]

};
