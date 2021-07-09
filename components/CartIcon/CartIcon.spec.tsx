import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import CartIcon from './CartIcon';

describe('Navbar Cart Icon component', () => {
  const wrapper = shallow(<CartIcon productAmount={777} />);

  it('should render with no errors', () => {
    expect(wrapper);
    expect(wrapper.length).toBe(1);
  });

  it('should render correct amount of products in cart', () => {
    const productAmount = wrapper.find('.product-amount');
    expect(productAmount);
    expect(productAmount.text()).toBe('777');
  });
});
