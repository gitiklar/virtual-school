
const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user-route');
mongoose.connect('mongodb://localhost/27017',{ useNewUrlParser: true , useUnifiedTopology: true, });
const app = express();
const bodyParser = require('body-parser')

const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
};
app.use(bodyParser.json())
app.use(userRouter);
app.use(cors(corsOptions));

app.get('/',function(req , res){
  res.sendStatus(200);
});

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello2 world\n");
}).listen(8000);

