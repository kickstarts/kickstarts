module.exports = {

    options: {
        plugins: [
            { removeViewBox: false },
            { removeUselessStrokeAndFill: false }
        ]
    },
    dist: {
        files: [{
            expand: true,
            cwd     : '<%= assets.images %>',
            src     : ['*.svg'],
            dest    : '<%= assets.images %>'
        }]
    }

};
