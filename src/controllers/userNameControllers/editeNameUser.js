const { User } = require('../../db');

const updateUser = async (req, res) => {
  console.log("EDITE USERS !!!!!")
  try {
    const { userId, newName } = req.body;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    user.name = newName;
    await user.save();

    const updatedUser = await User.findByPk(userId);
    return res.json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
