// DASHBOARD ROUTES

// connect to express router
const router = require('express').Router();
// connect to sequelize library
const sequelize = require('../config/connection');
// connect to models
const { User, Comment } = require('../models');
// authorize
const withAuth = require('../utils/auth');

// GET ALL USER COMMENTS
router.get('/', withAuth, (req, res) => {
  Comment.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbCommentData) => {
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      res.render('dashboard', { comments, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EDIT A COMMENT
router.get('/edit/:id', withAuth, (req, res) => {
  Comment.findByPk(req.params.id, {
    attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbCommentData) => {
      if (dbCommentData) {
        const comment = dbCommentData.get({ plain: true });

        res.render('edit-comment', {
          comment,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// export
module.exports = router;
