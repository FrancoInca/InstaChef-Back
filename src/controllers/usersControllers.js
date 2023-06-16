const { User } = require("../db");
const {Op} = require('sequelize')

async function findOrCreateUser(
    email,
    name,
    password,
    favorite = [],
    adress,
    cart
) {
    const [newUser, createdUser] = await User.findOrCreate({
        where: {
            email: email,
        },
        defaults: {
            name,
            email,
            password,
            favorite,
            adress,
            cart,
        },
    });
    return [newUser, createdUser];
}

async function updateUsers(
    name,
    password,
    favorite,
    adress,
    cart,
    email,
    banned
) {
    const updateUser = await User.update(
        {
            name
        },
        {
            where: { email: email },
        }
    );
    return updateUser;
}

async function updateProfile(email, name, adress) {
    const updateProfile = await User.update(
        {
            name,
            adress,
        },
        {
            where: { email: email },
        }
    );
    return updateProfile;
}

async function deleteUser(emailUser) {
    await User.update(
        { banned: !banned },
        {
            where: {
                email: emailUser,
            },
        }
    );
    return "Usuario eliminado";
}

async function searchUsersByName(name) {
    const allUsers = await User.findAll({
        where: {
            name: { [Op.substring]: name },
        },
    });
    return allUsers;
}

module.exports = {
    findOrCreateUser,
    updateUsers,
    deleteUser,
    searchUsersByName,
    updateProfile
};