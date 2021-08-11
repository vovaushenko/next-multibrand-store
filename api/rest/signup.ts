import { AxiosResponse } from 'axios';
import { UserSignupInfoAPIResponse } from '../../types';
import { makeRequest } from '../makeRequest';

export { getAllNewsletterSignups };

/**
 *@api will make GET request to /api/signup
 *@function getAllNewsletterSignups
 *@returns {object} - promise with success and allSignups fields
 */
const getAllNewsletterSignups = (): Promise<
  AxiosResponse<{ success: boolean; allSignups: UserSignupInfoAPIResponse[] }>
> => {
  return makeRequest({
    url: '/api/signup',
    method: 'GET',
  });
};
