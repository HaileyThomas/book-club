// BOOK API ROUTES

// connect to express router
const router = require('express').Router();
// use sequelize library
const sequelize = require('../../config/connection');
// connect to models
const { Book, User, Comment } = require('../../models');
// authorize
const withAuth = require('../../utils/auth');

// TO DO
// BOOK API ROUTES WILL GO HERE

// export
module.exports = router;
