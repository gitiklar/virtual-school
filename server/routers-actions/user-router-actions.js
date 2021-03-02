const User = require('../models/user-model');

async function addUser (req, res, next) {
    const user = new User(req.body);
    try {
        await user.save();
        res.send({myText:'OK'})
    } catch(err) {
        res.send({myText:'Err'})
    }
};

module.exports = {
    addUser,
}