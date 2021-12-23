// MAIN INDEX FOR MODELS

// TO DO
// CONNECT MODELS
const User = require('./User');
const Book = require('./Book');
const Comment = require('./Comment');

// TO DO
// CREATE ASSOCIATIONS
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

User.hasMany(Book, {
  foreignKey: 'book_id',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
});

Comment.belongsTo(Comment, {
  as: 'Parent',
});

// not sure if it will have to be parent_id or ParentId or parentId
Comment.hasMany(Comment, {
  as: 'Children',
  foreignKey: 'parent_id',
});

// export
module.exports = { User, Book, Comment };
