const express = require('express');
const profilePhotoRouter = express.Router();
const  updateProfilePhoto  = require('../controllers/profilePhotoControllers/profilePhoto');


profilePhotoRouter.put('/users/:userId/profile-photo', updateProfilePhoto);

module.exports = profilePhotoRouter;
