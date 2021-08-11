import { AxiosResponse } from 'axios';
import { User } from '../../types/authTypes';
import { makeRequest } from '../makeRequest';

export { getAllClients };

/**
 *@api will make GET request to /api/admin/clients
 *@function getAllClients
 *@returns {object} - promise with success and clients fields
 */
const getAllClients = (): Promise<
  AxiosResponse<{ success: boolean; clients: User[] }>
> => {
  return makeRequest({
    url: '/api/admin/clients',
    method: 'GET',
  });
};
