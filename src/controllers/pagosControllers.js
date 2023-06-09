

const Stripe = require("stripe")

const STRIPE_SECRET_KEY = "sk_test_51N3WCTG4n6v6zt1DpsOBG2uM3p6GuLJHiOOxW8nEiEBF8pc4DuT7VPRkwo9fLYb7QrAWinkfxb1mtXMSfo2FQgcM00LlaDchu1";



const stripe = new Stripe(STRIPE_SECRET_KEY)

const pagos = async (req, res, next) => {
    try {
      let  { amount, id, email, nombre, idCurso} = req.body
      
        const payment = await stripe.paymentIntents.create({
        amount,
         currency: "USD",
         description: "prueba",
         payment_method: id,
         confirm: true
        })

       
       
        console.log(payment)
   
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};


module.exports = pagos;