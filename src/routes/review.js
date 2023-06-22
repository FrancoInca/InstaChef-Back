const express = require('express');
const reviewRouter = express.Router();
const createReview = require('../controllers/reviewControllers/createReview');
const deleteReview = require('../controllers/reviewControllers/deleteReview');
const allReviewProduct = require('../controllers/reviewControllers/allReviewProduct');
const editeReview = require('../controllers/reviewControllers/editeReview');

reviewRouter.post('/', createReview);
reviewRouter.delete('/:reviewId', deleteReview );
reviewRouter.get('/:productId', allReviewProduct);
reviewRouter.put('/', editeReview)


module.exports = reviewRouter;
