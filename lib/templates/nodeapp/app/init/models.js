///////////////////////////////////////////
// INITIALIZE MODELS                     //
///////////////////////////////////////////

module.exports.initialize = function() {

    'use strict';

    var fs   = require('fs'),
        root = __dirname;

    function bootModels() {

        var modelsPath = root + '/app/models';

        function walk(path) {
            fs.readdirSync(path).forEach(function(file) {
                var newPath = path + '/' + file,
                    stat = fs.statSync(newPath);
                if (stat.isFile()) {
                    if (/(.*)\.(js$|coffee$)/.test(file)) {
                        require(newPath);
                    }
                } else if (stat.isDirectory()) {
                    walk(newPath);
                }
            });
        }

        walk(modelsPath);

    }

    bootModels();

};
