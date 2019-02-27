var express = require('express');
var router = express.Router();
var startupController = require('../controllers/startup.controller');

router.route('/').post(startupController.postStartup);
router.route('/search-text').post(startupController.searchTextStartup)
router.route('/').get(startupController.getStartup)


module.exports = router;
