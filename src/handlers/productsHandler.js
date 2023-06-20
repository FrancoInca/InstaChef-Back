const {
  createProduct,
  getProductById,
  getProductByName,
  updateProducts,
  deleteProduct,
} = require('../controllers/productsControllers');
const { Product } = require('../db');

const handleProducts = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const productsByName = await getProductByName(name);
      productsByName.length
        ? res.status(200).json(productsByName)
        : res.status(400).json({ message: `No se encontro ${name}` });
    }
    else {
      const allProducts = await Product.findAll();
      res.status(200).json(allProducts);

    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleProductByID = async (req, res) => {
  const { ProductId } = req.params;
  try {
    const product = await getProductById(ProductId);
    if (!product)
      return res.status(404).json({ error: 'Producto no encontrado' });
    return res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleProductCreate = async (req, res) => {
  const { image, name, price, category, ingredients, stock, serving_size } =
    req.body;
  try {
    const [newProduct, createdProduct] = await createProduct(
      image,
      name,
      price,
      category,
      ingredients,
      stock,
      serving_size
    );
    createdProduct
      ? res
        .status(200)
        .json({ message: `El platillo ${name} se ha creado exitosamente.` })
      : res.status(200).json({ message: `${name} ya existe.` });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const handleUpdateProduct = async (req, res) => {
  const {
    image,
    name,
    price,
    category,
    ingredients,
    stock,
    id,
    serving_size,
    banned,
  } = req.body;
  const foodToUpdate = {
    image,
    name,
    price,
    category,
    ingredients,
    stock,
    id,
    serving_size,
    banned,
  };
  try {
    if (!id) return res.status(400).json({ message: 'Falta el ID' });
    const updatedProduct = await updateProducts(foodToUpdate);
    return (
      updatedProduct &&
      res
        .status(200)
        .json({ message: 'Se actualizo el platillo correctamente!' })
    );
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

const handleDeleteProduct = async (req, res) => {
  const { ProductId } = req.params;
  try {
    deleteProduct(ProductId);
    res.status(200).json({ message: 'El producto ha sido eliminado.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleProductCreate,
  handleProducts,
  handleProductByID,
  handleUpdateProduct,
  handleDeleteProduct,
};
