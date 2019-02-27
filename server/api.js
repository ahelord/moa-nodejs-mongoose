var express = require('express');
var router = express.Router();

var entrepreneurRoute = require('./routes/entrepreneur.route');
var startupRoute = require('./routes/startup.route');

router.use('/entrepreneur', entrepreneurRoute);
router.use('/startup', startupRoute);

module.exports = router;
