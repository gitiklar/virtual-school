
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //userId: 
    firstName: { type: String , required: true },
    lastName: { type: String , required: true },
    userName: { type: String , required: true },
    email: { type: String , required: true },
    password: { type: String , required: true },
    phoneNumber: { type: String , required: true },
    address: {
        city: String,
        street: String,
        houseNumber: String,
    },
    role: { type: String },
});

module.exports = mongoose.model('User', userSchema);
