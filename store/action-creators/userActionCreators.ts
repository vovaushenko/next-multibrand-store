import axios from 'axios';
import { Dispatch } from 'redux';
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
