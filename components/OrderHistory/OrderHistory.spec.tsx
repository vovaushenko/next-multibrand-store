import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Button from '../Button/Button';
import OrderHistory from './OrderHistory';

describe('Product Card', () => {
  const wrap = shallow(<OrderHistory />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render button `make your first order` if user has no orders', () => {
    const button = wrap.find(Button);
    expect(button.length).toBe(1);
  });
});
