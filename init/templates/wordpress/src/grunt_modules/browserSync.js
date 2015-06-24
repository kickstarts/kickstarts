module.exports = {

    files: [
        '<%= assets.styles %>/style.min.css',
        '<%= assets.scripts %>/main.min.js',
        '../{,*/}*.php'
    ],
    options: {
        notify: true,
        background: true
    }

};
