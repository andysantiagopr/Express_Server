/* 

app.js builds the Express app: defines, routes, sets up middleware, configures the app. Does NOT start listening. It defines what the server does. 
this is splitted from index.js to be able to test without a server, reuse app, avoid port conflicts, and follow real-world express conventions. 

*/

// import files and packages up here
const express = require("express"); //imports express library (blueprint)
const app = express(); //creates a server app using Express (building)
const morgan = require('morgan'); //imports the morgan library. Middleware for Express that helps log HTTP requests.
const data = require('./data.json'); //Loads the local json file and stores it in data.

// add your routes and middleware below

app.use(morgan('tiny')); //runs Morgan middleware for every incoming req using the tiny logging format. 

app.get("/", (req, res) => { //app.get registers a route. This defines a route for the route path of the server
  res.send("It's working"); //sets the response. Ends the request. 
});

app.get('/data', (req, res) => { //This creates a route so that when someone sends a GET request to /data, respond with the data object. 
  res.json(data);
});



// finally export the express application

module.exports = app; //required for index.js to be able to use it. 