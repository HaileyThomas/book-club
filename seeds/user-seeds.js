const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'hailey',
    email: 'haileyraebeauty@gmail.com',
    password: 'password123',
  },
  {
    username: 'wendyfae',
    email: 'wendy@gmail.com',
    password: 'password123',
  },
  {
    username: 'babykitty',
    email: 'kitty@gmail.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
