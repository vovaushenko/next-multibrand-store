import { ReduxAsync } from './index';

/**
 * Admin Reducer state interface
 *@interface
 */
export interface AdminState extends ReduxAsync {
  isDeleted: boolean;
  isUploaded: boolean;
  isUpdating: boolean;
  isUpdated: boolean;
  isCreated: boolean;
}

/**
 * Admin Reducer action types
 *@interface
 */
export enum AdminActionTypes {
  UPLOAD_PRODUCT = 'UPLOAD_PRODUCT',
  PRODUCT_DID_UPLOAD = 'PRODUCT_DID_UPLOAD',
  PRODUCT_UPLOAD_ERROR = 'PRODUCT_UPLOAD_ERROR',

  DELETE_PRODUCT = 'DELETE_PRODUCT',
  PRODUCT_WAS_DELETED = 'PRODUCT_WAS_DELETED',
  PRODUCT_DELETE_ERROR = 'PRODUCT_DELETE_ERROR',

  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  PRODUCT_WAS_UPDATED = 'PRODUCT_WAS_UPDATED',
  PRODUCT_UPDATE_ERROR = 'PRODUCT_UPDATE_ERROR',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * Admin UPLOAD action interfaces
 */
interface UploadProductRequestAction {
  type: AdminActionTypes.UPLOAD_PRODUCT;
}
interface UploadProductSuccessAction {
  type: AdminActionTypes.PRODUCT_DID_UPLOAD;
  payload: boolean;
}
interface UploadProductFailAction {
  type: AdminActionTypes.PRODUCT_UPLOAD_ERROR;
  payload: string;
}
/**
 * Admin DELETE action interfaces
 */
interface DeleteProductRequestAction {
  type: AdminActionTypes.DELETE_PRODUCT;
}
interface DeleteProductSuccessAction {
  type: AdminActionTypes.PRODUCT_WAS_DELETED;
  payload: boolean;
}
interface DeleteProductFailAction {
  type: AdminActionTypes.PRODUCT_DELETE_ERROR;
  payload: string;
}
/**
 * Admin UPDATE action interfaces
 */
interface UpdateProductRequestAction {
  type: AdminActionTypes.UPDATE_PRODUCT;
}
interface UpdateProductSuccessAction {
  type: AdminActionTypes.PRODUCT_WAS_UPDATED;
  payload: boolean;
}
interface UpdateProductFailAction {
  type: AdminActionTypes.PRODUCT_UPDATE_ERROR;
  payload: string;
}
/**
 * Admin CLEAR state action interface
 */
interface ClearStateAction {
  type: AdminActionTypes.CLEAR_STATE;
}

/**
 *Combined type for Admin action creators
 *@type AdminAction
 */
export type AdminAction =
  | UploadProductRequestAction
  | UploadProductSuccessAction
  | UploadProductFailAction
  | ClearStateAction
  | DeleteProductRequestAction
  | DeleteProductSuccessAction
  | DeleteProductFailAction
  | UpdateProductRequestAction
  | UpdateProductSuccessAction
  | UpdateProductFailAction;
