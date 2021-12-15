// MAIN INDEX FOR API ROUTES

// connect express router
const router = require('express').Router();

// connect api routes
const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const commentRoutes = require('./comment-routes');

// set up api routes
router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/comments', commentRoutes);

// export
module.exports = router;
