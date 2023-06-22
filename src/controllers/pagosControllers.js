const jwt = require('jsonwebtoken');
const Stripe = require('stripe');
const { Pagos, Product } = require('../db');
const { Op } = require('sequelize');
require('dotenv').config;
const secretKey = 'mi_secreto';
const { STRIPE_SECRET_KEY } = process.env;
const nodemailer = require("nodemailer");

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
        subject: "Pago confirmado",
        text: "Su pago ha sido realizado con exito",
        html: "<b>¡Gracias por comprar en InstaChef! En instantes será entregado su pedido. ¡Muchas gracias!</b>",
    });
}

const stripe = new Stripe(STRIPE_SECRET_KEY);
const pagos = async (amount, id, productsName, products, token, email) => {
  try {
    let user;
    jwt.verify(token, secretKey, (err, userVerified) => {
      if (err) throw new Error('Usuario no autorizado');
      user = userVerified;
      // console.log(user);
    });
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: productsName,
      payment_method: id,
      confirm: true,
    });
    if (payment.status !== 'succeeded')
      throw new Error('Hubo un error con los datos del pago');
    let pago = await Pagos.create({
      method: payment.payment_method,
      products: products.map((e) => e.id),
      userId: user.userId,
      description: productsName,
      totalAmount: amount,
      email,
    });
    mailer(pago.email).catch(console.error);
    return { pago: pago, err: null };
  } catch (error) {
    console.log(error.message);
    return { err: error.message, pago: null };
  }
};

const allPayments = async (token) => {
  try {
    let usuario;
    jwt.verify(token, secretKey, (err, user) => {
      if (err) throw new Error('Usuario no autorizado');
      usuario = user;
    });
    if (!usuario || usuario.userId !== 1)
      throw new Error('No tiene autorización.');
    const allPayments = await Pagos.findAll();
    const data = allPayments.map((e) => {
      return {
        name: e.dataValues.description,
        amount: e.dataValues.totalAmount,
        email: e.dataValues.email,
        id: e.dataValues.id,
      };
    });
    return { data, err: null };
  } catch (error) {
    console.log(error.message);
    return { err: error.message };
  }
};

const paymentHistory = async (token) => {
  try {
    let usuario = null;
    jwt.verify(token, secretKey, (err, user) => {
      if (err) throw new Error('Usuario no autorizado');
      usuario = user;
      console.log('verificando que el usuaria se haya decodificado', user);
    });
    console.log('verificando que este el id del user', usuario);
    if (usuario) {
      let { userId } = usuario;
      let pagos = await Pagos.findAll({ where: { userId: userId } });
      const allIds = pagos.reduce((acc, obj) => {
        return [...acc, ...obj.products];
      }, []);
      const productosPagos = await Product.findAll({
        where: { id: { [Op.in]: allIds } },
      });
      if (!productosPagos.length)
        throw new Error('No se encontraron productos');
      return { products: productosPagos.map((e) => e.dataValues), error: null };
    }
  } catch (error) {
    console.log(error.message);
    return { error: error.message, products: null };
  }
};

module.exports = { pagos, paymentHistory, allPayments };
