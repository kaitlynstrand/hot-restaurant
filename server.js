// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// server.js
var routes = require('./app/routes/htmlRoutes.js')
var api = require('./app/routes/apiRoutes.js')
//data where we read and write from
var data = require('./app/data/waitinglistData.js')

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// invoke the exported function to set up routes on our app
routes(app);
api(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
