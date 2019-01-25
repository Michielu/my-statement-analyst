var ObjectID = require('mongodb').ObjectID;

function postTransaction(app, db){
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

module.exports = (app, db) => {
    postTransaction(app, db);
}