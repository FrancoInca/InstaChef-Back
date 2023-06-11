const { Router } = require('express');
const pagosRouter = Router();
const  {pagos, getProductosPagos} = require("../controllers/pagosControllers")

pagosRouter.post("/checkout", pagos)
pagosRouter.post("/productosPagos", getProductosPagos)

module.exports = pagosRouter;