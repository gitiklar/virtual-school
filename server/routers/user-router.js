const express = require('express');
const router = express.Router();

const userActions = require('../routers-actions/user-router-actions');

router.post('/user', userActions.addUser);
router.post('/login', userActions.login);

module.exports = router;