require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

   modelDefiners.forEach((model) => model(sequelize));

  

let entries = Object.entries(sequelize.models);
let capEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capEntries);

let { Product, Order, OrderDetail, User, Role, Pagos, Review } = sequelize.models; 

Order.belongsTo(User); //pertenece a un usuario
User.hasMany(Order); //tiene muchas pedidos

Product.belongsToMany(Order, {through: OrderDetail}); //un producto en varios pedidos
Order.belongsToMany(Product, {through: OrderDetail}); //un pedido , muchos productos
User.belongsTo(Role, { foreignKey: 'user_roles' });
Role.hasMany(User, { foreignKey: 'user_roles' });
Pagos.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Pagos, { foreignKey: "userId" });
Product.hasMany(Review, { foreignKey: "productId" });
Review.belongsTo(Product, { foreignKey: "productId" });




module.exports = {
  ...sequelize.models,
  User,
  Product,
  Review,
  Pagos,
  Role,
  conn: sequelize,
};
