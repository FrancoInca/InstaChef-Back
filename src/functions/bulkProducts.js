const { Product } = require('../db');
const { comidas } = require('../utils/Productos');

const bulkProducts = async () => {
  try {
    await Product.bulkCreate(comidas);
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error..');
  }
};
module.exports = { bulkProducts };
