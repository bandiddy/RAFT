var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("../models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
// run 'npm run reset-db' in terminal to reset and add the original 10 items in database
var reset = process.argv[2] === 'reset' ? { force: true } : {};
db.sequelize.sync(reset).then(function () {
  //1
  db.Destination.create({
    name: "China",
    country: "China",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Japan",
    country: "Japan",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "USA",
    country: "USA",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "France",
    country: "France",
    climate: "Brisk",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "England",
    country: "England",
    climate: "Brisk",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Italy",
    country: "Italy",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "New Zealand",
    country: "New Zealand",
    climate: "Brisk",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Thailand",
    country: "Thailand",
    climate: "Tropical",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "UAE",
    country: "UAE",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Spain",
    country: "Spain",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Argentina",
    country: "Argentina",
    climate: "Sunny",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Brazil",
    country: "Brazil",
    climate: "Tropical",
    bestSeason: "Summer",
  });
  db.Destination.create({
    country: "Greece",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Australia",
    country: "Australia",
    climate: "Temperate",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Hong Kong",
    country: "Hong Kong",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Costa Rica",
    country: "Costa Rica",
    climate: "Tropical",
    bestSeason: "Summer"
  });
  db.Destination.create({
    name: "Maldives",
    country: "Maldives",
    climate: "Tropical",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Ireland",
    country: "Ireland",
    climate: "Snowy",
    bestSeason: "Winter",

  });
  db.Destination.create({
    name: "Egypt",
    country: "Egypt",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "South Africa",
    country: "South Africa",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Germany",
    country: "Germany",
    climate: "Brisk",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Norway",
    country: "Norway",
    climate: "Snowy",
    bestSeason: "Fall",
  });
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


