var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var todos = [
  'Clean dog.',
  'Buy Groceries.',
  'Send letter.'
];

app.get('/', function(req, res) {
    res.json({ message: 'WORKING!' });
});

app.get('/todo', function(req, res) {
    res.json(todos);
});

app.get('/todo/:id', function(req, res){
	res.json(todos[req.params.id]);
});

app.get('/todo/delete/:id', function(req, res){
	delete todos[req.params.id];
	res.json(todos);
});

app.post('/todo/add/', function(req, res){
	todos.push(req.body.addition);
	res.json(todos);
});

var server = app.listen(8000);