import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
/**
 *@EXPORTS
 */
export { registerUser };
/**
 *@api will make POST request to /api/auth/register
 *@function registerUser
 *@param {object} newUser - user account details - name, email, role, password
 *@returns {object} - promise with success status
 */
const registerUser = (newUser: {
  name: string;
  avatar: string;
  email: string;
  password: string;
}): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: newUser,
    headers: { 'Content-Type': 'application/json' },
  });
};
