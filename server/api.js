var express = require('express');
var router = express.Router();

var usersRoute = require('./routes/users.route');

router.use('/users', usersRoute);

module.exports = router;
