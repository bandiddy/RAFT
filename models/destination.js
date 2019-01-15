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
      tourism: {
        type: DataTypes.BOOLEAN
      },
      museums: {
        type: DataTypes.BOOLEAN
      }
    });

    return Destination;
  };
  