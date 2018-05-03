const db = require('../models');
const express = require('express');
var session = require('express-session');

module.exports = {
    compare: (req, res, next) => {
        db.User.authenticate(req.body.loginEmail, req.body.loginPassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            }
            else {
                req.session.userid = user._id;
                console.log('Hey it worked');
                return res.redirect('/home');
            }
        });
    }
}