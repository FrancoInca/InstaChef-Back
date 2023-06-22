const { User } = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const mailer = require('../functions/mailer');
const secretKey = 'mi_secreto';
const nodemailer = require("nodemailer");
// const secretKey = process.env.SECRET_KEY;

async function mailer(email) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "instachef2@gmail.com",
            pass: "ylhfxhukvdnoleam",
        },
    });

    let info = await transporter.sendMail({
        from: '"👩‍🍳InstaChef👨‍🍳" <instachef2@gmail.com>',
        to: email,
        subject: "Registro exitoso",
        text: "Bienvenido a InstaChef",
        html: "<b>Bienvenido a InstaChef. Gracias por elegirnos y ¡que disfrute de su comida!</b>",
    });
}

const signUp = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    // Verificar si existe el email

    // Hasheamos la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Guardar el usuario
    const user = await User.create({
      name,
      lastName,
      email,
      password: hashedPassword,
    });

    // Crear y firmar el JWTOKEN
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey);
    // console.log(token, user);
    res.json({ token, user: user });
    mailer(req.body.email).catch(console.error);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password, name, profilePhoto } = req.body;
    // Valido que exista el usuario
    const user = await User.findOne({ where: { email } });
    // console.log(user)
    if (!user) {
      const newUser = await User.create({
        email,
        password,
        name: name ?? 'Desconocido',
        profilePhoto: profilePhoto ?? '',
      });
      // Crear y firmar un JWT que contenga el ID del usuario
      const token = jwt.sign({ userId: newUser.id }, secretKey);
      return res.status(200).json({ token, user });
      // console.log("no estaba", token, newUser )
    }
    if (password) {
      // Verificar que la contraseña coincida con la contraseña hasheada en la base de datos
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(401).send({ message: 'Invalid credentials.' });
    }
    // Crear y firmar un JWT que contenga el ID del usuario
    const token = jwt.sign({ userId: user.id }, secretKey);
    res.json({ token, user });
    // console.log( "si estaba", token, user);
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  // console.log(token);
  if (!token) {
    return res.status(403).send({
      message: '¡No se proporciona token!',
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: '¡No autorizado!',
      });
    }
    req.id = decoded.id;
    next();
  });
};

module.exports = { signUp, login, verifyToken };
