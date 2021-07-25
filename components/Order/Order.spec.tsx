import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Order from './Order';
import { order } from './Order.stories';

describe('Order details', () => {
  const wrap = shallow(<Order orderID={1} order={order} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
