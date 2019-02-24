var ObjectID = require('mongodb').ObjectID;
var bycrypt = require("../../util/passwords");

function createUser(app, db){
    // app.post('/u', (req, res) => {
    //     const user = {
    //         username: req.body.username,
    //         password: req.body.password
    //     };

    //     // TODO Issue #1 Check if username is already used or not 

    //     console.log("User: ", user);
    //     db.collection('users').insertOne(user, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 'error': 'An error has occurred'
    //             });
    //         } else {
    //             res.send(result.ops[0]);
    //         }
    //     });
    // });


    app.post('/u', (req, res) => {
        const user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email.toLowerCase(),
            hash: ""
        };
        //Check if every field has been set accurately on client side

        //Check if username has been used yet. 

        let validUser = true;

       db.collection("users").find({ 'username': user.username }, { _id: 1, username: 1, email: 1 }).toArray((err, result) => {
            if (err) res.send(error);
            console.log("in call " + (result));
            if (result.length == 0) {
                //Hash Password
                let password = bycrypt.hash(user.password);
                console.log(password);


            } else {
                console.log("In invalid: " + result.length + result[1])
                validUser = false;
                res.send("Invalid username");
            }
        });

        if(validUser){
            user.password = "newpassword";
            db.collection('users').insertOne(user, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has sending message' });
                } else {
                    res.send(result.ops[0]);
                }
            });
        } 
        
    });

    
}

function deleteUser(app, db){
    app.delete('/u/d/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has deleting username' });
            } else {
                //Update? 
                res.send(item);
                /** Returns this on success
                 * {
                    "n": 1,
                    "opTime": {
                        "ts": "6542421526199664641",
                        "t": 1
                    },
                    "electionId": "7fffffff0000000000000001",
                    "ok": 1
                    }
                 */
            }
        })
    })
}

module.exports = (app, db) => {
    //Create User
    createUser(app, db);
    deleteUser(app, db);
}