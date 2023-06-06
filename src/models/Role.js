const { DataTypes } = require('sequelize')

module.exports = (sequelize)=> {

    sequelize.define('role', {
        id: {
            type: DataTypes.STRING,
            primaryKey:true,
        },
        name: {
            type: DataTypes.STRING
        }
    })
}
