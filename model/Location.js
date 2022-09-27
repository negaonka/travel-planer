const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    locationName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    model: "location",
  }
);

module.exports = Location;
