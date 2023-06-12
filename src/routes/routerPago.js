const { Router } = require('express');
const pagosRouter = Router();
// const  {pagos, getProductosPagos} = require("../controllers/pagosControllers")
const handlePayment = require("../handlers/paymentHandler")

pagosRouter.post("/checkout", handlePayment)
// pagosRouter.post("/checkout", pagos)
// pagosRouter.post("/productosPagos", getProductosPagos)

module.exports = pagosRouter;