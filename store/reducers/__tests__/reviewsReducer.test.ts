import { Review } from '../../../types';
import {
  ReviewAction,
  ReviewActionTypes,
  ReviewsState,
} from '../../../types/reviewsTypes';
import { reviewsReducer } from '../reviewsReducer';

const initialState: ReviewsState = {
  allReviews: [],
  productReviews: [],
  isLoading: false,
  isReviewUploaded: false,
  error: null,
};

const mockReview: Review = {
  _id: 'test',
  productID: 'test',
  clientName: 'test',
  clientEmail: 'test',
  title: 'test',
  rating: 5,
  reviewContent: 'test',
  createdAt: 'test',
  isReviewed: true,
};

describe('Review reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = reviewsReducer(undefined, {} as ReviewAction);
    expect(newState).toStrictEqual(initialState);
  });

  describe('Uploading reviews', () => {
    test('should set loading on UPLOAD_PRODUCT_REVIEW action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.UPLOAD_PRODUCT_REVIEW,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading on and set isReviewUploaded flag PRODUCT_REVIEW_WAS_UPLOADED action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.PRODUCT_REVIEW_WAS_UPLOADED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isReviewUploaded: true,
      });
    });

    test('should stop loading and set error on PRODUCT_REVIEW_UPLOAD_ERROR action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR,
        payload: 'ERROR',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'ERROR',
      });
    });
  });

  describe('Loading product reviews', () => {
    test('should set loading on LOAD_PRODUCT_REVIEWS action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.LOAD_PRODUCT_REVIEWS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set productReviews on  PRODUCT_REVIEWS_DID_LOAD action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.PRODUCT_REVIEWS_DID_LOAD,
        payload: [mockReview],
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        productReviews: [mockReview],
      });
    });

    test('should stop loading and set error on PRODUCT_REVIEW_UPLOAD_ERROR action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR,
        payload: 'ERROR',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'ERROR',
      });
    });
  });

  describe('Loading ALL reviews', () => {
    test('should set loading on LOAD_ALL_REVIEWS action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.LOAD_ALL_REVIEWS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set productReviews on  ALL_REVIEWS_DID_LOAD action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.ALL_REVIEWS_DID_LOAD,
        payload: [mockReview],
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        allReviews: [mockReview],
      });
    });

    test('should stop loading and set error on ALL_REVIEWS_LOAD_ERROR action type', () => {
      const newState = reviewsReducer(initialState, {
        type: ReviewActionTypes.ALL_REVIEWS_LOAD_ERROR,
        payload: 'ERROR',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'ERROR',
      });
    });
  });
});
