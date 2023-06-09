const { User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = "mi_secreto";
// const secretKey = process.env.SECRET_KEY;

const signUp = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    // Verificar si existe el email
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) {
      return res
        .status(400)
        .send({ message: "The email is already registered." });
    }

    // Hasheamos la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Guardar el usuario
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });

    // Crear y firmar el JWTOKEN
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, secretKey);

    res.json({ token });
    console.log(token);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Valido que exista el usuario
    const user = await User.findOne({ where: { email } });
    // if (!user) return res.status(401).send({ message: "Invalid credentials." });

    // Verificar que la contraseña coincida con la contraseña hasheada en la base de datos
    if(password) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(401).send({ message: "Invalid credentials." });
  
    }
    // Crear y firmar un JWT que contenta el ID del usuario
    // const token = jwt.sign({ userId: user.id }, secretKey);

    res.json({ user });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {

  let token = req.headers["x-access-token"]
console.log(token)
  if (!token) {
    return res.status(403).send({
      message: '¡No se proporciona token!'
    })
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: '¡No autorizado!'
      })
    }
    req.id = decoded.id
    next()
  })
}


module.exports = { signUp, login, verifyToken };
