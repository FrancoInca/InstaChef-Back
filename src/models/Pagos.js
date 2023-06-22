const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define(
      'pagos',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        method: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        products: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        totalAmount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  };