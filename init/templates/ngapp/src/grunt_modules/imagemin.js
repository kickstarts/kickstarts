module.exports = {

    options: {
        optimizationLevel: 7
    },
    files: [{
        expand: true,
        cwd     : '<%= assets.images %>/',
        src     : ['**/*.{png,jpg,jpeg}'],
        dest    : '<%= assets.images %>/'
    }]

};
