import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { AdminState } from '../../types/adminTypes';
import { ProductsState } from '../../types/productTypes';
import { UiActionsState } from '../../types/uiTypes';
import { adminReducer } from './adminReducer';
import { productsReducer } from './productsReducer';
import { uiActionsReducer } from './uiActionsReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  products: productsReducer,
  ui: uiActionsReducer,
});

export type State = {
  admin: AdminState;
  products: ProductsState;
  ui: UiActionsState;
};

// https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops

export const reducer = (state: State | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof reducer>;
export type LocalRootState = ReturnType<typeof rootReducer>;
