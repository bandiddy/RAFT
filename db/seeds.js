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
    country: "China",
    climate: "Temperate",
    category: true,
    bestSeason: "Spring",
    crowded: true,
    food: true,
    tourism: true,
    outdoor: false,
    museums: true
  });  
  db.Destination.create({
    country: "Japan",
    climate: "Temperate",
    category: true,
    bestSeason: "Spring",
    crowded: true,
    food: true,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "USA",
    climate: "Sunny",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "France",
    climate: "Brisk",
    category: true,
    bestSeason: "Fall",
    crowded: true,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "England",
    climate: "Brisk",
    category: true,
    bestSeason: "Spring",
    crowded: true,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "Italy",
    climate: "Sunny",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "New Zealand",
    climate: "Brisk",
    category: true,
    bestSeason: "Fall",
    crowded: false,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });  
  db.Destination.create({
    country: "Thailand",
    climate: "Tropical",
    category: true,
    bestSeason: "Spring",
    crowded: false,
    food: true,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "UAE",
    climate: "Sunny",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: true,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Spain",
    climate: "Sunny",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "Argentina",
    climate: "Sunny",
    category: true,
    bestSeason: "Spring",
    crowded: true,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Brazil",
    climate: "Tropical",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Greece",
    climate: "Sunny",
    category: false,
    bestSeason: "Summer",
    crowded: false,
    food: false,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "Australia",
    climate: "Temperate",
    category: true,
    bestSeason: "Fall",
    crowded: true,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Hong Kong",
    climate: "Temperate",
    category: true,
    bestSeason: "Spring",
    crowded: true,
    food: true,
    tourism: true,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "Costa Rica",
    climate: "Tropical",
    category: true,
    bestSeason: "Summer",
    crowded: false,
    food: true,
    tourism: true,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Maldives",
    climate: "Tropical",
    category: true,
    bestSeason: "Summer",
    crowded: false,
    food: true,
    tourism: true,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Ireland",
    climate: "Snowy",
    category: true,
    bestSeason: "Winter",
    crowded: true,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Egypt",
    climate: "Sunny",
    category: true,
    bestSeason: "Summer",
    crowded: true,
    food: true,
    tourism: true,
    outdoor: true,
    museums: true
  });
  db.Destination.create({
    country: "South Africa",
    climate: "Temperate",
    category: true,
    bestSeason: "Spring",
    crowded: false,
    food: true,
    tourism: false,
    outdoor: true,
    museums: false
  });
  db.Destination.create({
    country: "Germany",
    climate: "Brisk",
    category: true,
    bestSeason: "Fall",
    crowded: true,
    food: false,
    tourism: false,
    outdoor: false,
    museums: true
  });
  db.Destination.create({
    country: "Norway",
    climate: "Snowy",
    category: true,
    bestSeason: "Fall",
    crowded: false,
    food: false,
    tourism: false,
    outdoor: true,
    museums: false
  });
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


  