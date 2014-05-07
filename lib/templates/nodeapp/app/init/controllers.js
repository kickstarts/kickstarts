module.exports.initialize = function() {

    'use strict';

    var fs   = require('fs'),
        root = __dirname;

    // Load controller
    function bootController(file) {
        var ext = file.replace('.js', '');

        // Include the controller
        require(root + '/controllers/' + ext);
    }

    // Bootstrap controllers
    function bootControllers() {
        fs.readdir(root + '/controllers', function(err, files){
            if (err) {
                throw err;
            }

            files.forEach(function(file){
                bootController(file);
            });
        });

    }

};
