module.exports = {

    options: {
        spawn: false,
        reload: true
    },
    css: {
        files: ['<%= assets.styles %>/**/*.scss', '<%= assets.styles %>/*.css'],
        tasks: ['styles']
    },
    js: {
        files: ['Gruntfile.js', '<%= assets.scripts %>/modules/*.js', '<%= assets.scripts %>/main.js'],
        tasks: ['javascripts']
    }

};
