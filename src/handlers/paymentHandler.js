const e = require('express');
const {
  pagos,
  paymentHistory,
  allPayments,
} = require('../controllers/pagosControllers');
const {
  getProductById,
  updateProducts,
} = require('../controllers/productsControllers');

const handlePayment = async (req, res) => {
  try {
    const { amount, id, idFood, token, email } = req.body;
    let error = false;
    let errorName = '';
    for (let i = 0; i < idFood.length; i++) {
      const response = await getProductById(idFood[i].id);
      if (response === null) {
        errorName = `El producto no existe.`;
        error = true;
        break;
      }
      const diff = response.dataValues.stock - idFood[i].quantity;
      if (diff < 0) {
        errorName = `El producto ${response.name} no se encuentra con stock disponible`;
        error = true;
        break;
      }
    }
    if (error) return res.status(400).send(errorName);
    const names = [];
    for (let i = 0; i < idFood.length; i++) {
      if (!error) {
        const response = await getProductById(idFood[i].id);
        const diff = response.dataValues.stock - idFood[i].quantity;
        names.push({
          name: response.dataValues.name,
          quantity: idFood[i].quantity,
        });
        updateProducts({ id: idFood[i].id, stock: diff });
      }
    }
    const products = names.map((e) => `x${e.quantity} ${e.name}`).join(', ');
    const { err } = pagos(amount, id, products, idFood, token, email);
    if (err) return res.status(400).send(payment);
    return res
      .status(200)
      .json({ message: `Se completo la compra de ${products}` });
  } catch (error) {
    console.log(error.message);
  }
};

const handleProductHistory = async (req, res) => {
  const { token } = req.params;
  const { products, error } = await paymentHistory(token);
  if (!error) return res.status(200).json(products);
  return res.status(404).json(error);
};

const handleAllPayments = async (req, res) => {
  const { token } = req.params;
  try {
    const response = await allPayments(token);
    if (response.err) return res.status(401).json(response.err);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { handlePayment, handleProductHistory, handleAllPayments };
