import axios from 'axios';
import { Dispatch } from 'redux';
import { AuthAction, AuthActionTypes } from '../../types/authReduxTypes';

/**
 *@function registerNewUser
 *@AUTH async action creator, will dispatch action to register a new user account, also will dispatch error action if async operation fails
 *@POST /api/auth/register
 *@param {object} newUser - user account details - name, email, role, password
 *@returns {undefined}
 */
export const registerNewUser =
  (newUser: { name: string; email: string; role: string; password: string }) =>
  async (dispatch: Dispatch<AuthAction>): Promise<void> => {
    dispatch({ type: AuthActionTypes.REGISTER_USER });

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('/api/auth/register', newUser, config);

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

      const { data } = await axios.get('/api/me');

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
