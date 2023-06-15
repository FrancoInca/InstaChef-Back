const express = require('express');
const userNameRouter = express.Router();
const updateUser = require('../controllers/userNameControllers/editeNameUser');

userNameRouter.put('/:userId', updateUser);

module.exports = userNameRouter;
