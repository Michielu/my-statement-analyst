var ObjectID = require('mongodb').ObjectID;


function createUser(app, db){
    app.post('/u', (req, res) => {
        const user = {
            username: req.body.username,
            password: req.body.password
        };

        // TODO Issue #1 Check if username is already used or not 

        console.log("User: ", user);
        db.collection('users').insertOne(user, (err, result) => {
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
    //Create User
    createUser(app, db);
}