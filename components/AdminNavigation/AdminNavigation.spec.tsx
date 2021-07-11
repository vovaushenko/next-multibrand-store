import { shallow } from 'enzyme';
import React from 'react';
import AdminNavigation from './AdminNavigation';
import { adminNavLinks } from './adminNavLinks';

describe('Footer Social-links Section', () => {
  const wrap = shallow(<AdminNavigation adminNavLinks={adminNavLinks} />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all links', () => {
    const navLinks = wrap.find('li');
    expect(navLinks.length).toBe(adminNavLinks.length);
  });
});
