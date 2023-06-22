const { User } = require('../../db');
const jwt = require("jsonwebtoken");
const secretKey = "mi_secreto";
const updateUser = async (req, res) => {
  console.log("EDITE USERS !!!!!")
  try {
    const { token, newName } = req.body;
    
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
     
    const user = await User.findByPk(usuario.userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    user.name = newName;
    await user.save();

    const updatedUser = await User.findByPk(usuario.userId);
    return res.json({ token, user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
