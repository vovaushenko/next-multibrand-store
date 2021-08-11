import {
  AdminAction,
  AdminActionTypes,
  AdminState,
} from '../../types/adminTypes';

const initialState: AdminState = {
  clients: [],
  newsletterSignups: [],
  isLoading: false,
  error: null,
  isDeleted: false,
  isUploaded: false,
  isUpdating: false,
  isUpdated: false,
  isCreated: false,
};

/**
 *@function adminReducer
 *@param {AdminState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */
export const adminReducer = (
  state = initialState,
  action: AdminAction
): AdminState => {
  switch (action.type) {
    // Upload Operations
    case AdminActionTypes.UPLOAD_PRODUCT:
      return { ...state, isLoading: true };

    case AdminActionTypes.PRODUCT_DID_UPLOAD:
      return { ...state, isLoading: false, isUploaded: action.payload };

    case AdminActionTypes.PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        isUploaded: false,
        error: action.payload,
      };
    // Delete Operations
    case AdminActionTypes.DELETE_PRODUCT:
      return { ...state, isLoading: true };
    case AdminActionTypes.PRODUCT_WAS_DELETED:
      return { ...state, isLoading: false, isDeleted: action.payload };
    case AdminActionTypes.PRODUCT_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isDeleted: false,
        error: action.payload,
      };
    // Update Operations
    case AdminActionTypes.UPDATE_PRODUCT:
      return { ...state, isLoading: true };
    case AdminActionTypes.PRODUCT_WAS_UPDATED:
      return { ...state, isLoading: false, isUpdated: action.payload };
    case AdminActionTypes.PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        error: action.payload,
      };

    // Load all users
    case AdminActionTypes.LOAD_USERS:
      return { ...state, isLoading: true };

    case AdminActionTypes.USERS_WERE_LOADED:
      return { ...state, isLoading: false, clients: action.payload };

    case AdminActionTypes.USERS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    // Moderate review
    case AdminActionTypes.MODERATE_REVIEW:
      return { ...state, isLoading: true };

    case AdminActionTypes.REVIEW_WAS_MODERATED:
      return { ...state, isLoading: false, isUpdated: action.payload };

    case AdminActionTypes.REVIEW_MODERATION_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    // Delete review
    case AdminActionTypes.DELETE_REVIEW:
      return { ...state, isLoading: true };

    case AdminActionTypes.REVIEW_WAS_DELETED:
      return { ...state, isLoading: false, isDeleted: true };

    case AdminActionTypes.REVIEW_DELETE_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    // Load all newsletter signups
    case AdminActionTypes.LOAD_NEWSLETTER_SIGNUPS:
      return { ...state, isLoading: true };

    case AdminActionTypes.NEWSLETTER_SIGNUPS_DID_LOAD:
      return { ...state, isLoading: false, newsletterSignups: action.payload };

    case AdminActionTypes.NEWSLETTER_SIGNUPS_LOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    // Clear state Operations
    case AdminActionTypes.CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
