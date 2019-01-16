var app = angular.module('DestinationApp', []);
var db = require("../models");


// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('TravelListController', function TravelListController($scope) {
    db.Destination.findAll({}).then(function(results) {
        console.log(results);
  })
});