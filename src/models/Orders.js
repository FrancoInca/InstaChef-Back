const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('order',
  { 
   state:{
    type: DataTypes.ENUM(['carrito', 'creada', 'confirmada', 'cancelada', 'completa'])
   },
   
   payment_status: {
    type: DataTypes.STRING
   },
   adress: {
    type: DataTypes.STRING,
    allowNull: true
   }

}
)}