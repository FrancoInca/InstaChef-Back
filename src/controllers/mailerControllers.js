const nodemailer = require("nodemailer");

const sendProduct = async (obj) => {
  try {
    const { email, products } = obj;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "instachef2@gmail.com",
        pass: "ylhfxhukvdnoleam",
      },
    });
    await transporter.sendMail({
      from: '"👩‍🍳InstaChef👨‍🍳" <instachef2@gmail.com>',
      to: email,
      subject: "¡Envío en camino!",
      text: "¡Envío en camino!",
      html: `<b>Su envío de ${products} está en camino.</b>`,
    });
    return true
  } catch (error) {
    console.log(error);
    return false;
  }
};

const DeliveredProduct = async (obj) => {
  try {
    const { email } = obj;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "instachef2@gmail.com",
        pass: "ylhfxhukvdnoleam",
      },
    });
    await transporter.sendMail({
      from: '"👩‍🍳InstaChef👨‍🍳" <instachef2@gmail.com>',
      to: email,
      subject: "¡Su comida llegó!",
      text: "¡Su comida llegó!",
      html: `<b>Su envío ha llegado a su domicilio, buen provecho.</b>`,
    });
    return true
  } catch (error) {
    console.log(error.message);
    return false
  }
};
module.exports = { DeliveredProduct, sendProduct };
