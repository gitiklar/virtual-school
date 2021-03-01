const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.get('/', function(req, res, next) {
    const user = new User();
});

router.post('/', async function(req, res, next) {
    const user = new User(req.body);
    try {
        await user.save();
    } catch(err) {
        return next(err);
    }
});

module.exports = router;