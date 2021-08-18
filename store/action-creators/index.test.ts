import moxios from 'moxios';
import { mockProduct, mockReduxStore } from '../../test/mockReduxStore';
import { storeFactory } from './../../test/testUtils';
import { loadAllProducts } from './productActionCreators';

describe('load all products', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('products are loaded', () => {
    const store = storeFactory(mockReduxStore);
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: [mockProduct],
      });

      await store.dispatch(loadAllProducts());
      const productsInStore = store.getState().products.products;
      expect(productsInStore).toBe([mockProduct]);
    });
  });
});
