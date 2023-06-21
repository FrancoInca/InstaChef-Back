const express = require('express');
const profilePhotoRouter = express.Router();
const  updateProfilePhoto  = require('../controllers/profilePhotoControllers/profilePhoto');


profilePhotoRouter.put('/users/profile-photo', updateProfilePhoto);

module.exports = profilePhotoRouter;
