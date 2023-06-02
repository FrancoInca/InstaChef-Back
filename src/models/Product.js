const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('product', 
  {
   id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    unique:true
   },
   name: {
    type: DataTypes.STRING,
    allowNull: false
   },
   price: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   description: {
    type: DataTypes.STRING,
   },
   category:{
    type: DataTypes.STRING,
   },
   ingredients: {
    type: DataTypes.STRING
   },
   stock: {
    type: DataTypes.INTEGER
   }


  
  }
    )}