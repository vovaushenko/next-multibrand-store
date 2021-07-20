import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { reducer, RootState } from './reducers';

// store for tests
export const store = createStore(reducer);

const makeStore: MakeStore<RootState> = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
