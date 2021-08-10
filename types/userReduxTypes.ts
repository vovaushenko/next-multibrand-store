import { ReduxAsync } from '.';

export interface UserLocation {
  continent: string;
  country: string;
  countryCode: string;
  city: string;
  region: string;
}

/**
 * User Reducer state interface
 *@interface
 */
export interface UserState extends ReduxAsync {
  loggedOut: boolean;
  sessionExpired: boolean;
  location: UserLocation;
  isLoaded: boolean;
}

/**
 * User Reducer action types
 *@interface
 */

export enum UserActionTypes {
  GET_USER_LOCATION = 'GET_USER_LOCATION',
  LOCATION_DID_LOAD = 'LOCATION_DID_LOAD',
  LOCATION_LOAD_ERROR = 'LOCATION_LOAD_ERROR',
}

/**
 * User action interfaces
 */
interface GetUserLocationRequestAction {
  type: UserActionTypes.GET_USER_LOCATION;
}
interface LocationLoadSuccessAction {
  type: UserActionTypes.LOCATION_DID_LOAD;
  payload: UserLocation;
}
interface LocationLoadErrorAction {
  type: UserActionTypes.LOCATION_LOAD_ERROR;
  payload: string;
}
/**
 *@type
 *Combined type for ProdUseruct action creators
 */
export type UserAction =
  | GetUserLocationRequestAction
  | LocationLoadSuccessAction
  | LocationLoadErrorAction;
