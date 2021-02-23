const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const users = [];

app.post('/users', function(req, res) {
    users.push(req.body);
    console.log(req.body);
    res.sendStatus(201);
});

app.get('/users', function(req, res) {
    res.send({ users: users });
});

app.get('/' , function(req , res) {
    console.log('Hello World')
});

app.listen(8080);