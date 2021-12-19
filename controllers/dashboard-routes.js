// DASHBOARD ROUTES

// connect to express router
const router = require('express').Router();
// connect to sequelize library
const sequelize = require('../config/connection');
// connect to models
const { Book, User, Comment } = require('../models');
// authorize
const withAuth = require('../utils/auth');



// export
module.exports = router;
