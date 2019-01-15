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
      } 
    });

    return Destination;
  };
  