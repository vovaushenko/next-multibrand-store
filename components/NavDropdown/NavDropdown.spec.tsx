import { shallow } from 'enzyme';
import React from 'react';
import { NavDropdownItem } from '../../types';
import RouterLink from '../RouterLink/RouterLink';
import NavDropdown from './NavDropdown';

const dropdownContent: NavDropdownItem = {
  section: 'new arrivals',
  men: ['Adidas', 'Nike', 'Air Jordan'],
  women: ['Adidas', 'Nike', 'Air Jordan'],
  kid: ['Adidas', 'Nike', 'Air Jordan'],
};

describe('Navigation Dropdown', () => {
  const wrap = shallow(<NavDropdown dropdownContent={dropdownContent} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render all dropdown links', () => {
    const dropdownLinks = wrap.find(RouterLink);
    const amountOfLinks = Object.values(dropdownContent).reduce(
      (acc, v) => (Array.isArray(v) ? acc + v.length : acc + 0),
      0
    );
    expect(dropdownLinks.length).toBe(amountOfLinks);
  });
});
