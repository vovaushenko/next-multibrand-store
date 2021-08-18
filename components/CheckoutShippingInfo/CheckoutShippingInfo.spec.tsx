import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../styles/mainTheme';
import { mockReduxStore } from '../../test/mockReduxStore';
import { storeFactory } from '../../test/testUtils';
import CheckoutShippingInfo from './CheckoutShippingInfo';
import FormikTextField from '../FormikTextField/FormikTextField';
import Button from '../Button/Button';

/**
 * Setup function for the component
 * @returns {mountWrapper}
 */
const setup = () => {
  const store = storeFactory(mockReduxStore);

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

  it('should render all input text controls', () => {
    const inputControl = wrap.find(FormikTextField);
    expect(inputControl.length).toBe(8);
  });
  it('should render submit button', () => {
    const submitBtn = wrap.find(Button);
    expect(submitBtn.length).toBe(1);
  });
});
