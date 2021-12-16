// MAIN INDEX FOR ROUTERS

// connect to express router
const router = require('express').Router();

// connect routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// set up routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// error code
router.use((req, res) => {
  res.status(404).end();
});

// export
module.exports = router;
