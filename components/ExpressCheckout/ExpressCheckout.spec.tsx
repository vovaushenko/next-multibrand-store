import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import ExpressCheckout from './ExpressCheckout';
import * as Styled from './styles.ExpressCheckout';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<ExpressCheckout />));
};

describe('Express Checkout Methods', () => {
  const wrapper = setup();

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should  render all payment methods', () => {
    const paymentMethods = wrapper.find(Styled.PaymentMethod);

    expect(paymentMethods.length).toBe(5);
  });
});
