const { User } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const secretKey = "mi_secreto";
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
    html: "<b>Bienvenido a InstaChef, gracias por elegirnos y que disfrute de su comida!</b>",
  });

  console.log("Message sent: %s" + info.messageId);
}

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
     console.log(token, newUser);
    res.json({ token });
    mailer(req.body.email).catch(console.error);
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
    let newUser = null
     if (!user) {
      newUser = await User.create({
        email,
        password
      });
      // Crear y firmar un JWT que contenta el ID del usuario
    const token = jwt.sign({ userId: newUser.id }, secretKey);
    res.json({ token, newUser });
    console.log("no estaba", token, newUser )
     } else {
      if(password) {
         // Verificar que la contraseña coincida con la contraseña hasheada en la base de datos
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
          return res.status(401).send({ message: "Invalid credentials." });
      }
       // Crear y firmar un JWT que contenta el ID del usuario
    const token = jwt.sign({ userId: user.id }, secretKey);
    res.json({ token, user });
    console.log( "si estaba", token, user);
     }
   

   
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
