import { shallow } from 'enzyme';
import React from 'react';
import CheckoutProgress from './CheckoutProgress';
import * as Styled from './styled.CheckoutProgress';

describe('Checkout Progress component', () => {
  const wrap = shallow(<CheckoutProgress />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all progress steps', () => {
    const progressStep = wrap.find(Styled.ProgressLink);
    expect(progressStep.length).toBe(4);
  });
});
