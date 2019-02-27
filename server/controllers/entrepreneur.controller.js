var entrepreneur = require('../models/entrepreneur.model');


exports.postEntrepreneur = function (req, res) {

  entrepreneur.create(req.body, function (err, entrepreneurRespond) {
    if (err) {
      return res.status(500);
    } else {
      res.json(entrepreneurRespond);
    }
  });
};

exports.searchTextEntrepreneur = function (req, res) {

  entrepreneur.find({$text: {$search: req.body.query}})
    .limit(5)
    .exec(function (err, searchEntrepreneurRespond) {
      if (err) {
        return res.status(500);
      } else {
        res.json(searchEntrepreneurRespond);
      }
    });
};

exports.getEntrepreneur = function (req, res) {
  entrepreneur.find()
    .limit(+req.query.limit)
    .sort({created_at: -1})
    .exec(function (err, searchEntrepreneurRespond) {
      if (err) {
        return res.status(500);
      } else {
        res.json(searchEntrepreneurRespond);
      }
    });
};


