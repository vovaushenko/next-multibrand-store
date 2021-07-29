import { shallow } from 'enzyme';
import React from 'react';
import CreditCard from '../CreditCard/CreditCard';
import CustomerPaymentMethods from './CustomerPaymentMethods';

describe('CustomerPaymentMethods component', () => {
  const wrap = shallow(
    <CustomerPaymentMethods customerImg="test" customerName="john doe" />
  );

  it('should render correct card number', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render Credit Card Component', () => {
    const cardNumber = wrap.find(CreditCard);
    expect(cardNumber.length).toBe(1);
  });
});
