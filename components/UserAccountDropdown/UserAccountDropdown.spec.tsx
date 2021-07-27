import { shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';
import * as Styled from './styles.UserAccountDropdown';
import UserAccountDropdown from './UserAccountDropdown';

describe('User Account Dropdown(Navbar)', () => {
  const wrap = shallow(<UserAccountDropdown />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should correctly render all router links', () => {
    const routerLinks = wrap.find(Link);
    expect(routerLinks.length).toBe(2);
  });
  it('should render sign out button', () => {
    const signOut = wrap.find(Styled.SignOut);
    expect(signOut.length).toBe(1);
  });
});
