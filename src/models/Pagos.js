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
      amount: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      idCurso: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      }
   
      
    },
    {
      timestamps: true,
    });
  };