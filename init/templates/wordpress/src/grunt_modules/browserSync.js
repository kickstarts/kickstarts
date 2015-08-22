module.exports = {

    files: [
        '<%= assets.styles %>/main.min.css',
        '<%= assets.scripts %>/main.min.js',
        '../{,*/}*.php'
    ],
    options: {
        notify: true,
        background: true,
        proxy: '<%= locals.development %>/<%= package.name %>'
    }

};
