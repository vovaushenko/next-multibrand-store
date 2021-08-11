import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';

export { moderateCustomerReview, deleteClientReview };

/**
 *@api will make PUT request to /api/reviews
 *@function moderateCustomerReview
 *@param {string} id - review ID
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
