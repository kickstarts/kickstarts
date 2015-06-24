module.exports = {

    dev: {
        src: [ '../_dev/**/*' ]
    },
    prod: {
        src: [ '../_prod/**/*' ]
    },
    vendors: {
        options: {
            force: true
        },
        src: [ '<%= assets.scripts %>/vendors/modernizr.js' ]
    }

};
