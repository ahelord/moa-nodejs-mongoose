/**
 * Created by lrodriguez on 2/05/18.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var startupsModel = new schema({
  name: {
    type: String,
    required: true
  },
  idea: String,
  cofounders: [{
    type: schema.ObjectId,
    ref: 'entrepreneurs'
  }]
}, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

startupsModel.index({'$**': 'text'});

module.exports = mongoose.model('startups', startupsModel);
