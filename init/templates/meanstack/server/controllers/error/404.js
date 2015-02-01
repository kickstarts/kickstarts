'use strict';

exports.main = function(req, res, next) {
    // trigger a 404:
    // since no other middleware will match route /404
    // after this one (and we're not responding here!)
    next();
};
