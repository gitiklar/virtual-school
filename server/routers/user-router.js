const express = require('express');
const router = express.Router();

const userActions = require('../routers-actions/user-router-actions');

router.post('/user', userActions.addUser);

module.exports = router;