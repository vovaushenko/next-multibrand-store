import { AnyAction, createStore, Store } from 'redux';
import { reducer } from '../store/reducers';
import { LocalRootState } from './../store/reducers/index';

/**
 * Create a testing store with imported reducers, middleware, and initial state
 *@param {object} initialStore - Initial store for store
 *@function storeFactory
 *@returns {Store} - Redux store
 */
export const storeFactory = (
  initialState: LocalRootState
): Store<LocalRootState, AnyAction> => {
  return createStore(reducer, initialState);
};
