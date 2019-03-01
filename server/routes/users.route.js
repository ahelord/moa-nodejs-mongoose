var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller');

router.route('/').get(usersController.getUsers);
router.route('/recommendations').get(usersController.getUsersRecommendations);

module.exports = router;
