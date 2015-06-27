module.exports = {

    // Generates *.mo file
    dist: {
        options: {
            poDel: false // Set to true if you want to erase the .po
        },
        files: [{
            expand: true,
            cwd: '../languages',
            src: ['*.po'],
            dest: '../languages',
            ext: '.mo',
            nonull: true
        }]
    }

};
