import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import AllPaymentMethods from './AllPaymentMethods';
import { allPaymentMethods } from './paymentData';

describe('All Payment Methods component', () => {
  const wrap = shallow(
    <AllPaymentMethods paymentMethods={allPaymentMethods} />
  );

  it('should render all specified payment methods', () => {
    const method = wrap.find(PaymentMethodIcon);
    expect(method.length).toBe(allPaymentMethods.length);
  });
});
