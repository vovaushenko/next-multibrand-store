import { shallow } from 'enzyme';
import React from 'react';
import CheckoutShipping from './CheckoutShipping';
import * as Styled from './styles.CheckoutShipping';

describe('Checkout Progress component', () => {
  const wrap = shallow(<CheckoutShipping />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render footer section', () => {
    const footer = wrap.find(Styled.ButtonWrap);
    expect(footer.length).toBe(1);
  });
});
