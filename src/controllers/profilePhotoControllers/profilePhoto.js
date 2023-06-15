const { User } = require('../../db');
const fs = require('fs');
const path = require('path');

const updateProfilePhoto = async (req, res) => {
  try {
    const { userId } = req.params;
    const { profilePhoto } = req.body;

    // Buscar el usuario por su ID
    const user = await User.findByPk(userId);

    // Verificar si se encontró el usuario
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Eliminar la foto de perfil anterior si existe
    if (user.profilePhoto) {
      const filePath = path.join(__dirname, '..', '..', 'profile_photos', user.profilePhoto);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    // Actualizar la ruta de acceso a la nueva foto de perfil
    user.profilePhoto = profilePhoto;
    await user.save();

    return res.json({ message: 'Foto de perfil actualizada correctamente', user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProfilePhoto;
