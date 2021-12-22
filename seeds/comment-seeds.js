const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Wow so cool!',
    user_id: 1,
    book_id: 2,
  },
  {
    comment_text: 'Loved this book!',
    user_id: 2,
    book_id: 1,
  },
  {
    comment_text: 'Best book ever!',
    user_id: 3,
    book_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
