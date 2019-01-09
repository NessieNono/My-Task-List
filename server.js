// main backend server file 
const express = require('express'); 
// this will include express in from the node_modules folder 
// The path module provides utilities for working with file and directory paths
const path = require('path'); 
const bodyParser = require('body-parser'); 


let index = require('./routes/index'); 
let tasks = require('./routes/tasks'); 

let app = express();
const port = 3000;



// ------------- VIEW ENGINE ------------- //
// tell the system our views will be in the views folder
app.set('views', path.join(__dirname , 'views')); 
app.set('view engine', 'ejs');
// to render files with html extension
app.engine('html', require('ejs').renderFile);
// ----------------------------------------------- //




// ------------- SET STATIC FOLDER ------------- //	
// this is where we put all our angular stuff 
// all the angular files will go in the 'client' folder
app.use(express.static(path.join(__dirname, 'client')));
// ----------------------------------------------- //	

// app.use([path,] callback [, callback...])
// Mounts the middleware functoins at the specified path: the middleware function is executed when the base of the requested path matches path.

// ------------ BODY PARSER MIDDLEWARE ------------ //
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})); 
// ----------------------------------------------- //	

// ------------ CREATE ROUTES ------------ //
// Home page, be associated with the index route file 
app.use('/', index); 
app.use('/api', tasks); 
// ----------------------------------------------- //

// ------------ START SERVER ------------ //
// run our server 
// takes in the port number and the callback function
app.listen(port, function() {
	console.log("Server started on port ", port);
})
// ----------------------------------------------- //











