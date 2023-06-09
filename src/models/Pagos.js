const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('pagos', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
  
      metodo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,    
      },
      nombre: {
          type: DataTypes.STRING,
          allowNull: false,
         
      },
      idCurso: {
        type: DataTypes.STRING,
        allowNull: false,
      }
   
      
    },
    {
      timestamps: true,
    });
  };