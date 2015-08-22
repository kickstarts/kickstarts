module.exports = {

    options: {
        config: '.csscomb'
    },
    files: {
        '<%= assets.styles %>/main.sorted.css': ['<%= assets.styles %>/main.clean.css']
    }

};
