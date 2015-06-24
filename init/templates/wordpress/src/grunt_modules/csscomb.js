module.exports = {

    options: {
        config: '.csscomb'
    },
    files: {
        '<%= assets.styles %>/style.sorted.css': ['<%= assets.styles %>/style.clean.css']
    }

};
