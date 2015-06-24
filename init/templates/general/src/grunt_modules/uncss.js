module.exports = {

    dist: {
        options: {
            ignore      : [],
            stylesheets : ['<%= assets.styles %>/style.css'],
            urls        : []
        },
        files: {
            '<%= assets.styles %>/style.clean.css': ['../**/*.php']
        }
    }

};


