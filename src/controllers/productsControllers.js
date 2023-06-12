const { Product } = require('../db');
const { Op } = require("sequelize");

const createProduct = async (
  image,
  name,
  price,
  category,
  ingredients,
  stock,
  serving_size
) => {
  const [newProduct, created] = await Product.findOrCreate({
    where: {
      name: name,
    },
    defaults: {
      image,
      name,
      price,
      category,
      ingredients,
      stock,
      serving_size
    },
  });
  return [newProduct, created];
};

const getProductByName = async (name) => {
  const allProduct = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return allProduct;
};

const getProductById = async (productId) => {
  const product = await Product.findByPk(productId);
  return product;
};

async function updateProducts(
  image,
  name,
  price,
  category,
  ingredients,
  stock,
  id
) {
  const updateProperties = {
    image,
    name,
    price,
    category,
    ingredients,
    stock,
  };
  // Eliminar propiedades undefined o null del objeto
  Object.keys(updateProperties).forEach(
    (key) =>
      (updateProperties[key] === undefined || updateProperties[key] === null) &&
      delete updateProperties[key]
  );
  console.log(updateProperties);

  const updateProduct = await Product.update(updateProperties, {
    where: {
      id: id,
    },
  });

  return updateProduct;
}

const deleteProduct = async (id) => {
  await Product.destroy({ where: { id } });
};

module.exports = {
  createProduct,
  getProductById,
  getProductByName,
  updateProducts,
  deleteProduct,
};
