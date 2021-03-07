const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user-router');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vitualSchool',{ useNewUrlParser: true , useUnifiedTopology: true, });
const app = express();

const corsOptions = { origin: "http://localhost:8080", credentials: true, };

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(userRouter);
app.get('/',function(req , res){
  res.send('Virtual School');
});

app.listen(9000);