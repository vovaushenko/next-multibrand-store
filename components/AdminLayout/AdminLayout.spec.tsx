import { shallow } from 'enzyme';
import React from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import AdminLayout from './AdminLayout';
import * as Styled from './styles';

describe('Footer Social-links Section', () => {
  const wrap = shallow(
    <AdminLayout title="tomato">
      <p>children</p>
    </AdminLayout>
  );

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render correct title', () => {
    const title = wrap.find('title');
    expect(title.text()).toBe('tomato');
  });
  it('should render admin navigation', () => {
    const adminNav = wrap.find(AdminNavigation);
    expect(adminNav.length).toBe(1);
  });
  it('should render children', () => {
    const childrenWrapper = wrap.find(Styled.ChildrenWrapper);
    const children = childrenWrapper.find('p');
    expect(children.text()).toBe('children');
  });
});
