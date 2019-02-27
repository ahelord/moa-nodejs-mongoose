var mongoose = require('mongoose');
var schema = mongoose.Schema;
var usersModel = new schema(
    {
        email: {
            type: String,
            required: true
        },
        hats: [
            {
                type: schema.ObjectId,
                ref: 'hats'
            }
        ],
        recommendedHats: [
            {
                type: schema.ObjectId,
                ref: 'recommendations'
            }
        ]
    }, {
        timestamps: true
    });

module.exports = mongoose.model('users', usersModel);
