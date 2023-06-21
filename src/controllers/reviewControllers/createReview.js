const { Product, Review, User } = require('../../db');
const jwt = require("jsonwebtoken");
const secretKey = "mi_secreto";
const createReview = async (req, res) => {
   
  try {
    const { token, body, rating, productId } = req.body;


    let usuario = null
    jwt.verify(token, secretKey, (err, user) => {
      if(err) {
        return  res.status(401).send("No autorizado")
      } else {
        usuario = user
        console.log(user);
      }
    } )

    const user = await User.findByPk(usuario.userId);
    if(user) {
      usuario = user
    }

   
    console.log(usuario);
    const product = await Product.findByPk(productId);
    const review = await Review.create({
      nameUser: usuario.name,
      foto: usuario.profilePhoto,
      body: body,
      rating: rating,
      productId: product.id,
      active: true,
      userId: usuario.id
    });
      console.log(review);
    return res.status(200).json({ message: 'Review created successfully.' }); 
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
 
  }
};

module.exports = createReview;
