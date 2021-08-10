import axios from 'axios';
import { Dispatch } from 'redux';
import { UserSignupInfo } from '../../types';
import { UserAction, UserActionTypes } from '../../types/userReduxTypes';

/**
 *@Action creator, will dispatch action to get user location, also will dispatch error action if async operation fails
 *@function getUserLocation
 *@returns {function} - Redux thunk function
 */
export const getUserLocation = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    dispatch({ type: UserActionTypes.GET_USER_LOCATION });
    try {
      const { data } = await axios.get(`https://extreme-ip-lookup.com/json/`);

      dispatch({
        type: UserActionTypes.LOCATION_DID_LOAD,
        payload: {
          continent: data.continent,
          country: data.country,
          countryCode: data.countryCode,
          city: data.city,
          region: data.region,
        },
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.LOCATION_LOAD_ERROR,
        payload: error,
      });
    }
  };
};

/**
 *@Action creator, will dispatch action to save new customer signup info in DB, also will dispatch error action if async operation fails
 *@function uploadUserSignupInfo
 *@param {object} signupInfo - signup info to be saved in DB
 *@returns {function} - Redux thunk function
 */
export const uploadUserSignupInfo = (signupInfo: UserSignupInfo) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    dispatch({ type: UserActionTypes.UPLOAD_SIGNUP_INFO });
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(`/api/signup`, signupInfo, config);
      dispatch({
        type: UserActionTypes.SIGNUP_INFO_WAS_UPLOADED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.SIGNUP_UPLOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};
