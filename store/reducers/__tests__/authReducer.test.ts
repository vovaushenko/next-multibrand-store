import {
  AuthAction,
  AuthActionTypes,
  AuthState,
} from '../../../types/authReduxTypes';
import { authReducer } from '../authReducer';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  isRegistered: false,
  isUpdated: false,
  success: false,
  error: null,
};

describe('Auth reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = authReducer(undefined, {} as AuthAction);
    expect(newState).toStrictEqual(initialState);
  });

  describe('Registration of a new user', () => {
    test('should set loading on REGISTER_USER action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.LOAD_USER,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set isRegistered  on USER_WAS_REGISTERED  action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.USER_WAS_REGISTERED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isRegistered: true,
      });
    });

    test('should stop loading and set error  on USER_REGISTER_ERROR  action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.USER_REGISTER_ERROR,
        payload: 'ERROR',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'ERROR',
      });
    });
  });

  describe('User Profile Update', () => {
    test('should set loading on UPDATE_USER_PROFILE action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.UPDATE_USER_PROFILE,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set isUpdated  on PROFILE_WAS_UPDATED  action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.PROFILE_WAS_UPDATED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isUpdated: true,
      });
    });

    test('should stop loading and set error  on PROFILE_UPDATE_ERROR  action type', () => {
      const newState = authReducer(initialState, {
        type: AuthActionTypes.PROFILE_UPDATE_ERROR,
        payload: 'ERROR',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'ERROR',
      });
    });
  });
});
