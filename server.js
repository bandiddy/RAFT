var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "travel app", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./controllers/locationController.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> ðŸŒŽ  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
