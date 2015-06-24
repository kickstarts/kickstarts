module.exports = {

    dev: {
        files: ['**'],
        dist: '../_dev/'
    },
    prod: {
        files: ['**'],
        dist: '../_prod/'
    },
    vendors: {
        options: {
            force: true
        },
        src: [ '<%= assets.scripts %>/vendors/modernizr.js' ]
    }

};
