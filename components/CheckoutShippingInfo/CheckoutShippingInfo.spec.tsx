import { shallow } from 'enzyme';
import React from 'react';
import CheckoutShippingInfo from './CheckoutShippingInfo';

describe('Checkout Shipping info component', () => {
  const wrap = shallow(<CheckoutShippingInfo />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
