import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Review, { IReview } from '../models/review';
import { APIfeatures } from '../utils/apiFeatures';
import ErrorHandler from '../utils/errorHandler';

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
 * @param {Next.Response} res  Next API response
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

    res.status(200).json({
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
 * @param {Next.Response} res  Next API response
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
      404
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
 * @param {Next.Response} res  Next API response
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

  res.status(200).json({
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
 * @param {NextApiResponseWithAuth} req  Next API request with user info
 * @param {Next.Response} res The Next response
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

  res.status(200).json({
    success: true,
  });
};

/**
 * @ADMIN
 * Delete a review
 * @DELETE /api/reviews/:id
 * @function deleteCustomerReview
 * @param {NextApiRequest} req  Next API request with user info
 * @param {Next.Response} res The Next response
 * @return {undefined}
 */
const deleteCustomerReview = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const foundReview: IReview = await Review.findById(req.query.id);

    if (!foundReview) {
      return new ErrorHandler(
        `Review with the id ${req.query.id} does not exist`,
        404
      );
    }

    await foundReview.remove();

    res.status(204).json({
      success: true,
    });
  }
);
