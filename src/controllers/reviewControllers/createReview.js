const {Product, Review} = require('../../db');

const createReview = async( req, res ) =>{
    try {
        const {title, body, rating, productId}= req.body;
        const product = await Product.findByPk(productId);
        const review = await Review.create({
            title: title,
            body: body,
            rating: rating,
            product_name: product.id,
            deleted: false

        });
        return res.json({review});
    } catch (error) {
        return res.status(500).json({error: error.message});
        
    }
}
module.exports = {createReview};