let express = require('express');
let router = express.Router();

// database
let mongojs = require('mongojs');
// the second param is an array of the collections you want to use  
let db = mongojs("mongodb://master:servant1@ds153394.mlab.com:53394/mytasklist_nessie", ['tasks']);



// ------------ GET ALL TASKS ------------ //
router.get('/tasks', function(req, res, next) {
	// the callback functions take a request, response and next 
	db.tasks.find(function(err, tasks) {
		if (err) {
			res.send(err);
		} else {
			res.json(tasks);
		}
	})
})

module.exports = router; 
