import axios from 'axios';
import { Dispatch } from 'redux';
import { AdminAction, AdminActionTypes } from './../../types/adminTypes';
import { UploadProduct } from './../../types/index';

/**
 *@Admin async action creator, will dispatch action to save product in DB, also will dispatch error action if async operation fails
 *@function uploadNewProduct
 *@param {object} product - product to be saved in DB
 *@returns {undefined}
 */
export const uploadNewProduct = (product: UploadProduct) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.UPLOAD_PRODUCT });
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(`/api/products`, product, config);
      dispatch({
        type: AdminActionTypes.PRODUCT_DID_UPLOAD,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.PRODUCT_UPLOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * @Admin async action creator, will dispatch action to delete product from DB, also will dispatch error action if async operation fails
 * @param {string} id - product id
 * @DELETE /api/products/:id
 */
export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.DELETE_PRODUCT });
    try {
      await axios.delete(`/api/products/${id}`);
      dispatch({
        type: AdminActionTypes.PRODUCT_WAS_DELETED,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.PRODUCT_DELETE_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * @Admin async action creator, will dispatch action to update product, also will dispatch error action if async operation fails
 * @param {string} id - product id
 * @param {object} updatedProduct - new product details of type UploadProduct
 * @PUT /api/products/:id
 */
export const updateProduct = (
  productId: string,
  updatedProduct: UploadProduct
) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.UPDATE_PRODUCT });
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.put(
        `/api/products/${productId}`,
        updatedProduct,
        config
      );
      dispatch({
        type: AdminActionTypes.PRODUCT_WAS_UPDATED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.PRODUCT_UPDATE_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * @Admin async action creator, will dispatch action to get all customers profiles from DB, also will dispatch error action if async operation fails
 * @DELETE /api/products/:id
 */
export const getAllClientsDetails = () => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.LOAD_USERS });
    try {
      const { data } = await axios.get(`/api/admin/clients`);
      dispatch({
        type: AdminActionTypes.USERS_WERE_LOADED,
        payload: data.clients,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.USERS_LOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 *@ADMIN async action creator, will clear state after successful||unsuccessful operations
 *@function clearStatusOfOperations
 *@returns {undefined}
 */
export const clearStatusOfAdminOperations = () => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.CLEAR_STATE });
  };
};
