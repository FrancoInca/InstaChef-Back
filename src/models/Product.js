const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('product',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      stock: {
        type: DataTypes.INTEGER
      },
      reviews: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  )
}