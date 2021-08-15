import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Review, { IReview } from '../models/review';
import { APIfeatures } from '../utils/apiFeatures';
import ErrorHandler from '../utils/errorHandler';
import { StatusCodes } from 'http-status-codes';

/**
 * @EXPORTS
 */
export {
  createNewReview,
  getAllProductReviews,
  getAllReviews,
  moderateReview,
  deleteCustomerReview,
};

/**
 * Create new review
 * @POST /api/reviews
 * @function createNewReview
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const createNewReview = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { productID, clientName, clientEmail, title, reviewContent, rating } =
      req.body;

    const newReview: IReview = await Review.create({
      product: productID,
      productID,
      clientName,
      clientEmail,
      title,
      reviewContent,
      rating,
      isReviewed: false,
    });

    res.status(StatusCodes.OK).json({
      success: true,
      newReview,
    });
  }
);

/**
 * Get all Product Reviews
 * @GET /api/reviews/:productID
 * @function getAllProductReviews
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const getAllProductReviews = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ErrorHandler | undefined> => {
  const features = new APIfeatures(
    Review.find({ product: req.query.id }),
    req.query as {
      [key: string]: string;
    }
  ).sort();

  const allProductReviews = await features.query;

  if (!allProductReviews) {
    return new ErrorHandler(
      `Product Reviews with the id ${req.query.id} do not exist`,
      StatusCodes.NOT_FOUND
    );
  }

  res.status(200).json({
    success: true,
    reviewCount: allProductReviews.length,
    reviews: allProductReviews,
  });
};

/**
 * @ADMIN
 * Get all Product Reviews
 * @GET /api/reviews/
 * @function getAllReviews
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const getAllReviews = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const features = new APIfeatures(
    Review.find({}),
    req.query as {
      [key: string]: string;
    }
  ).sort();

  const allProductReviews = await features.query;

  res.status(StatusCodes.OK).json({
    success: true,
    reviewCount: allProductReviews.length,
    reviews: allProductReviews,
  });
};

/**
 * @ADMIN
 * Moderate a review
 * @PUT /api/reviews/
 * @function updateUserProfile
 * @param {NextApiRequest} req  Next API request with user info
 * @param {NextApiResponse} res The Next response
 * @return {undefined}
 */
const moderateReview = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { reviewID } = req.body;

  const foundReview: IReview = await Review.findById(reviewID);

  foundReview.isReviewed = true;

  await foundReview.save();

  res.status(StatusCodes.OK).json({
    success: true,
  });
};

/**
 * @ADMIN
 * Delete a review
 * @DELETE /api/reviews/:id
 * @function deleteCustomerReview
 * @param {NextApiRequest} req  Next API request with user info
 * @param {NextApiResponse} res The Next response
 * @return {undefined}
 */
const deleteCustomerReview = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const foundReview: IReview = await Review.findById(req.query.id);

    if (!foundReview) {
      return new ErrorHandler(
        `Review with the id ${req.query.id} does not exist`,
        StatusCodes.NOT_FOUND
      );
    }

    await foundReview.remove();

    res.status(StatusCodes.OK).json({
      success: true,
    });
  }
);
