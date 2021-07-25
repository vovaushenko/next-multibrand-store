import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import PaymentSection from './PaymentSection';
import * as Styled from './styles.PaymentSection';

describe('Payment Methods Component', () => {
  const wrap = mount(<PaymentSection />);

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
    expect(paymentSection.length).toBe(4);
  });
});
