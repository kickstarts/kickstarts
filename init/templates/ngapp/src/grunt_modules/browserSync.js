module.exports = {

    files: [
        '<%= assets.styles %>/main.min.css',
        '<%= assets.scripts %>/main.min.js',
        '../{,*/}*.html'
    ],
    options: {
        notify: true,
        background: true
    }

};
