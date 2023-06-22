const { Router } = require('express');
const pagosRouter = Router();

const {
  handlePayment,
  handleProductHistory,
  handleAllPayments,
} = require('../handlers/paymentHandler');

pagosRouter.post('/checkout', handlePayment);
pagosRouter.get('/productHistory/:token', handleProductHistory);
pagosRouter.get('/payments/all/:token', handleAllPayments);

module.exports = pagosRouter;