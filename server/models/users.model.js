var mongoose = require('mongoose');
var mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
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
    }, {
        timestamps: true
    });

usersModel.plugin(mongooseAggregatePaginate);


module.exports = mongoose.model('users', usersModel);
