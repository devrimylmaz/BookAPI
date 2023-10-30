const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const { MongoDbConnection } = require("./libs/mongo/mongoDbConnection");
const router = require('./router')

const app = express();
const port = 3000;

const dbConfig = config.mongodb;
const dbConnection = new MongoDbConnection(dbConfig);
dbConnection.connect()
    .then(() => {
        console.log(`server: Mongoose - connection OK.`);
    }).catch(error => {
        console.log(`server: Error while connecting mongo : error: ${JSON.stringify(error)} `);
        process.exit(1);
    });


// Parse incoming JSON data
app.use(bodyParser.json());

// Router
app.use('/', router);

// Start the server
var server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = server;
