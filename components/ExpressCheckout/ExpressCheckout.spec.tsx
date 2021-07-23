import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ExpressCheckout from './ExpressCheckout';
import * as Styled from './styles.ExpressCheckout';

describe('Express Checkout Methods', () => {
  const wrapper = shallow(<ExpressCheckout />);

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
  it('should  render all payment methods', () => {
    const paymentMethods = wrapper.find(Styled.PaymentMethod);

    expect(paymentMethods.length).toBe(3);
  });
});
