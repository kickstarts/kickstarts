module.exports = {

    options: {
        jshintrc: '.jshintrc'
    },
    files: {
        src: [
            'Gruntfile.js',
            '<%= assets.scripts %>/modules/*.js',
            '<%= assets.scripts %>/main.js'
        ]
    }

};
