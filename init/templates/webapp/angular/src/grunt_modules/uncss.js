module.exports = {

    dist: {
        options: {
            ignore      : [],
            stylesheets : ['<%= assets.styles %>/main.css'],
            urls        : []
        },
        files: {
            '<%= assets.styles %>/main.clean.css': ['../**/*.php']
        }
    }

};
