import { AxiosResponse } from 'axios';
import { Product } from '../../types';
import { makeRequest } from '../makeRequest';

export { getAllProducts, getProductDetails };

/**
 *@api will make call to /api/products/:id
 *@function getProductDetails
 *@param {string} id - productID
 *@returns {object} - with success and product fields
 */
const getProductDetails = (
  id: string
): Promise<AxiosResponse<{ success: boolean; product: Product }>> => {
  return makeRequest({
    url: `/api/products/${id}`,
    method: 'GET',
  });
};

/**
 *@api will make call to /api/products/
 *@function getAllProducts
 *@param {queryParams} string - query params to be added to query, for instance ?isFeatured=true, ?sort=-price. See more in API docs
 *@returns {object} - with success and product fields
 */
const getAllProducts = (
  queryParams: string
): Promise<
  AxiosResponse<{ count: number; success: boolean; allProducts: Product[] }>
> => {
  return makeRequest({
    url: `/api/products/${queryParams}`,
    method: 'GET',
  });
};
