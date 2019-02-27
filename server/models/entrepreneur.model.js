var mongoose = require('mongoose');
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
var entrepreneurModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  skills: [String],
  role: String,
  email: {
    type: String,
    trim: true,
    //unique: true,
    required: true,
    //validate: [validateEmail, 'Please fill a valid email address'],
    //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

}, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}

});
//entrepreneurModel.index({'$**': 'text'});

module.exports = mongoose.model('entrepreneurs', entrepreneurModel);
