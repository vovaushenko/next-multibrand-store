import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { withReduxAndStyledProviders } from '../../test/testUtils';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import PaymentSection from './PaymentSection';
import * as Styled from './styles.PaymentSection';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return mount(withReduxAndStyledProviders(<PaymentSection />));
};

describe('Payment Methods Component', () => {
  const wrap = setup();

  it('should with no errors', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all credit card payment methods', () => {
    const paymentMethod = wrap.find(PaymentMethodIcon);
    expect(paymentMethod.length).toBe(5);
  });

  it('should render only all specified payment sections', () => {
    const paymentSection = wrap.find(Styled.FormControl);
    expect(paymentSection.length).toBe(3);
  });
});
