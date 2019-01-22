var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("../models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
// run 'npm run reset' in terminal to reset and add the original 22 items in database
var reset = process.argv[2] === 'reset' ? { force: true } : {};
db.sequelize.sync(reset).then(function () {
  //1
  db.Destination.create({
    name: "Beijing",
    country: "China",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Tokyo",
    country: "Japan",
    climate: "Temperate",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Los Angeles",
    country: "USA",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Paris",
    country: "France",
    climate: "Brisk",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "London",
    country: "England",
    climate: "Brisk",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Rome",
    country: "Italy",
    climate: "Sunny",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Queenstown",
    country: "New Zealand",
    climate: "Brisk",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Bangkok",
    country: "Thailand",
    climate: "Tropical",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Abu Dhabi",
    country: "UAE",
    climate: "Sunny",
    bestSeason: "Winter",
  });
  db.Destination.create({
    name: "Barcelona",
    country: "Spain",
    climate: "Sunny",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Buenos Aires",
    country: "Argentina",
    climate: "Temperate",
    bestSeason: "SWinter",
  });
  db.Destination.create({
    name: "Rio de Janeiro",
    country: "Brazil",
    climate: "Tropical",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Athens",
    country: "Greece",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Sydney",
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
    name: "San Jose",
    country: "Costa Rica",
    climate: "Tropical",
    bestSeason: "Fall"
  });
  db.Destination.create({
    name: "Maldives",
    country: "Maldives",
    climate: "Tropical",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Dublin",
    country: "Ireland",
    climate: "Snowy",
    bestSeason: "Winter",

  });
  db.Destination.create({
    name: "Cairo",
    country: "Egypt",
    climate: "Sunny",
    bestSeason: "Summer",
  });
  db.Destination.create({
    name: "Cape Town",
    country: "South Africa",
    climate: "Temperate",
    bestSeason: "Spring",
  });
  db.Destination.create({
    name: "Berlin",
    country: "Germany",
    climate: "Brisk",
    bestSeason: "Fall",
  });
  db.Destination.create({
    name: "Oslo",
    country: "Norway",
    climate: "Snowy",
    bestSeason: "Fall",
  });
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


