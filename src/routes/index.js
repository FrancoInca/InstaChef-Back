const express = require('express');
const usersRouter = require('./user');
const productsRouter = require('./products');
const loginRouter = require('./login');
const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/login', loginRouter )

module.exports = router;
