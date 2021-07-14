import { shallow } from 'enzyme';
import React from 'react';
import { navPictureLinks } from './navPictureData';
import NavPictureDropdown from './NavPictureDropdown';
import * as Styled from './styles';

describe('Navigation Picture Dropdown', () => {
  const wrap = shallow(<NavPictureDropdown />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render all navigation links', () => {
    const allLinks = wrap.find(Styled.ListItem);
    expect(allLinks.length).toBe(navPictureLinks.length);
  });
});
