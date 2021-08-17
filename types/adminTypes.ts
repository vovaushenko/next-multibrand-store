import { User } from './authTypes';
import { ReduxAsync, UserSignupInfoAPIResponse } from './index';

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
  clients: User[];
  newsletterSignups: UserSignupInfoAPIResponse[];
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

  LOAD_USERS = 'LOAD_USERS',
  USERS_WERE_LOADED = 'USERS_WERE_LOADED',
  USERS_LOAD_ERROR = 'USERS_LOAD_ERROR',

  MODERATE_REVIEW = 'MODERATE_REVIEW',
  REVIEW_WAS_MODERATED = 'REVIEW_WAS_MODERATED',
  REVIEW_MODERATION_ERROR = 'REVIEW_MODERATION_ERROR',

  DELETE_REVIEW = 'DELETE_REVIEW',
  REVIEW_WAS_DELETED = 'REVIEW_WAS_DELETED',
  REVIEW_DELETE_ERROR = 'REVIEW_DELETE_ERROR',

  LOAD_NEWSLETTER_SIGNUPS = 'LOAD_NEWSLETTER_SIGNUPS',
  NEWSLETTER_SIGNUPS_DID_LOAD = 'NEWSLETTER_SIGNUPS_DID_LOAD',
  NEWSLETTER_SIGNUPS_LOAD_ERROR = 'NEWSLETTER_SIGNUPS_LOAD_ERROR',

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
 * Admin LOAD USERS action interfaces
 */
interface LoadUsersRequestAction {
  type: AdminActionTypes.LOAD_USERS;
}

interface LoadUsersSuccessAction {
  type: AdminActionTypes.USERS_WERE_LOADED;
  payload: User[];
}

interface LoadUsersFailAction {
  type: AdminActionTypes.USERS_LOAD_ERROR;
  payload: string;
}

/**
 * Admin MODERATE REVIEW action interfaces
 */
interface ModerateReviewRequestAction {
  type: AdminActionTypes.MODERATE_REVIEW;
}

interface ModerateReviewSuccessAction {
  type: AdminActionTypes.REVIEW_WAS_MODERATED;
  payload: boolean;
}

interface ModerateReviewFailAction {
  type: AdminActionTypes.REVIEW_MODERATION_ERROR;
  payload: string;
}

interface DeleteReviewRequestAction {
  type: AdminActionTypes.DELETE_REVIEW;
}

interface DeleteReviewSuccessAction {
  type: AdminActionTypes.REVIEW_WAS_DELETED;
  payload: boolean;
}

interface DeleteReviewFailAction {
  type: AdminActionTypes.REVIEW_DELETE_ERROR;
  payload: string;
}

/**
 * Admin LOAD NEWSLETTER SIGNUPS action interfaces
 */
interface LoadNewsletterSignupsRequestAction {
  type: AdminActionTypes.LOAD_NEWSLETTER_SIGNUPS;
}

interface LoadNewsletterSignupsSuccessAction {
  type: AdminActionTypes.NEWSLETTER_SIGNUPS_DID_LOAD;
  payload: UserSignupInfoAPIResponse[];
}

interface LoadNewsletterSignupsFailAction {
  type: AdminActionTypes.NEWSLETTER_SIGNUPS_LOAD_ERROR;
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
  | LoadUsersRequestAction
  | LoadUsersSuccessAction
  | LoadUsersFailAction
  | UpdateProductFailAction
  | ModerateReviewRequestAction
  | ModerateReviewSuccessAction
  | ModerateReviewFailAction
  | DeleteReviewRequestAction
  | DeleteReviewSuccessAction
  | DeleteReviewFailAction
  | LoadNewsletterSignupsRequestAction
  | LoadNewsletterSignupsSuccessAction
  | LoadNewsletterSignupsFailAction;
