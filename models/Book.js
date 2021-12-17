// BOOK MODEL
const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

Books.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        author: {
            type: Datatypes.STRING,
            allowNull: false
        },
        publication: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }
);




module.exports = { Books }