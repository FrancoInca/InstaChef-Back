const Stripe = require('stripe');
require("dotenv").config
const {STRIPE_SECRET_KEY} = process.env;

const stripe = new Stripe(STRIPE_SECRET_KEY);

const pagos = async (amount, id, products) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: products,
      payment_method: id,
      confirm: true,
    });
    return payment
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = pagos;
