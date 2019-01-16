  module.exports = function(sequelize, DataTypes) {
    var Destination = sequelize.define("Destination", {
      name: {
        type: DataTypes.STRING
      },
      country: {
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
      climate: {
        type: DataTypes.STRING
      }
    });
    Destination.associate = function(models) {
      Destination.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Destination;
  };
  

