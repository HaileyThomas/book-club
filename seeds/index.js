const seedUsers = require('./user-seeds');
const seedBooks = require('./book-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedBooks();
  console.log('--------------');

  await seedComments();

  process.exit(0);
};

seedAll();
