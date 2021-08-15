import { AxiosResponse } from 'axios';
import { ClientOrder, Order } from '../../types';
import { makeRequest } from '../makeRequest';
/**
 *@EXPORTS
 */
export { processCustomerOrder, getAllClientOrders };

/**
 *@api will make POST request to /api/orders
 *@function processCustomerOrder
 *@param {object} order - order to be saved in DB
 *@returns {object} - promise with success status
 */
const processCustomerOrder = (
  order: ClientOrder
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/orders',
    method: 'POST',
    data: order,
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 *@api will make GET request to /api/orders
 *@function getAllClientOrders
 *@returns {object} - promise with success and product fields
 */
const getAllClientOrders = (): Promise<
  AxiosResponse<{ success: boolean; orders: Order[] }>
> => {
  return makeRequest({
    url: '/api/orders',
    method: 'GET',
  });
};
