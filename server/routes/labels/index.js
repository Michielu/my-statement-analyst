var ObjectID = require('mongodb').ObjectID;

//Get all label from user ID
function getAllLabels(app, db){
    app.get('/label/a/:userid', (req, res) => {
        const userID = req.params.userid;

        db.collection('labels').find({
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

//Delete label from user 
function deleteLabel(app, db){
    app.delete('/label/:id', (req, res) => { 
        const id = req.params.id;
        const details = {
          '_id': new ObjectID(id)
        };
        db.collection('labels').deleteOne(details, (err, item) => {
          if (err) {
            res.send({
              'error': 'An error has occurred'
            });
          } else {
            res.send('Label ' + id + ' deleted!');
          }
        });
      });
}

//Post label from user 
function createLabel(app, db){
  // TODO check if label is already created. 
    app.post('/label', (req, res) => {
        const label = {
          user: req.body.user,
          text: req.body.text
        };
        db.collection('labels').insertOne(label, (err, result) => {
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
    createLabel(app, db);
    deleteLabel(app, db);
    getAllLabels(app, db);
}