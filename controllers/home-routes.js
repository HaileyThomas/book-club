// HOME ROUTES

// connect to express router
const router = require('express').Router();
// connect to sequelize library
const sequelize = require('../config/connection');
// connect to models
const { Book, User, Comment } = require('../models');

// GET ALL BOOKS
router.get('/', (req, res) => {
  Book.findAll({
    attributes: [
      'id',
      'title',
      'author',
      'publication',
      'description',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbBookData) => {
      const books = dbBookData.map((book) => book.get({ plain: true }));
      res.render('homepage', { books, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LOG IN
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// SINGLE POST
router.get('/book/:id', (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'title',
      'author',
      'publication',
      'description',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      const book = dbBookData.get({ plain: true });
      res.render('single-post', { book, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// export
module.exports = router;
