import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import { initialReduxStore } from '../../test/initialReduxStore';
import { storeFactory } from '../../test/testUtils';
import CheckoutShippingInfo from './CheckoutShippingInfo';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  const store = storeFactory(initialReduxStore);

  return mount(
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <CheckoutShippingInfo />
      </Provider>
    </ThemeProvider>
  );
};

describe('Checkout Shipping info component', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
