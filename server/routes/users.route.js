var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller');

router.route('/').get(usersController.getUsers);


module.exports = router;
