import { AxiosResponse } from 'axios';
import { UserSignupInfo, UserSignupInfoAPIResponse } from '../../types';
import { makeRequest } from '../makeRequest';
/**
 *@EXPORTS
 */
export { getAllNewsletterSignups, postNewsletterSignup };

/**
 *@api will make GET request to /api/signup
 *@function getAllNewsletterSignups
 *@returns {object} - promise with success and allSignups fields
 */
const getAllNewsletterSignups = (): Promise<
  AxiosResponse<{ success: boolean; allSignups: UserSignupInfoAPIResponse[] }>
> => {
  return makeRequest({
    url: '/api/signup/',
    method: 'GET',
  });
};

/**
 *@api will make POST request to /api/signup/
 *@function postNewsletterSignup
 *@param {object} signupInfo - new newsletter signup to be saved in DB
 *@returns {object} - promise with success status
 */
const postNewsletterSignup = (
  signupInfo: UserSignupInfo
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/signup/',
    method: 'POST',
    data: signupInfo,
    headers: { 'Content-Type': 'application/json' },
  });
};
