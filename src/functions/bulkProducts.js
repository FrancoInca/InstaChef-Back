const { Product, User, Role } = require('../db');
const { comidas } = require('../utils/Productos');

const bulkProducts = async () => {
  try {
    await Product.bulkCreate(comidas);
    await Role.create({id: 1, name: "Admin", user_roles: 1})
    await User.create({
      name: "Admin",
      email: "chef@insta.com",
      password: "Chef1234",
      user_roles: 1
    })
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error..');
  }
};
module.exports = { bulkProducts };
