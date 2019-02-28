var users = require('../models/users.model');


exports.getUsers = function (req, res) {

    var page = +req.query.page;
    var startingPrice = +req.query.startingPrice;
    var finalPrice = +req.query.finalPrice;

    if (typeof page !== 'number' || page < 1) {
        throw new Error('page must be number and must be greater than 0')
    } else if (typeof startingPrice !== 'number') {
        throw new Error('startingPrice must be number')
    } else if (typeof finalPrice !== 'number') {
        throw new Error('finalPrice must be number')
    }

    var options = {page: page, limit: 50}
    var aggregate = users.aggregate([
        {
            $lookup: {
                from: "hats",
                localField: "hats",
                foreignField: "_id",
                as: "hats"
            }

        },

        {
            $unwind: "$hats"
        },

        {
            $project: {
                _id: 1,
                email: 1,
                price: "$hats.price",
            }
        },

        {
            $match: {
                'price': {
                    $gte: +req.query.startingPrice, $lte: +req.query.finalPrice
                }
            }
        },

        {
            $group: {
                '_id': '$_id',
                'totalSpending': {
                    $sum: "$price"
                }
            }
        },

        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "_id",
                as: "users"
            }
        },

        {
            $unwind: "$users"
        },

        {
            $project: {
                _id: 0,
                email: "$users.email",
                totalSpending: 1,
            }
        },
        
        {
            $sort: {
                totalSpending: -1
            }
        }
    ]);

    users.aggregatePaginate(aggregate, options)
        .then(function (respond) {
            res.json(respond);
        })
        .catch(function (err) {
            res.status(500);
        })

};

