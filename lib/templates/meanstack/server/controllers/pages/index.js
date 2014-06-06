///////////////////////////////////////////
// HOME PAGE                             //
///////////////////////////////////////////

'use strict';

exports.main = function(req, res) {
    res.render('index', {
        title : 'Home Page',
        description: 'Page Description',
        author: 'Name',
        analyticssiteid: 'XXXXXXX'
    });
};
