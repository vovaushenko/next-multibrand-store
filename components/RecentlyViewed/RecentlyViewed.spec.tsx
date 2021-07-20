import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { initialReduxStore } from '../../test/initialReduxStore';
import { storeFactory } from '../../test/testUtils';
import ProductCard from '../ProductCard/ProductCard';
import RecentlyViewed from './RecentlyViewed';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const store = storeFactory(initialReduxStore);
  return shallow(
    <Provider store={store}>
      <RecentlyViewed />
    </Provider>
  );
};

describe('Footer contact/reward links Section', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all viewed products that are currently in store', () => {
    const viewedProducts = wrap.find(ProductCard);
    const productsInStore = store.getState().recentlyViewed.viewedProducts;
    expect(viewedProducts.length).toBe(productsInStore.length);
  });
});
