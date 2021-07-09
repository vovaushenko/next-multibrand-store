import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavLink from './NavLink';

describe('Navbar Cart Icon component', () => {
  const wrapper = shallow(<NavLink href={'/hey'} linkText={'tomato'} />);

  it('should render correct link text', () => {
    const linkText = wrapper.find('.link-text');
    expect(linkText);
    expect(linkText.text()).toBe('tomato<FiChevronDown />');
  });
});
