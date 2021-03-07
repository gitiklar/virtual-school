const User = require('../models/user-model');

async function addUser (req, res, next) {
    const user = new User(req.body);
    try {
        await user.save();
        res.sendStatus(200);
    } catch(err) {
        res.status(400).send({error:err});
    }
};

module.exports = {
    addUser,
}