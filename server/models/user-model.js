
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //userId: 
    firstName: { type: String , required: true },
    lastName: { type: String , required: true },
    userName: { type: String , required: true , unique : true },
    email: { type: String , required: true },
    password: { type: String , required: true },
    phoneNumber: { type: String , required: true },
    address: {
        city: { type: String , required: true },
        street: { type: String , required: true },
        houseNumber: { type: String , required: true },
    },
    role: { type: String , required: true },
});

module.exports = mongoose.model('User', userSchema);
