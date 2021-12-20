const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Wow so cool!',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'Loved this book!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Best book ever!',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
