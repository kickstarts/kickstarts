'use strict';

exports.main = function(req, res, next) {
    // trigger a 403 error:
    var err = new Error('That is not allowed!');
    err.status = 403;
    next(err);
};
