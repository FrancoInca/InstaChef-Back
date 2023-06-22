const { Review } = require('../../db');

const deleteReview = async (req, res) => {
  console.log("DELETE REVIEW!!!!!")
  try {
    const { reviewId } = req.params;
    const reviewFound = await Review.findByPk(reviewId);

    if (!reviewFound) {
      return res.status(404).json({ error: "Review not found" });
    }

    const rowsUpdated = await Review.update(
      { deleted: true },
      {
        where: {
          id: reviewId
        }
      }
    );

    if (rowsUpdated[0] !== 1) {
      return res.status(404).json({ error: "Review not found" });
    }

    return res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteReview;
