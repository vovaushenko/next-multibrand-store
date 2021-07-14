import { shallow } from 'enzyme';
import React from 'react';
import NavbarNavigation from './NavbarNavigation';
import { navLinks } from './navigationData';

describe('Navbar navigation section', () => {
  const wrap = shallow(<NavbarNavigation />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all navigation links', () => {
    const navigationLinks = wrap.find('li');
    expect(navigationLinks.length).toBe(navLinks.length);
  });
});
