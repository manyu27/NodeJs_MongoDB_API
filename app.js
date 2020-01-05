/**
 * The entry file of the application
 */

let express = require('express');
require('dotenv').config(); // To load all the environment variables from the .env file


let app = express();
let routes = require("./src/routes");

let bodyParser = require('body-parser');

var port = process.env.PORT || 3030 ;

app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

app.get('/',(res) => res.send("Connected to the server"));

app.use('/orgs',routes);


module.exports = app.listen(port, function () {
    console.log("Running server on port " + port);
});