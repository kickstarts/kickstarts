///////////////////////////////////////////
// ABOUT PAGE                            //
///////////////////////////////////////////

'use strict';

exports.main = function(req, res) {
    res.render('about', {
        title : 'About Page',
        description: 'Page Description'
    });
};
