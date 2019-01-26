var ObjectID = require('mongodb').ObjectID;

function postTransaction(app, db) {
    app.post('/t', (req, res) => {
        const transaction = {
            labels: req.body.labels,
            dateOfPurchase: req.body.dateOfPurchase,
            dateOfLog: new Date(),
            cost: req.body.cost,
            user: req.body.user,
            notes: req.body.notes
        };

        console.log("Transaction: ", transaction);
        db.collection('transactions').insertOne(transaction, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
}

const getAllFromUser = (app, db) => {
    app.get('/t/u/:userid', (req, res) => {
        const userID = req.params.userid;

        db.collection('transactions').find({
            user: {
                $eq: userID
            }
        }, (err, cursor) => {
            if (err) {
                console.log("err: ", err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                cursor.toArray().then((individualTrans) => {
                    console.log(individualTrans);
                    res.send(individualTrans);
                }).catch((e) => {
                    console.log("err: ", err)
                    res.send({
                        "error": "An error has occured"
                    });
                })
            }
        });
    })
}

module.exports = (app, db) => {
    getAllFromUser(app, db);
    postTransaction(app, db);
}