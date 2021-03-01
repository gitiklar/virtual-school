const express = require('express');
const https = require('https');
const fs = require('fs');

const userRouter = require('./models/user-model');

const app = express();
app.use(userRouter);
app.get('/',function(req , res){
    console.log('Hello World');
});

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);







/*

const mongoose = require('mongoose');
const User = require('./models/user-model');

async function main() {
    const connection = await mongoose.connect('mongodb://localhost/27017',
                 { useNewUrlParser: true , useUnifiedTopology: true, });
    const u1 = new User({
        //userId: 
        firstName: 'Gita',
        lastName: 'Klar',
        userName: 'GitaKlar',
        email: 'gitiklar@gmail.com',
        password: 'Gitty600',
        phoneNumber: '0548530600',
        address: {
            city: 'Bene-Berak',
            street: 'BaalShemTov',
            houseNumber: '21',
        },
        role: 'student' 
    });
    await u1.save();
    mongoose.disconnect();
}

main();
*/