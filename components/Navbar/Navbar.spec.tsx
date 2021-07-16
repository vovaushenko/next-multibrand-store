import { shallow } from 'enzyme';
import React from 'react';
import NavbarHeader from '../NavbarHeader/NavbarHeader';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';
import Navbar from './Navbar';

describe('Navbar', () => {
  const wrap = shallow(<Navbar />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render specified header section', () => {
    const icons = wrap.find(NavbarHeader);
    expect(icons.length).toBe(1);
  });
  it('should render navbar navigation section', () => {
    const cartWrap = wrap.find(NavbarNavigation);
    expect(cartWrap.length).toBe(1);
  });
});
