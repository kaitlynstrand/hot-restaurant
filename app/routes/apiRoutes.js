var path = require("path");

// myRoutes.js
module.exports = function(app) {
  app.get('/api/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, "../data/waitinglistData.js"));
  });

}
