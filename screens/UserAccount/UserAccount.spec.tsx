import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './styles.UserAccount';
import UserAccount from './UserAccount';

describe('User Account Screen', () => {
  const wrap = shallow(<UserAccount />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all components', () => {
    const sidebar = wrap.find(Styled.LeftColumn);
    expect(sidebar.length).toBe(1);
    const content = wrap.find(Styled.ContentColumn);
    expect(content.length).toBe(1);
  });
});
