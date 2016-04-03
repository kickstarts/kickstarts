module.exports = {

    main: {
        files: {
            '<%= assets.scripts %>/bundle.js': ['<%= assets.scripts %>/main.js']
        },
        options: {
            transform: ['babelify']
        }
    }

};
