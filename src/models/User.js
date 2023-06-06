const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
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
            },

            adress: {
                type: DataTypes.STRING
            },

            favorite: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                defaultValue: [],
            },

            cart: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            banned: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

        }

    )
};