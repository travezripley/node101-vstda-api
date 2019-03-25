//Node 101 - vstda-api - fifth project in the module.
//This project will be used as a back end service for a later project (where you will build the front end).
//Authored by Michael J Roberts Jr. - Created by Travez Ripley
//Started March 24th, 2019 @ 1500.

//Server Setup
const express = require('express'); // express server
const app = express();

//body Parser Setup *middleWare
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

//Morgan *logger* setup
const morgan = require('morgan'); //logger
app.use(morgan('dev'));

//Data Variables
var data = require('./mockData');
var fs = require('fs');

//Routing
app.get('/', function (_req, res) {
  res.status(200).send({ status: 'ok' });
});

app.get('/api/TodoItems', function (req, res) {
  res.status(200).json(data);

}); 

app.get('/api/TodoItems/ :number', function (req, res) {
  var number = parseInt(req.params.number, 10);
  res.status(200).json(data);

  //using the array based numbering.
  let todoItem = data[number];
  res.status(200).json(todoItem);
}); 

app.post('/api/TodoItems/', function (req, res) {
  let isToDoNew = true;
  for (let objIndex in data) {
    if (data[objIndex].todoItemId == req.body.todoItemId) {
      data[objIndex] = req.body;
      res.status(201).send(data[objIndex]);
      isToDoNew = !isToDoNew;
    }

  }
  if (isToDoNew) {
    data.push(req.body);
    res.status(200).json(req.body);
  }

});


module.exports = app;
