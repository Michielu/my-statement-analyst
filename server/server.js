const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./config/db');

const app = express();

const port = 8000;
// app.use(cors); //This blocks connecting to mlab
  //Process URL encoded 
app.use(bodyParser.urlencoded({
    extended: true
})); 
 

MongoClient.connect(db.url, {
    useNewUrlParser: true
}, (err, database) => {
    if (err) return console.log(err)

    // Make sure you add the database name and not the collection name
    let datab = database.db("my-statement-analyst")

    require('./routes')(app, datab);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})