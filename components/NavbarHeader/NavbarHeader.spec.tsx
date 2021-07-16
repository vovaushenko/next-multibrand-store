import { shallow } from 'enzyme';
import React from 'react';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';
import NavHeaderActionList from '../NavHeaderActionList/NavHeaderActionList';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import NavbarHeader from './NavbarHeader';

describe('Footer Social-links Section', () => {
  const wrap = shallow(<NavbarHeader />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render specified brand logo', () => {
    const icons = wrap.find(NavbarHeaderLogo);
    expect(icons.length).toBe(1);
  });
  it('should render account and cart features', () => {
    const cartWrap = wrap.find(NavHeaderActionList);
    expect(cartWrap.length).toBe(1);
  });
  it('should render search bar', () => {
    const search = wrap.find(NavHeaderSearch);
    expect(search.length).toBe(1);
  });
});
