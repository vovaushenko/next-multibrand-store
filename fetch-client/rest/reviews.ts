import { AxiosResponse } from 'axios';
import { Review } from '../../types';
import { makeRequest } from '../makeRequest';
/**
 * @EXPORTS
 */
export {
  moderateCustomerReview,
  deleteClientReview,
  uploadNewReview,
  getProductReviews,
  getAllSubmittedReviews,
};

/**
 *@api will make GET request to /api/reviews/
 *@function getAllSubmittedReviews
 *@returns {object} - promise with success and product fields
 */
const getAllSubmittedReviews = (): Promise<
  AxiosResponse<{ success: boolean; reviews: Review[] }>
> => {
  return makeRequest({
    url: '/api/reviews/',
    method: 'GET',
  });
};

/**
 *@api will make GET request to /api/reviews/:id
 *@function getProductReviews
 *@param {string} productID - productID
 *@returns {object} - promise with success and product fields
 */
const getProductReviews = (
  productID: string
): Promise<AxiosResponse<{ success: boolean; reviews: Review[] }>> => {
  return makeRequest({
    url: `/api/reviews/${productID}`,
    method: 'GET',
  });
};

/**
 *@api will make POST request to /api/reviews
 *@function uploadNewReview
 *@param {object} review - review to be saved in DB
 *@returns {object} - promise with success status
 */
const uploadNewReview = (
  review: Review
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/reviews',
    method: 'POST',
    data: review,
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 *@api will make PUT request to /api/reviews
 *@function moderateCustomerReview
 *@param {string} reviewID - review ID
 *@returns {object} - promise with success status
 */
const moderateCustomerReview = (
  reviewID: string
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: `/api/reviews/`,
    method: 'PUT',
    data: { reviewID },
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 *@api will make DELETE request to /api/reviews/:id
 *@function deleteClientReview
 * @param {string} reviewID - review id
 *@returns {object} - promise with success status
 */
const deleteClientReview = (
  reviewID: string
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: `/api/reviews/${reviewID}`,
    method: 'DELETE',
  });
};
