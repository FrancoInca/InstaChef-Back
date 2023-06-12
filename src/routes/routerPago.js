const { Router } = require('express');
const pagosRouter = Router();
const handlePayment = require("../handlers/paymentHandler")

pagosRouter.post("/checkout", handlePayment)

module.exports = pagosRouter;