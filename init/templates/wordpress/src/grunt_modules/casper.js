module.exports = {

    // CasperJS
    options: {
        test: true
    },
    src: ['../test/**/*-test.js'],
    dest: function(input) {
        return input.replace(/\.js$/,'.xml');
    }

};
