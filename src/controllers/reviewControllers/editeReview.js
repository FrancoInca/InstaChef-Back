const {Review} = require('../../db');

const editeReview = async (req, res) =>{
    console.log("EDITE REVEWS!!!?")
    try {
        const {title, body, rating, reviewId, productId} = req.body;
        const [rowsUpdated, [updatedReview]] = await Review.update(
            {title, body, rating},
            {where: {id: reviewId, productId: productId}, returning: true}
        );
        if (updatedReview === undefined || updatedReview === null)
        return res.status(500).json({error: "Review does not exists."});
        return res.json({ message: "Review successfully modified.", review: updatedReview});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = editeReview;