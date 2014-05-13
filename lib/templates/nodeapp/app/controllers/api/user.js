///////////////////////////////////////////
// API - USERS                           //
///////////////////////////////////////////

'use strict';

var User = require('../../models/user');

exports.getId = function(req, res, next, id) {
    req.id = id;
    next();
};

exports.index = function(req, res, next) {
    console.log(req);
    console.log('Request is ok!');

    User.find(function(err, users) {
        console.log('Success!');
        if (err) {
            return next(err);
        }
        res.render('users/index', {
            title: 'Users Page',
            users: users
        });
    });
};

exports.find = function(req, res, next) {
    User.findOne({ _id: req.id }, function (err, user) {
        if (err) {
            return next(err);
        }
        res.render('users/find', {
            user: user,
            title: user.name
        });
    });
};

exports.new = function(req, res) {
    res.render('users/new', { title: 'Creating User' });
};

exports.create = function(req, res, next) {
    var model = new User(req.body);

    model.save(function (err, data) {
        if (err) {
            return next(err);
        }
        res.redirect('/users');
    });
};

exports.edit = function(req, res) {
    User.findOne({ _id: req.id }, function(err, user) {
        res.render('users/edit', {
            user: user,
            title: 'Editing ' + user.name
        });
    });
};

exports.update = function(req, res, next) {
    User.update({ _id: req.id }, req.body, function(err, data) {
        if (err) {
            return next(err);
        }
        res.redirect('/users/' + req.id);
    });
};

exports.delete = function(req, res, next) {
    User.remove({ _id: req.id }, function(err, data) {
        if (err) {
            return next(err);
        }
        res.redirect('/users');
    });
};
