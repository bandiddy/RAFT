  module.exports = function(sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
      country: {
        type: DataTypes.STRING
      },
      weather: {
        type: DataTypes.STRING
      },
      style: {
        type: DataTypes.STRING
      },
      crowded: {
        type: DataTypes.BOOLEAN
      },
      category: {
        type: DataTypes.STRING
      },
      outdoorActivities: {
        type: DataTypes.BOOLEAN
      },
      developed: {
        type: DataTypes.BOOLEAN
      },
      climate: {
        type: DataTypes.STRING
      },
      setting: {
        type: DataTypes.BOOLEAN
      },
      crowds: {
        type: DataTypes.BOOLEAN
      },
      food: {
        type: DataTypes.BOOLEAN
      },
      tourism: {
        type: DataTypes.BOOLEAN
      },
      outdoor: {
        type: DataTypes.BOOLEAN
      },
      museums: {
        type: DataTypes.BOOLEAN
      }
    });

    return Destination;
  };
  

