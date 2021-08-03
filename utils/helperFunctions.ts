import { Review } from '../types';

/**
 * @EXPORTS
 */
export { getAverageRating };

/**
 * @method getAverageRating
 * @param  {Review[]} productReviews - array of review objects
 * @returns {number} - calculated average rating to be displayed
 */
const getAverageRating = (productReviews: Review[]): number => {
  if (productReviews.length < 1) return 0;

  const totalRating = productReviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  return Math.round(totalRating / productReviews.length);
};
