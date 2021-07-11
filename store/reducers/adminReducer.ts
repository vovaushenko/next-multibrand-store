import {
  AdminAction,
  AdminActionTypes,
  AdminState,
} from '../../types/adminTypes';

const initialState: AdminState = {
  isLoading: false,
  error: null,
  isDeleted: false,
  isUploaded: false,
  isUpdating: false,
  isUpdated: false,
  isCreated: false,
};

//TODO: proper documentation after testing
//TODO: write tests
export const adminReducer = (
  state = initialState,
  action: AdminAction
): AdminState => {
  switch (action.type) {
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

    case AdminActionTypes.CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
