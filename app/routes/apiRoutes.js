var path = require("path");
var table = require("../data/tableData.js")

// myRoutes.js
module.exports = function(app) {
	app.get('/api/reserve', function(req, res) {
		res.sendFile(path.join(__dirname, "../data/tableData.js"));
	});
	app.post('/api/add/tableData', function(req, res) {
		var newName = req.body.name;
		table.push(newName) 


		console.log(newName)
		res.json(table)
	});
}
// 	app.post('/api/add/waitinglistData', function(req, res) {
// 		var newPhone = req.body;

// 		console.log(newPhone)
// 		res.json(newPhone)
// 	});
// 	app.post('/api/add/waitinglistData', function(req, res) {
// 		var newEmail = req.body;

// 		console.log(newEmail)
// 		res.json(newEmail)
// 	}); 
// 	app.post('/api/add/waitinglistData', function(req, res) {
// 		var newUniqueId = req.body;

// 		console.log(newUniqueId)
// 		res.json(newUniqueId)
// 	}) 
// }
