var express = require("express");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var passport = require("../config/passport.js");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../views/members.html'));
});

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/members");
});

router.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect(307, "/api/login");
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/api/user_data", function (req, res) {
    if (!req.user) {
        res.json({});
    }
    else {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    }
});


module.exports = router;
