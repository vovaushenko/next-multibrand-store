import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ProductCard from '../ProductCard/ProductCard';
import RecentlyViewed from './RecentlyViewed';

describe('Footer contact/reward links Section', () => {
  const wrap = shallow(
    <Provider store={store}>
      <RecentlyViewed />
    </Provider>
  );

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
