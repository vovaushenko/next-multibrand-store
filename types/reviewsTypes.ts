import { Review } from '.';

/**
 * Products Reducer state interface
 *@interface
 */
export interface ReviewsState {
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
  LOAD_REVIEWS = 'LOAD_REVIEWS',
  REVIEWS_DID_LOAD = 'REVIEWS_DID_LOAD',
  REVIEWS_LOAD_ERROR = 'REVIEWS_LOAD_ERROR',

  UPLOAD_PRODUCT_REVIEW = 'UPLOAD_PRODUCT_REVIEW',
  PRODUCT_REVIEW_WAS_UPLOADED = 'PRODUCT_REVIEW_WAS_UPLOADED',
  PRODUCT_REVIEW_UPLOAD_ERROR = 'PRODUCT_REVIEW_UPLOAD_ERROR',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * PRODUCT REVIEWS Action interfaces
 */
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

/**
 *Combined type for Product action creators
 *@type
 */
export type ReviewAction =
  | UploadProductReviewAction
  | UploadProductReviewSuccessAction
  | UploadProductReviewErrorAction;
