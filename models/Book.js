// BOOK MODEL
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publication: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
);




module.exports = { Books };