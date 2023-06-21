const express = require('express');
const userNameRouter = express.Router();
const updateUser = require('../controllers/userNameControllers/editeNameUser');

userNameRouter.put('/', updateUser);

module.exports = userNameRouter;
