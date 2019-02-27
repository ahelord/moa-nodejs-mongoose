var startup = require('../models/startup.model');

exports.postStartup = function (req, res) {
  startup.create(req.body, function (err, startupRespond) {
    if (err) {
      return res.status(500)
    }
    res.json(startupRespond);
  });
};

exports.searchTextStartup = function (req, res) {

  startup.find({$text: {$search: req.body.query}})
    .populate({
      path: 'cofounders',
      model: 'entrepreneurs',
    })
    .limit(5)
    .exec(function (err, searchEntrepreneurRespond) {
      if (err) {
        return res.status(500);
      } else {
        res.json(searchEntrepreneurRespond);
      }
    });
};

exports.getStartup = function (req, res) {
  startup.find()
    .populate({
      path: 'cofounders',
      model: 'entrepreneurs',
    })
    .limit(+req.query.limit)
    .sort({created_at: -1})
    .exec(function (err, startupRespond) {
      if (err) {
        return res.status(500);
      } else {
        res.json(startupRespond);
      }
    });
};

