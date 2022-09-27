const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Traveller extends Model {}

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    model: "traveller",
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Traveller;
