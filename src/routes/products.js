const { Router } = require('express');
const productsRouter = Router();
const {
  handleProductCreate,
  handleProducts,
  handleProductByID,
  handleUpdateProduct,
  handleDeleteProduct,
} = require('../handlers/productsHandler');

productsRouter.post('/', handleProductCreate);
productsRouter.get('/', handleProducts);
productsRouter.get('/:ProductId', handleProductByID);
productsRouter.put('/', handleUpdateProduct);
productsRouter.delete('/:ProductId', handleDeleteProduct);

module.exports = productsRouter;
