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

        // console.log("Transaction: ", transaction);
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

// For Dev purposes
const getAll = (app, db) => {
    app.get("/t/a", (req, res) => {
        db.collection('transactions').find((err, cursor) => {
            if (err) {
                console.log("err: ", err)
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                cursor.toArray().then((individualTrans) => {
                    // console.log(individualTrans);
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

const getTransFromID = (app, db) => {
    app.get('/t/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('transactions').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(item);
            }
        });
    })
}
const deleteTransaction = (app, db) => {
    app.delete('/t/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('transactions').deleteOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send('Transaction ' + id + ' deleted!');
            }
        });
    });
}

const updateTransaction = (app, db) => {
    app.put('/t/u/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        const transaction = {
            labels: req.body.labels,
            dateOfPurchase: req.body.dateOfPurchase,
            dateOfLog: new Date(),
            cost: req.body.cost,
            user: req.body.user,
            notes: req.body.notes
        };
        db.collection('transactions').replaceOne(details, transaction, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(transaction);
            }
        });
    });
}


module.exports = (app, db) => {
    deleteTransaction(app, db);
    getAll(app, db);
    getAllFromUser(app, db);
    getTransFromID(app, db);
    postTransaction(app, db);
    updateTransaction(app, db);
}