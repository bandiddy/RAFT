  module.exports = function(sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
      country: {
        type: DataTypes.STRING
      },
      climate: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.BOOLEAN
      },
      bestSeason: {
        type: DataTypes.STRING
      },
      crowded: {
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
  

