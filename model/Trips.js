const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    model: "trips",
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Trips;
