import { User } from './authTypes';

/**
 * Auth Reducer state interface
 *@interface
 */

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isRegistered: boolean;
  success: boolean;
  error: null | string;
}
/**
 * Auth Reducer action types
 *@interface
 */
export enum AuthActionTypes {
  REGISTER_USER = 'REGISTER_USER',
  USER_WAS_REGISTERED = 'USER_WAS_REGISTERED',
  USER_REGISTER_ERROR = 'USER_REGISTER_ERROR',

  LOAD_USER = 'LOAD_USER',
  USER_DID_LOAD = 'USER_DID_LOAD',
  USER_LOAD_FAIL = 'USER_LOAD_FAIL',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * REGISTER NEW USER action interfaces
 */
interface RegisterUserRequestAction {
  type: AuthActionTypes.REGISTER_USER;
}
interface RegisterUserSuccessAction {
  type: AuthActionTypes.USER_WAS_REGISTERED;
  payload: boolean;
}
interface RegisterUserFailAction {
  type: AuthActionTypes.USER_REGISTER_ERROR;
  payload: string;
}
/**
 * SIGN IN action interfaces
 */
interface LoadUserRequestAction {
  type: AuthActionTypes.LOAD_USER;
}
interface LoadUserSuccessAction {
  type: AuthActionTypes.USER_DID_LOAD;
  payload: User;
}
interface LoadUserFailAction {
  type: AuthActionTypes.USER_LOAD_FAIL;
  payload: string;
}
/**
 * CLEAR STATE action interfaces
 */
interface ClearAuthErrors {
  type: AuthActionTypes.CLEAR_STATE;
}
/**
 *Combined type for Auth action creators
 *@type
 */
export type AuthAction =
  | RegisterUserRequestAction
  | RegisterUserSuccessAction
  | RegisterUserFailAction
  | LoadUserRequestAction
  | LoadUserSuccessAction
  | LoadUserFailAction
  | ClearAuthErrors;
