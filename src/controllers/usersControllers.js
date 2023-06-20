const { User } = require("../db");
const {Op} = require('sequelize')
const jwt = require('jsonwebtoken');
const secretKey = 'mi_secreto';

async function findOrCreateUser(
  email,
  name,
  password,
  favorite = [],
  address,
  cart
) {
  const [newUser, createdUser] = await User.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
      name,
      email,
      password,
      favorite,
      address,
      cart,
    },
  });
  return [newUser, createdUser];
}
async function verifyUser(token) {
  try {
    let user;
    jwt.verify(token, secretKey, (err, userVerified) => {
      if (err) throw new Error('Hubo un error al verificar el usuario.');
      user = userVerified;
    });
    const userVerified = await User.findByPk(user.userId);
    return { role: userVerified.dataValues.user_roles, err: null };
  } catch (error) {
    console.log(error.message);
    return { err: error.message };
  }
}
async function updateUsers(
  name,
  password,
  favorite,
  address,
  cart,
  email,
  banned
) {
  const updateUser = await User.update(
    {
      name,
      password,
      favorite,
      address,
      cart,
      banned,
    },
    {
      where: { email: email },
    }
  );
  return updateUser;
}

async function updateProfile(email, name, address) {
  const updateProfile = await User.update(
    {
      name,
      address,
    },
    {
      where: { email: email },
    }
  );
  return updateProfile;
}

async function deleteUser(idUser) {
  const user = await User.findByPk(idUser);
  await User.update(
    { banned: !user.dataValues.banned },
    {
      where: {
        id: idUser,
      },
    }
  );
  return !user.dataValues.banned;
}

async function searchUsersByName(name) {
  const allUsers = await User.findAll({
    where: {
      name: { [Op.substring]: name },
    },
  });
  return allUsers;
}

module.exports = {
  findOrCreateUser,
  updateUsers,
  deleteUser,
  searchUsersByName,
  updateProfile,
  verifyUser,
};