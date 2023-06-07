const {
    findOrCreateUser,
    updateUsers,
    deleteUser,
    searchUsersByName,
    updateProfile
} = require('../controllers/usersControllers');
const { User } = require('../db');

const handleUsersAll = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            const allUsers = await User.findAll();
            return res.status(200).json(allUsers);
        } else {
            const allUsers = searchUsersByName(name);
            return res.status(200).json(allUsers);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const handleUserById = async (req, res) => {
    const { UsersId } = req.params;
    try {
        const user = await User.findByPk(UsersId);

        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const handleUserCreate = async (req, res) => {
    const propNecesarias = ['email', 'name', 'password', 'adress'];
    const propFaltantes = [];
    propNecesarias.forEach((prop) => {
        if (!req.body[prop]) {
            propFaltantes.push(prop);
        }
    });
    if (propFaltantes.length > 0) {
        const faltantes = `Campos obligatorios: ${propFaltantes.join(', ')}`;
        res.status(400).json({ error: faltantes });
    } else {
        const { email, name, password, favorite, adress, cart } = req.body;
        try {
            const [newUser, createdUser] = await findOrCreateUser(
                email,
                name,
                password,
                favorite,
                adress,
                cart
            );
            createdUser
                ? res
                    .status(200)
                    .json({ message: `El usuario ${email} se ha creado exitosamente` })
                : res.status(200).json({ message: `Ya existe usuario con ${email}` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

const handleUpdateUser = async (req, res) => {
    const { email, name, password, favorite, adress, cart, banned } = req.body;
    try {
        if (!email) return res.status(400).json({ error: 'falta el mail' });

        const updateUser = await updateUsers(
            name,
            password,
            favorite,
            adress,
            cart,
            email,
            banned
        );
        return updateUser
            ? res
                .status(200)
                .json({ message: 'Se actualizo el usuario correctamente!' })
            : res.status(400).json({ message: 'No se actualizo ningun usuario' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const handleDeleteUser = async (req, res) => {
    const { UserID } = req.params;
    try {
      deleteUser(UserID);
      res.status(200).json({ message: 'el usuario ha sido eliminado' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    handleUsersAll,
    handleUserById,
    handleUserCreate,
    handleUpdateUser,
    handleDeleteUser,
    handleUpdateUser
  };
  