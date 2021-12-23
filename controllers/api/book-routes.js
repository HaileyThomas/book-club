const router = require('express').Router();
const { Book, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all Book
router.get('/', (req, res) => {
  Book.findAll({
    attributes: [
      'id',
      'author',
      'title',
      'publication',
      'description',
      'created_at',
    ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
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
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single Book
router.get('/:id', (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'author',
      'title',
      'publication',
      'description',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'book_id', 'user_id', 'created_at'],
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
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a Book
router.post('/', withAuth, (req, res) => {
  Book.create({
    title: req.body.title,
    book_content: req.body.book_content,
    user_id: req.session.user_id,
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a Book
router.put('/:id', withAuth, (req, res) => {
  Book.update(
    {
      title: req.body.title,
      book_content: req.body.book_content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a Book
router.delete('/:id', withAuth, (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
