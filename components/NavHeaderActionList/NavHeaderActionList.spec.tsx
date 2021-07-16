import { shallow } from 'enzyme';
import React from 'react';
import NavCart from '../NavCart/NavCart';
import NavUserAccount from '../NavUserAccount/NavUserAccount';
import NavHeaderActionList from './NavHeaderActionList';

describe('Navbar Header action list', () => {
  const wrap = shallow(<NavHeaderActionList />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render user account info component', () => {
    const icons = wrap.find(NavUserAccount);
    expect(icons.length).toBe(1);
  });
  it('should render user cart', () => {
    const cartWrap = wrap.find(NavCart);
    expect(cartWrap.length).toBe(1);
  });
});
