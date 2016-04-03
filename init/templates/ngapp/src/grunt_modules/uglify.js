module.exports = {

    main: {
        options: {
            // compress: true,
            mangle: false
        },
        files: {
            '<%= assets.scripts %>/main.min.js': [ '<%= assets.scripts %>/bundle.js' ]
        }
    },
    modernizr: {
        options: {
            compress: true,
            mangle: false
        },
        files: {
            '<%= assets.scripts %>/vendors/modernizr.min.js': [ '<%= assets.scripts %>/vendors/modernizr.js' ]
        }
    }

};
