import { mount } from 'enzyme';
import React from 'react';
import { initialReduxStore } from '../../test/initialReduxStore';
import {
  storeFactory,
  withReduxAndStyledProviders,
} from '../../test/testUtils';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CheckoutCart from './CheckoutCart';
import * as Styled from './styles.CheckoutCart';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<CheckoutCart />));
};

describe('Checkout Cart content component', () => {
  const wrap = setup();
  const store = storeFactory(initialReduxStore);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render card for all items in cart', () => {
    const viewedProducts = wrap.find(CheckoutProduct);
    expect(viewedProducts.length).toBe(store.getState().cart.cart.length);
  });

  it('should render correct total', () => {
    const price = wrap.find(Styled.TotalPrice);

    expect(price.text()).toBe('$' + String(store.getState().cart.total));
  });
});
