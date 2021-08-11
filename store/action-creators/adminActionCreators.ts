import { Dispatch } from 'redux';
import { getAllClients } from '../../api/rest/admin';
import {
  deleteOneProduct,
  postNewProduct,
  updateProductDetails,
} from '../../api/rest/products';
import {
  deleteClientReview,
  moderateCustomerReview,
} from '../../api/rest/reviews';
import { getAllNewsletterSignups } from '../../api/rest/signup';
import { AdminAction, AdminActionTypes } from './../../types/adminTypes';
import { UploadProduct } from './../../types/index';

/**
 *@EXPORTS
 */

export {
  uploadNewProduct,
  deleteProduct,
  updateProduct,
  getAllClientsDetails,
  moderateReview,
  deleteReview,
  loadAllNewsletterSignups,
  clearStatusOfAdminOperations,
};

/**
 *@Admin async action creator, will dispatch action to save product in DB, also will dispatch error action if async operation fails
 *@function uploadNewProduct
 *@param {object} product - product to be saved in DB
 *@returns {function} - Redux thunk function
 */
const uploadNewProduct = (product: UploadProduct) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.UPLOAD_PRODUCT });
    try {
      const { data } = await postNewProduct(product);
      dispatch({
        type: AdminActionTypes.PRODUCT_DID_UPLOAD,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.PRODUCT_UPLOAD_ERROR,
        payload: error.response.data || error.response.data.error,
      });
    }
  };
};

/**
 * @Admin async action creator, will dispatch action to delete product from DB, also will dispatch error action if async operation fails
 * @param {string} id - product id
 * @DELETE /api/products/:id
 * @returns {function} - Redux thunk function
 */
const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.DELETE_PRODUCT });
    try {
      const { data } = await deleteOneProduct(id);
      dispatch({
        type: AdminActionTypes.PRODUCT_WAS_DELETED,
        payload: data.success,
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
 * @returns {function} - Redux thunk function
 */
const updateProduct = (productId: string, updatedProduct: UploadProduct) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.UPDATE_PRODUCT });
    try {
      const { data } = await updateProductDetails(productId, updatedProduct);
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
const getAllClientsDetails = () => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.LOAD_USERS });
    try {
      const { data } = await getAllClients();
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
 * @Admin async action creator, will dispatch action to moderate a review, also will dispatch error action if async operation fails
 * @param {string} reviewID - review id
 * @PUT /api/products/
 * @returns {function} - Redux thunk function
 */
const moderateReview = (reviewID: string) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.MODERATE_REVIEW });
    try {
      const { data } = await moderateCustomerReview(reviewID);
      dispatch({
        type: AdminActionTypes.REVIEW_WAS_MODERATED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.REVIEW_MODERATION_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};
/**
 * @Admin async action creator, will dispatch action to delete a review, also will dispatch error action if async operation fails
 * @param {string} reviewID - review id
 * @DELETE /api/products/
 * @returns {function} - Redux thunk function
 */
const deleteReview = (reviewID: string) => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.DELETE_REVIEW });
    try {
      const { data } = await deleteClientReview(reviewID);
      dispatch({
        type: AdminActionTypes.REVIEW_WAS_DELETED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.REVIEW_DELETE_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 * @Admin async action creator, will dispatch action to get all customers newsletter signups from DB, also will dispatch error action if async operation fails
 * @GET /api/signup
 */
const loadAllNewsletterSignups = () => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.LOAD_NEWSLETTER_SIGNUPS });
    try {
      const { data } = await getAllNewsletterSignups();
      dispatch({
        type: AdminActionTypes.NEWSLETTER_SIGNUPS_DID_LOAD,
        payload: data.allSignups,
      });
    } catch (error) {
      dispatch({
        type: AdminActionTypes.NEWSLETTER_SIGNUPS_LOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

/**
 *@ADMIN async action creator, will clear state after successful||unsuccessful operations
 *@function clearStatusOfOperations
 *@returns {function} - Redux thunk function
 */
const clearStatusOfAdminOperations = () => {
  return async (dispatch: Dispatch<AdminAction>): Promise<void> => {
    dispatch({ type: AdminActionTypes.CLEAR_STATE });
  };
};
