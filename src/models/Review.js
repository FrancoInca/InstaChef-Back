const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
sequelize.define(
    'review',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        body:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating_products: {
            types: DataTypes.INTEGER,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          },
          

    },
    {
        timestamps: false,
    }
);
};