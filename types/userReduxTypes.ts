import { ReduxAsync, UserLocation } from '.';

/**
 * User Reducer state interface
 *@interface
 */
export interface UserState extends ReduxAsync {
  loggedOut: boolean;
  sessionExpired: boolean;
  location: UserLocation;
  isLocationLoaded: boolean;
  isUploaded: boolean;
}

/**
 * User Reducer action types
 *@interface
 */

export enum UserActionTypes {
  GET_USER_LOCATION = 'GET_USER_LOCATION',
  LOCATION_DID_LOAD = 'LOCATION_DID_LOAD',
  LOCATION_LOAD_ERROR = 'LOCATION_LOAD_ERROR',

  UPLOAD_SIGNUP_INFO = 'UPLOAD_SIGNUP_INFO',
  SIGNUP_INFO_WAS_UPLOADED = 'SIGNUP_INFO_WAS_UPLOADED',
  SIGNUP_UPLOAD_ERROR = 'SIGNUP_UPLOAD_ERROR',
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

interface UploadSignupInfoRequestAction {
  type: UserActionTypes.UPLOAD_SIGNUP_INFO;
}
interface UploadSignupInfoSuccessAction {
  type: UserActionTypes.SIGNUP_INFO_WAS_UPLOADED;
  payload: boolean;
}
interface UploadSignupInfoErrorAction {
  type: UserActionTypes.SIGNUP_UPLOAD_ERROR;
  payload: string;
}

/**
 *@type
 *Combined type for ProdUseruct action creators
 */
export type UserAction =
  | GetUserLocationRequestAction
  | LocationLoadSuccessAction
  | LocationLoadErrorAction
  | UploadSignupInfoRequestAction
  | UploadSignupInfoSuccessAction
  | UploadSignupInfoErrorAction;
