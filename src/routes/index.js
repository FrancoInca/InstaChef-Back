const express = require('express');
const usersRouter = require('./user');
const productsRouter = require('./products');
const loginRouter = require('./login');
const pagosRouter = require('./routerPago');
const deleteImage = require('../handlers/imageHandler');
const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/login', loginRouter )
router.use("/", pagosRouter)
router.use('/:public_id', deleteImage);

module.exports = router;
