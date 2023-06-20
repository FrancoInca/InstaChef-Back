
const Stripe = require('stripe');
require("dotenv").config
const {STRIPE_SECRET_KEY} = process.env;


const { Pagos, User, Product } = require('../db');


const jwt = require("jsonwebtoken");
const { Op } = require('sequelize');
const secretKey = "mi_secreto";


const stripe = new Stripe(STRIPE_SECRET_KEY)

const pagos = async (req, res, next) => {
    try {
      let  { amount, id, email, nombre, idFood, token} = req.body
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
     let ids = idFood.map(p => p.id)
      if(usuario) {
        let pago = await Pagos.create({
            metodo: payment.payment_method,
            email,
            nombre,
            amount,
            idCurso: ids ,
            userId: usuario.id
          })
          res.status(200).send("el pago se realizo con éxito")
          console.log("llegué hasta aquí");
      }

    
   
    } catch (error) {
        console.log(error.message);
        res.json({error: error.message})
        next(error);
    }
};

const getProductosPagos = async (req, res, next) => {
  try {
    let {token} = req.body
    console.log(req.body)
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
        console.log("userid", userId);
      let user = await User.findOne({where: {id: userId}})
     console.log("rem", user);
      let pagos = await Pagos.findAll({where: {userId: user.id }})
    console.log("pagodb,", pagos);
      let todosLosIds = pagos.flatMap(objeto => objeto.idCurso)
       console.log("idesarray", todosLosIds);
      const productos = await Product.findAll({
        where: {
          id: {
            [Op.in]: todosLosIds
          }
        }
      })
     
   return   res.status(200).json(productos)
      

      } else {
        console.log("error");
        return res.status(400).send("usuario no autorizado")
      }
     

  } catch (error) {
    res.status(400).json("erro el el server")
  }
    
}


module.exports = {
    pagos,
    getProductosPagos
};

