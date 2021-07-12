import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductActionTypes, ProductsAction } from '../../types/productTypes';

/**
 * async action creator, will dispatch action to get all products from DB, also will dispatch error action if async operation fails
 * @function loadNews
 * @GET All products from /api/products endpoint
 * @Will dispatch action to fetch products from DB
 * @Will dispatch Error in the case of failure
 * @returns {undefined} void
 */
export const loadProductDetails = (id: string) => {
  return async (dispatch: Dispatch<ProductsAction>): Promise<void> => {
    dispatch({ type: ProductActionTypes.LOAD_PRODUCT_DETAILS });
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: ProductActionTypes.PRODUCT_DETAILS_DID_LOAD,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.PRODUCT_DETAILS_LOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * async action creator, will dispatch action to get product details from DB, also will dispatch error action if async operation fails
 * @function loadProductDetails
 * @GET /api/products/:id
 * @param {string} id - product ID
 * @returns {undefined} void
 */
export const loadAllProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>): Promise<void> => {
    dispatch({ type: ProductActionTypes.LOAD_PRODUCTS });
    try {
      const { data } = await axios.get(`/api/products`);
      dispatch({
        type: ProductActionTypes.PRODUCTS_DID_LOAD,
        payload: data.allProducts,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.PRODUCTS_LOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 *async action creator, will clear state after successful||unsuccessful operations
 *@function clearProductState
 *@returns {undefined}
 */
export const clearProductState = () => {
  return async (dispatch: Dispatch<ProductsAction>): Promise<void> => {
    dispatch({ type: ProductActionTypes.CLEAR_ERRORS });
  };
};
