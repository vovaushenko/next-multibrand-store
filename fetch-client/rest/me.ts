import { AxiosResponse } from 'axios';
import { User } from '../../types/authTypes';
import { makeRequest } from '../makeRequest';
/**
 *@EXPORTS
 */
export { getUserAccountDetails, updateUserProfileDetails };

/**
 *@api will make GET request to /api/me
 *@function getAllClients
 *@returns {object} - promise with success and clients fields
 */
const getUserAccountDetails = (): Promise<
  AxiosResponse<{ success: boolean; user: User }>
> => {
  return makeRequest({
    url: '/api/me',
    method: 'GET',
  });
};

/**
 *@api will make PUT request to /api/me/update
 *@function updateUserProfileDetails
 *@param {object} updateUserProfileDetails - new profile details
 *@returns {object} - promise with success status
 */
const updateUserProfileDetails = (updatedUserDetails: {
  name: string;
  avatar: string;
  email: string;
  password: string;
}): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/me/update',
    method: 'PUT',
    data: updatedUserDetails,
    headers: { 'Content-Type': 'application/json' },
  });
};
