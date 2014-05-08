///////////////////////////////////////////
// LOGIN PAGE                            //
///////////////////////////////////////////

'use strict';

exports.main = function(req, res) {
    res.render('login', {
        title : 'Login Page',
        description: 'Page Description'
    });
    res.send('this is the login form');
};

exports.process = function(req, res) {
    console.log('processing');
    res.send('processing the login form!');
};


