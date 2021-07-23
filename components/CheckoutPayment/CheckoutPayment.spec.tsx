import { shallow } from 'enzyme';
import React from 'react';
import CheckoutPayment from './CheckoutPayment';
import * as Styled from './styles.CheckoutPayment';

describe('Checkout Progress component', () => {
  const wrap = shallow(<CheckoutPayment />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  //TODO:write proper tests after finishing checkout flow
  it('should render footer section', () => {
    const footer = wrap.find(Styled.ButtonWrap);
    expect(footer.length).toBe(1);
  });
});
