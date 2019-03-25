//Node 101 - vstda-api - fifth project in the module.
//This project will be used as a back end service for a later project (where you will build the front end).
//Authored by Michael J Roberts Jr. - Created by Travez Ripley
//Started March 24th, 2019 @ 1500.

//Server Setup
const express = require('express'); // express server
const app = express();

//body Parser Setup
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

//Morgan *logger* setup
const morgan = require('morgan'); //logger
app.use(morgan('dev'));

//Data Variables
var data = require('./mockData');
var fs = require('fs');

//Routing
app.get('/', function(req, res) {
  res.status(200).send({status: 'ok'});
});

app.get('/api/TodoItems', function(req, res) {
  res.status(200).json(data);

}); 
// add your code here

module.exports = app;
