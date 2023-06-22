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
        body:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING,
        },
        nameUser: {
           type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
          },
          userId: {
            type: DataTypes.STRING
          }

    },
    {
        timestamps: false,
    }
);
};