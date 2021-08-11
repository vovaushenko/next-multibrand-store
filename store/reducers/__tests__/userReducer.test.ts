import {
  UserAction,
  UserActionTypes,
  UserState,
} from '../../../types/userReduxTypes';
import { userReducer } from '../userReducer';

const initialState: UserState = {
  isLoading: false,
  isLocationLoaded: false,
  isUploaded: false,
  error: null,
  loggedOut: false,
  sessionExpired: false,
  location: {
    continent: '',
    country: '',
    countryCode: '',
    city: '',
    region: '',
  },
};

const mockLocation = {
  continent: 'Europe',
  country: 'Germany',
  countryCode: 'GE',
  city: 'Berlin',
  region: 'BE',
};

describe('Admin reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = userReducer(undefined, {} as UserAction);
    expect(newState).toStrictEqual(initialState);
  });

  describe('Getting user location', () => {
    test('should set loading on GET_USER_LOCATION action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.GET_USER_LOCATION,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set location on LOCATION_DID_LOAD action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.LOCATION_DID_LOAD,
        payload: mockLocation,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isLocationLoaded: true,
        location: { ...mockLocation },
      });
    });

    test('should stop loading and set error on LOCATION_LOAD_ERROR action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.LOCATION_LOAD_ERROR,
        payload: 'Something went wrong',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'Something went wrong',
      });
    });
  });

  describe('Uploading user location', () => {
    test('should set loading on UPLOAD_SIGNUP_INFO action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.UPLOAD_SIGNUP_INFO,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
        isLocationLoaded: false,
      });
    });

    test('should stop loading and set isUploaded on SIGNUP_INFO_WAS_UPLOADED action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.SIGNUP_INFO_WAS_UPLOADED,
        payload: true,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        isUploaded: true,
      });
    });

    test('should stop loading and set error on SIGNUP_UPLOAD_ERROR action type', () => {
      const newState = userReducer(initialState, {
        type: UserActionTypes.SIGNUP_UPLOAD_ERROR,
        payload: 'Something went wrong',
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        error: 'Something went wrong',
      });
    });
  });
});
