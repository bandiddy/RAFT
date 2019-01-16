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

router.get("/api/locations", function(req, res) {
    db.Destination.findAll().then(function (results) {
        res.json(results);
    });
});

router.post("/api/locations/new", function(req, res) {
    console.log(req.body);
    db.Destination.create({
        country: req.body.country,
        climate: req.body.climate,
        category: req.body.category,
        crowded: req.body.crowded,
        food: req.body.food,
        tourism: req.body.tourism,
        outdoor: req.body.outdoor,
        museums: req.body.museums,
        bestSeason: req.body.bestSeason,
        id: req.user.id
        
    }).then(function (results) {
        res.json(results);
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
        db.Destination.findAll({where: {id:req.user.id}}).then(function (results) {
            res.send(results);
        });
    }
});


module.exports = router;
