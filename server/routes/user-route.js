const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.post('/user', async function(req, res, next) {
    res.send({myText:'aaaaa'});
/*
    const user = new User(req.body);
    try {
        await user.save();
        res.send('aaaaa');
    } catch(err) {
        return next(err);
    }
    */
});

module.exports = router;


/*

async function main() {
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