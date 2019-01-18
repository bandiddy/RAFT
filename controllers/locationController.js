var express = require("express");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var passport = require("../config/passport.js");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get("/main", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/main.html'));
});

router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get("/main", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../views/main.html'));
});
router.get("/create", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../views/create.html'));
});
router.get("/survey", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../views/survey.html'));
});

router.get("/travelList", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/travelList.html'));
})

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/main");
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

router.post("/api/locations", function (req, res) {

    db.Destination.findOne({
        where: {
            climate: req.body.climate,
            bestSeason: req.body.bestSeason
        }
    }).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        res.json({
            error: err
        });
    });
})

router.post("/api/locations/new", function (req, res) {
    console.log(req.body);
    db.Destination.create({
        name: req.body.name,
        country: req.body.country,
        climate: req.body.climate,
        bestSeason: req.body.bestSeason,
        climate: req.body.climate,
        UserId: req.user.id

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
        db.Destination.findAll({ where: { id: req.user.id } }).then(function (results) {
            res.json(results);
        });
    }
});

router.get("/api/userID", function (req, res) {
    if (!req.user) {
        res.json({});
    }
    else {
        db.User.findAll({ where: { id: req.user.id } }).then(function (results) {
            res.json(results);
        });
    }
});


module.exports = router;
