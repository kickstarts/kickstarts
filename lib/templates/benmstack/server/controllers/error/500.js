'use strict';

exports.main = function(req, res, next) {
    // trigger a generic (500) error:
    var err = new Error('Testing 1, 2, 3!');
    err.status = 500;
    next(err);
};
