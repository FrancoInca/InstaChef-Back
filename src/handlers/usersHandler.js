const jwt = require('jsonwebtoken');
const secretKey = 'mi_secreto';
const {
  findOrCreateUser,
  updateUsers,
  deleteUser,
  searchUsersByName,
  verifyUser,
  updateFavorites,
} = require('../controllers/usersControllers');
const { User } = require('../db');

const handleUsersAll = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allUsers = await User.findAll();
      return res.status(200).json(allUsers);
    } else {
      const allUsers = searchUsersByName(name);
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUserByToken = async (req, res) => {
  const { token } = req.params;

  try {
    let user;
    jwt.verify(token, secretKey, (err, userVerified) => {
      if (err) return res.status(401).send('Acceso no autorizado');
      user = userVerified;
      // console.log(user);
    });
    const userResponse = await User.findByPk(user.userId);
    return res.status(200).json(userResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleVerifyUser = async (req, res) => {
  const { token } = req.params;
  try {
    const response = await verifyUser(token);
    if (response.err) throw new Error(response.err);
    return res.status(200).json({ role: response.role });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ role: 0, error: error.message });
  }
};

const handleUserCreate = async (req, res) => {
  const propNecesarias = ['email', 'name', 'password', 'address'];
  const propFaltantes = [];
  propNecesarias.forEach((prop) => {
    if (!req.body[prop]) {
      propFaltantes.push(prop);
    }
  });
  if (propFaltantes.length > 0) {
    const faltantes = `Campos obligatorios: ${propFaltantes.join(', ')}`;
    res.status(400).json({ error: faltantes });
  } else {
    const { email, name, password, favorite, address, cart } = req.body;
    try {
      const [newUser, createdUser] = await findOrCreateUser(
        email,
        name,
        password,
        favorite,
        address,
        cart
      );
      createdUser
        ? res
          .status(200)
          .json({ message: `El usuario ${email} se ha creado exitosamente` })
        : res.status(200).json({ message: `Ya existe usuario con ${email}` });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const handleUpdateUser = async (req, res) => {
  const { email, name, password, favorite, address, cart, banned } = req.body;
  try {
    if (!email) return res.status(400).json({ error: 'falta el mail' });

    const updateUser = await updateUsers(
      name,
      password,
      favorite,
      address,
      cart,
      email,
      banned
    );
    return updateUser
      ? res
        .status(200)
        .json({ message: 'Se actualizo el usuario correctamente!' })
      : res.status(400).json({ message: 'No se actualizo ningún usuario' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleFavorites = async (req, res) => {
  let { userId } = req.params;
  let { productId } = req.body;

  try {

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    if (!Array.isArray(productId)) {
      productId = [productId];
    }

    const isProductInFavorites = productId.some((id) => user.favorite.includes(id));

    if (isProductInFavorites) {
      user.favorite = user.favorite.filter((fav) => !productId.includes(fav));
      await user.save();
      return res.status(200).json(user);
    }

    user.favorite.push(...productId);
    await user.save();

    await updateFavorites(userId, user.favorite);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
};

const handleDeleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await deleteUser(userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleUsersAll,
  handleUserById,
  handleUserCreate,
  handleUpdateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleVerifyUser,
  handleUserByToken,
  handleFavorites,
};
