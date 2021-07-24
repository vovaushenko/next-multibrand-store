import { shallow } from 'enzyme';
import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import CheckoutShippingInfo from '../CheckoutShippingInfo/CheckoutShippingInfo';
import CheckoutInformation from './CheckoutInformation';

describe('Checkout Cart content component', () => {
  const wrap = shallow(<CheckoutInformation />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should shipping info section', () => {
    const shippingInfo = wrap.find(CheckoutShippingInfo);
    expect(shippingInfo.length).toBe(1);
  });

  it('should render all headers', () => {
    const headers = wrap.find(CardHeader);
    expect(headers.length).toBe(2);
  });
});
