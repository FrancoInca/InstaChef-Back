const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('orderDetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sellID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
  });
};