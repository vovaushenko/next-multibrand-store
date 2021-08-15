import { AxiosResponse } from 'axios';
import { Product, UploadProduct } from '../../types';
import { makeRequest } from '../makeRequest';
/**
 *@EXPORTS
 */
export {
  getAllProducts,
  getProductDetails,
  postNewProduct,
  deleteOneProduct,
  updateProductDetails,
};

/**
 *@api will make GET request to /api/products/:id
 *@function getProductDetails
 *@param {string} id - productID
 *@returns {object} - promise with success and product fields
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
 *@api will make GET request to /api/products/
 *@function getAllProducts
 *@param {string} queryParams - query params to be added to query, for instance ?isFeatured=true, ?sort=-price. See more in API docs
 *@returns {object} - promise with success and product fields
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

/**
 *@api will make POST request to /api/products/
 *@function postNewProduct
 *@param {object} product - product to be saved in DB
 *@returns {object} - promise with success status
 */
const postNewProduct = (
  product: UploadProduct
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/products/',
    method: 'POST',
    data: product,
    headers: { 'Content-Type': 'application/json' },
  });
};

/**
 *@api will make DELETE request to /api/products/:id
 *@function postNewProduct
 *@param {string} id - product id
 *@returns {object} - promise with success status
 */
const deleteOneProduct = (
  id: string
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: `/api/products/${id}`,
    method: 'DELETE',
  });
};

/**
 *@api will make PUT request to /api/products/:id
 *@function postNewProduct
 *@param {string} productId - product id
 *@param {UploadProduct} updatedProduct - updated produc
 *@returns {object} - promise with success status
 */
const updateProductDetails = (
  productId: string,
  updatedProduct: UploadProduct
): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: `/api/products/${productId}`,
    method: 'PUT',
    data: updatedProduct,
    headers: { 'Content-Type': 'application/json' },
  });
};
