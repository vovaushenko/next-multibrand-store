import { shallow } from 'enzyme';
import React from 'react';
import NavCart from './NavCart';

describe('Navbar Cart', () => {
  const wrapper = shallow(<NavCart />);

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });
});
