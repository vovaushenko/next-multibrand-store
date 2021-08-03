import { Review } from '.';

/**
 * Products Reducer state interface
 *@interface
 */
export interface ReviewsState {
  allReviews: Review[];
  productReviews: Review[];
  isLoading: boolean;
  isReviewUploaded: boolean;
  error: string | null;
}

/**
 * Reviews Reducer action types
 *@interface
 */
export enum ReviewActionTypes {
  LOAD_PRODUCT_REVIEWS = 'LOAD_PRODUCT_REVIEWS',
  PRODUCT_REVIEWS_DID_LOAD = 'PRODUCT_REVIEWS_DID_LOAD',
  PRODUCT_REVIEWS_LOAD_ERROR = 'PRODUCT_REVIEWS_LOAD_ERROR',

  LOAD_ALL_REVIEWS = 'LOAD_ALL_REVIEWS',
  ALL_REVIEWS_DID_LOAD = 'ALL_REVIEWS_DID_LOAD',
  ALL_REVIEWS_LOAD_ERROR = 'ALL_REVIEWS_LOAD_ERROR',

  UPLOAD_PRODUCT_REVIEW = 'UPLOAD_PRODUCT_REVIEW',
  PRODUCT_REVIEW_WAS_UPLOADED = 'PRODUCT_REVIEW_WAS_UPLOADED',
  PRODUCT_REVIEW_UPLOAD_ERROR = 'PRODUCT_REVIEW_UPLOAD_ERROR',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * PRODUCT REVIEWS Action interfaces
 */
interface LoadProductReviewAction {
  type: ReviewActionTypes.LOAD_PRODUCT_REVIEWS;
}
interface LoadProductReviewSuccessAction {
  type: ReviewActionTypes.PRODUCT_REVIEWS_DID_LOAD;
  payload: Review[];
}
interface LoadProductReviewErrorAction {
  type: ReviewActionTypes.PRODUCT_REVIEWS_LOAD_ERROR;
  payload: string;
}

interface UploadProductReviewAction {
  type: ReviewActionTypes.UPLOAD_PRODUCT_REVIEW;
}
interface UploadProductReviewSuccessAction {
  type: ReviewActionTypes.PRODUCT_REVIEW_WAS_UPLOADED;
  payload: boolean;
}
interface UploadProductReviewErrorAction {
  type: ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR;
  payload: string;
}

interface LoadAllReviewAction {
  type: ReviewActionTypes.LOAD_ALL_REVIEWS;
}
interface LoadAllReviewSuccessAction {
  type: ReviewActionTypes.ALL_REVIEWS_DID_LOAD;
  payload: Review[];
}
interface LoadAllReviewErrorAction {
  type: ReviewActionTypes.ALL_REVIEWS_LOAD_ERROR;
  payload: string;
}

/**
 *Combined type for Product action creators
 *@type
 */
export type ReviewAction =
  | UploadProductReviewAction
  | UploadProductReviewSuccessAction
  | UploadProductReviewErrorAction
  | LoadProductReviewAction
  | LoadProductReviewSuccessAction
  | LoadProductReviewErrorAction
  | LoadAllReviewAction
  | LoadAllReviewSuccessAction
  | LoadAllReviewErrorAction;
