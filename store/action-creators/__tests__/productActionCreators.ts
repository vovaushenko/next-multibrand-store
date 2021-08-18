import { mockReduxStore } from '../../../test/mockReduxStore';
import { storeFactory } from '../../../test/testUtils';
import { LocalRootState } from '../../reducers';
import { loadAllProducts, loadProductDetails } from '../productActionCreators';

/**
 * Mocked redux store
 *@returns {store} - redux store of the app
 */
const store = storeFactory(mockReduxStore);

describe('Products action creators', () => {
  test('correctly calculate totals', () => {
    store.dispatch(loadAllProducts());
    const newState = store.getState();
    const expectedState: LocalRootState = {
      ...mockReduxStore,
    };

    expect(newState).toEqual(expectedState);
  });

  test('correctly load product details', () => {
    store.dispatch(loadProductDetails('test'));
    const newState = store.getState();
    const expectedState: LocalRootState = {
      ...mockReduxStore,
    };

    expect(newState).toEqual(expectedState);
  });
});
