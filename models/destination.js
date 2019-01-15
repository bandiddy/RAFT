  module.exports = function(sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
      country: {
        type: DataTypes.STRING
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
      travler: {
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
  

