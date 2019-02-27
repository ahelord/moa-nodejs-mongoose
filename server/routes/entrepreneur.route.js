var express = require('express');
var router = express.Router();
var entrepreneurController = require('../controllers/entrepreneur.controller');

router.route('/').post(entrepreneurController.postEntrepreneur);
router.route('/search-text').post(entrepreneurController.searchTextEntrepreneur)
router.route('/').get(entrepreneurController.getEntrepreneur)


module.exports = router;
