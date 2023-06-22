const { Product, User, Role } = require('../db');
const { comidas } = require('../utils/Productos');

const bulkProducts = async () => {
  try {
    await Product.bulkCreate(comidas);
    await Role.create({ id: 1, name: 'Admin', user_roles: 1 });
    await User.create({
      name: 'Admin',
      email: 'chef@insta.com',
      password: '$2a$10$Uuy3ko8kXl17Ijg38NY5guZprv/uAhywOo2kYQ1j7QvkanQE3hL0q',
      user_roles: 1,
    });
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error..');
  }
};
module.exports = { bulkProducts };
