import {
  AdminAction,
  AdminActionTypes,
  AdminState,
} from '../../../types/adminTypes';
import { User } from '../../../types/authTypes';
import { adminReducer } from '../adminReducer';

const initialState: AdminState = {
  clients: [],
  newsletterSignups: [],
  isLoading: false,
  error: null,
  isDeleted: false,
  isUploaded: false,
  isUpdating: false,
  isUpdated: false,
  isCreated: false,
};
describe('Admin reducer', () => {
  test('should return initial state, when previous state is undefined', () => {
    const newState = adminReducer(undefined, {} as AdminAction);
    expect(newState).toStrictEqual(initialState);
  });

  describe('Delete operations', () => {
    test('should set loading to true on DELETE_PRODUCT action', () => {
      const newState = adminReducer(initialState, {
        type: AdminActionTypes.DELETE_PRODUCT,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });
  test('should stop loading and set isDeleted on PRODUCT_WAS_DELETED action type', () => {
    const newState = adminReducer(initialState, {
      type: AdminActionTypes.PRODUCT_WAS_DELETED,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      isDeleted: true,
    });
  });

  test('should set error on PRODUCT_DELETE_ERROR action type', () => {
    const newState = adminReducer(initialState, {
      type: AdminActionTypes.PRODUCT_DELETE_ERROR,
      payload: '404 not found',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      error: '404 not found',
    });
  });

  describe('Update operations', () => {
    test('should set loading to true on UPDATE_PRODUCT action', () => {
      const newState = adminReducer(initialState, {
        type: AdminActionTypes.UPDATE_PRODUCT,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });
  test('should stop loading and set isUpdated on PRODUCT_WAS_UPDATED action type', () => {
    const newState = adminReducer(initialState, {
      type: AdminActionTypes.PRODUCT_WAS_UPDATED,
      payload: true,
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      isUpdated: true,
    });
  });

  test('should set error on PRODUCT_UPDATE_ERROR action type', () => {
    const newState = adminReducer(initialState, {
      type: AdminActionTypes.PRODUCT_UPDATE_ERROR,
      payload: '404 not found',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      error: '404 not found',
    });
  });

  describe('Load client operations', () => {
    test('should set loading to true on LOAD_USERS action', () => {
      const newState = adminReducer(initialState, {
        type: AdminActionTypes.LOAD_USERS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });
  test('should stop loading and set clients on USERS_WERE_LOADED action type', () => {
    const mockClient: User = {
      _id: 'test',
      email: 'test@gmail.com',
      name: 'joe',
      password: '12345',
      role: 'user',
      avatar: { public_id: 'id', url: 'img.jpeg' },
    };

    const newState = adminReducer(initialState, {
      type: AdminActionTypes.USERS_WERE_LOADED,
      payload: [mockClient],
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      clients: [mockClient],
    });
  });

  test('should set error on USERS_LOAD_ERROR action type', () => {
    const newState = adminReducer(initialState, {
      type: AdminActionTypes.USERS_LOAD_ERROR,
      payload: '404 not found',
    });

    expect(newState).toStrictEqual({
      ...initialState,
      isLoading: false,
      error: '404 not found',
    });
  });

  describe('Load client signups', () => {
    test('should set loading to true on LOAD_NEWSLETTER_SIGNUPS action', () => {
      const newState = adminReducer(initialState, {
        type: AdminActionTypes.LOAD_NEWSLETTER_SIGNUPS,
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('should stop loading and set signups  on NEWSLETTER_SIGNUPS_DID_LOAD action', () => {
      const mockSignup = {
        _id: 'test',
        city: 'berlin',
        country: 'germany',
        continent: 'europre',
        countryCode: 'de',
        createdAt: '25/07/2021',
        email: 'test@email.com',
        region: 'ger',
      };

      const newState = adminReducer(initialState, {
        type: AdminActionTypes.NEWSLETTER_SIGNUPS_DID_LOAD,
        payload: [mockSignup, mockSignup],
      });

      expect(newState).toStrictEqual({
        ...initialState,
        isLoading: false,
        newsletterSignups: [mockSignup, mockSignup],
      });
    });

    test('should stop loading and set error  on NEWSLETTER_SIGNUPS_LOAD_ERROR action', () => {
      const newState = adminReducer(initialState, {
        type: AdminActionTypes.NEWSLETTER_SIGNUPS_LOAD_ERROR,
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
