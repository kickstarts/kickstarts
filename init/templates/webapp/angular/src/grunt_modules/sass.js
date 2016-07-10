module.exports = {

    options: {
        sourceMap: true
    },
    dist: {
        files: {
            '<%= assets.styles %>/main.css': '<%= assets.styles %>/main.scss'
        }
    }

};
