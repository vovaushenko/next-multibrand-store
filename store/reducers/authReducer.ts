import {
  AuthAction,
  AuthActionTypes,
  AuthState,
} from '../../types/authReduxTypes';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  isRegistered: false,
  isUpdated: false,
  success: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    /**
     * REGISTER NEW USER
     */
    case AuthActionTypes.REGISTER_USER:
      return { ...state, isLoading: true };

    case AuthActionTypes.USER_WAS_REGISTERED:
      return { ...state, isLoading: false, isRegistered: action.payload };

    case AuthActionTypes.USER_REGISTER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    /**
     * LOAD USER
     */
    case AuthActionTypes.LOAD_USER:
      return { ...state, isLoading: true, isAuthenticated: false };

    case AuthActionTypes.USER_DID_LOAD:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case AuthActionTypes.USER_LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    /**
     * UPDATE USER PROFILE DETAILS
     */
    case AuthActionTypes.UPDATE_USER_PROFILE:
      return { ...state, isLoading: true };

    case AuthActionTypes.PROFILE_WAS_UPDATED:
      return { ...state, isLoading: false, isUpdated: action.payload };

    case AuthActionTypes.PROFILE_UPDATE_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case AuthActionTypes.CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
