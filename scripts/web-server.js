var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var events = require('./eventsController');
var users = require('./usersController.js');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath+ '/app/'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
// app.post('/data/event', events.save);

app.get('/data/event', events.getAll);

app.get('/data/user/:userName', users.get);
app.post('data/user/:userName', users.save);

app.listen(8000,()=>{
    console.log('listening on port 8000');
});