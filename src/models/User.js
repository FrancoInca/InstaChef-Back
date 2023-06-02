const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('user', 
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
     
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
    }

  )};