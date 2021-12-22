// CREATE USER MODEL TO DO (id - pk, username, email, password)
const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class User extends Model { }

// define table columns and config
User.init(
  {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
      {
        //table config
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
      }
    );
  },
);
module.exports = User;