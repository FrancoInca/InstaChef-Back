
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

/*const { Pagos, User, Product } = require('../db');

const Stripe = require("stripe")
const jwt = require("jsonwebtoken");
const { Op } = require('sequelize');
const STRIPE_SECRET_KEY = "sk_test_51N3WCTG4n6v6zt1DpsOBG2uM3p6GuLJHiOOxW8nEiEBF8pc4DuT7VPRkwo9fLYb7QrAWinkfxb1mtXMSfo2FQgcM00LlaDchu1";
const secretKey = "mi_secreto";


const stripe = new Stripe(STRIPE_SECRET_KEY)

const pagos = async (req, res, next) => {
    try {
      let  { amount, id, email, nombre, idCurso, token} = req.body
        let usuario = null
      jwt.verify(token, secretKey, (err, user) => {
        if(err) {
          return  res.status(401).send("No autorizado")
        } else {
          usuario = user
          console.log(user);
        }
      } )
      if(usuario) {
        let {userId} = usuario
      usuario = await User.findOne({where: {id:userId}})

      }
        const payment = await stripe.paymentIntents.create({
        amount,
         currency: "USD",
         description: "prueba",
         payment_method: id,
         confirm: true
        })
       
       if(!payment?.status === "succeeded") {
         return  res.status(401).send("Hubo un error con los datos del pago")
       }

      if(usuario) {
        let pago = await Pagos.create({
            metodo: payment.payment_method,
            email,
            nombre,
            amount,
            idCurso,
            userId: usuario.id
          })
          res.status(200).send("el pago se realizo con éxito")
          console.log("llegué hasta aquí");
      }

    
   
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const getProductosPagos = async (req, res, next) => {
  try {
    let {token} = req.body
    console.log(req.body)
    console.log(token);
    let usuario = null
    jwt.verify(token, secretKey, (err, user) => {
        if(err) {
          return  res.status(401).send("No autorizado")
        } else {
          usuario = user
          console.log("verificando que el usuaria se haya decodificado",user);

        }
      } )
      console.log("verificando que este el id del user", usuario);
      if(usuario) {
        let {userId} = usuario
      usuario = await User.findOne({where: {id: userId}})

      let pagos = await Pagos.findAll({where: {userId: usuario.id }})

      const todosLosIds = pagos.reduce((acc, obj) => {
        return [...acc, ...obj.idCurso]
      }, [])

      const productosPagos = await Product.findAll({where: {id: {
        [Op.in]: todosLosIds
      }}})

      console.log(productosPagos);
      res.status(200).json(productosPagos)

      }
     

  } catch (error) {
    res.status(400).json("erro el el server")
  }
    
}


module.exports = {
    pagos,
    getProductosPagos
};*/

