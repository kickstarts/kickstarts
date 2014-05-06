module.exports.initialize = function() {

    'use strict';

    var fs   = require('fs'),
        root = __dirname;

    // Load model
    function bootModel(file) {
        var ext = file.replace('.js', '');

        // Include the model
        require(root + '/models/'+ ext);
    };

    //Bootstrap models
    function bootModels() {
        fs.readdir(root + '/models', function (err, files) {
            if (err) {
                throw err;
            }

            files.forEach(function (file) {
                bootModel(file);
            });
        });

    };

};
