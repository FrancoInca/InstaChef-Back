const { Router } = require('express');
const pagosRouter = Router();
const  pagos = require("../controllers/pagosControllers")

pagosRouter.post("/checkout", pagos)

module.exports = pagosRouter;