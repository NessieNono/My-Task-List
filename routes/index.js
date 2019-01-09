let express = require('express');
let router = express.Router();

// the callback functions take a request, response and next 
router.get('/', function(req, res, next) {
	res.render('index.html');

})

module.exports = router; 
