import { AxiosResponse } from 'axios';
import { Order } from '../../types';
import { User } from '../../types/authTypes';
import { makeRequest } from '../makeRequest';

export { getAllClients, getAllProcessedOrders };

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

/**
 *@api will make GET request to /api/admin/orders
 *@function getAllClientOrders
 *@returns {object} - promise with success and product fields
 */
const getAllProcessedOrders = (): Promise<
  AxiosResponse<{ success: boolean; orders: Order[] }>
> => {
  return makeRequest({
    url: '/api/admin/orders',
    method: 'GET',
  });
};
