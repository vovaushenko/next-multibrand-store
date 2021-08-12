import { Dispatch } from 'redux';
import {
  getUserAccountDetails,
  updateUserProfileDetails,
} from '../../fetch-client/rest/me';
import { registerUser } from '../../fetch-client/rest/register';
import { AuthAction, AuthActionTypes } from '../../types/authReduxTypes';

/**
 *@function registerNewUser
 *@AUTH async action creator, will dispatch action to register a new user account, also will dispatch error action if async operation fails
 *@POST /api/auth/register
 *@param {object} newUser - user account details - name, email, role, password
 *@returns {undefined}
 */
export const registerNewUser =
  (newUser: {
    name: string;
    avatar: string;
    email: string;
    password: string;
  }) =>
  async (dispatch: Dispatch<AuthAction>): Promise<void> => {
    dispatch({ type: AuthActionTypes.REGISTER_USER });

    try {
      const { data } = await registerUser(newUser);

      dispatch({
        type: AuthActionTypes.USER_WAS_REGISTERED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.USER_REGISTER_ERROR,
        payload: error.response.data.message,
      });
    }
  };

/**
 *@AUTH async action creator, will dispatch action to load user account details, also will dispatch error action if async operation fails
 *@GET /api/me
 *@function loadUserAccountDetails
 *@returns {undefined}
 */
export const loadUserAccountDetails =
  () =>
  async (dispatch: Dispatch<AuthAction>): Promise<void> => {
    try {
      dispatch({ type: AuthActionTypes.LOAD_USER });

      const { data } = await getUserAccountDetails();

      dispatch({
        type: AuthActionTypes.USER_DID_LOAD,
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.USER_LOAD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

/**
 *@function updateUserProfile
 *@AUTH async action creator, will dispatch action to update user account details, also will dispatch error action if async operation fails
 *@PUT /api/me/update
 *@param {object} updatedUserDetails - user account details - name, email, avatar, password
 *@returns {undefined}
 */
export const updateUserProfile =
  (updatedUserDetails: {
    name: string;
    avatar: string;
    email: string;
    password: string;
  }) =>
  async (dispatch: Dispatch<AuthAction>): Promise<void> => {
    dispatch({ type: AuthActionTypes.UPDATE_USER_PROFILE });
    try {
      const { data } = await updateUserProfileDetails(updatedUserDetails);
      dispatch({
        type: AuthActionTypes.PROFILE_WAS_UPDATED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.PROFILE_UPDATE_ERROR,
        payload: error.response.data,
      });
    }
  };

/**
 *@AUTH async action creator, will dispatch action to clear AUTH state
 *@function clearAuthState
 *@returns {undefined}
 */
export const clearAuthState = () => {
  return async (dispatch: Dispatch<AuthAction>): Promise<void> => {
    dispatch({ type: AuthActionTypes.CLEAR_STATE });
  };
};
