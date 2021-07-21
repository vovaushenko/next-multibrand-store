import React from 'react';
import { Provider } from 'react-redux';
import { AnyAction, createStore, Store } from 'redux';
import { ThemeProvider } from 'styled-components';
import { reducer } from '../store/reducers';
import { LocalRootState } from '../store/reducers/index';
import { mainTheme } from '../styles/mainTheme';
import { initialReduxStore } from './initialReduxStore';

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

/**
 * Create a wrapper for tested components  with imported reducers, middleware, initial state and styled-components theme props
 *@param {JSX.Element} component - tested component
 *@function withReduxAndStyledProviders
 *@returns {JSX.Element} - tested element wrapped in redux and styled components providers
 */
export const withReduxAndStyledProviders = (
  component: JSX.Element
): JSX.Element => {
  const store = storeFactory(initialReduxStore);

  return (
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>{component}</Provider>
    </ThemeProvider>
  );
};
