const express = require('express');
const usersRouter = require('./user');
const productsRouter = require('./products');
const loginRouter = require('./login');
const pagosRouter = require('./routerPago');
const deleteImage = require('../handlers/imageHandler');
const  reviewRouter = require ('./review');
const userNameRouter  = require('./userName');
const profilePhotoRouter = require('./profilePhoto');
const router = express.Router();

router.use('/reviews', reviewRouter);
router.use('/usersName', userNameRouter);
router.use('/', profilePhotoRouter)
router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/login', loginRouter );
router.use("/", pagosRouter);
router.use('/:public_id', deleteImage);



module.exports = router;
