const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('order',
    {
      state: {
        type: DataTypes.ENUM(['carrito', 'creada', 'confirmada', 'cancelada', 'completa'])
      },
      payment_status: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
}