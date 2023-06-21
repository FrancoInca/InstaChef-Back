const { User } = require('../../db');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const secretKey = "mi_secreto";

const updateProfilePhoto = async (req, res) => {
  try {
  
    const { profilePhoto, token } = req.body;
   console.log("token aqui", token);

   // Decodificando el token
   let usuario = null
   jwt.verify(token, secretKey, (err, user) => {
     if(err) {
       return  res.status(401).send("No autorizado")
     } else {
       usuario = user
       console.log(user);
     }
   } )

    // Buscar el usuario por su ID
    const user = await User.findByPk(usuario.userId);
   console.log(user);
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

    return res.json({ token, message: 'Foto de perfil actualizada correctamente', user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateProfilePhoto;
