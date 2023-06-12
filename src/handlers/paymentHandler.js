const e = require('express');
const pagos = require('../controllers/pagosControllers');
const { getProductById, updateProducts } = require('../controllers/productsControllers');

const handlePayment = async (req, res) => {
  const { amount, id, email, idFood } = req.body;
  let error = false;
  let errorName = '';
  for (let i = 0; i < idFood.length; i++) {
    const response = await getProductById(idFood[i].id);
    if (response === null) {
      errorName = `El producto no existe.`;
      error = true;
      break;
    }
    const diff = (response.dataValues.stock - idFood[i].quantity)
    if (diff < 0) {
      errorName = `El producto ${response.name} no se encuentra con stock disponible`;
      error = true;
      break;
    }
  }
  if (error) return res.status(400).send(errorName);
  const names = []
  for (let i = 0; i < idFood.length; i++){ 
    if (!error) {
      const response = await getProductById(idFood[i].id);
      const diff = (response.dataValues.stock - idFood[i].quantity);
      names.push({name: response.dataValues.name, quantity: idFood[i].quantity})
      updateProducts(null, null, null, null, null, diff, idFood[i].id)
    }
  }
  const products = names.map(e=>`${e.name} x${e.quantity}`).join(", ")
  pagos(amount, id, products)
  return res.status(200).json({ message: `Se completo la compra de ${products}` });
};
module.exports = handlePayment;
