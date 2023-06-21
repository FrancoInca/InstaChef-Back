// const nodemailer = require("nodemailer");


//  async function mailer(email) {
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: "instachef2@gmail.com",
//             pass: "ylhfxhukvdnoleam",
//         },
//     });

//     let info = await transporter.sendMail({
//         from: '"👩‍🍳InstaChef👨‍🍳" <instachef2@gmail.com>',
//         to: email,
//         subject: "Registro exitoso",
//         text: "Bienvenido a InstaChef",
//         html: "<b>Bienvenido a InstaChef, gracias por elegirnos y que disfrute de su comida!</b>",
//     });

//     console.log("Message sent: %s" + info.messageId);
// }

// module.exports = mailer;