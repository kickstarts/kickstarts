module.exports = {

    options: {
        test: true
    },
    src: ['<%= test %>/e2e/*-test.js'],
    dest: function(input) {
        return input.replace(/\.js$/,'.xml');
    }

};
