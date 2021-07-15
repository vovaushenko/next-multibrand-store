import { shallow } from 'enzyme';
import React from 'react';
import * as Styled from './styles.MobileNavbar';

const resizeWindow = (innerWidth: number): void => {
  window = Object.assign(window, { innerWidth });
  window.dispatchEvent(new Event('resize'));
};

describe('Mobile Navbar', () => {
  const wrapper = shallow(<Styled.IconsWrap />);
  it('should render on MOBILE screens', () => {
    resizeWindow(200);
    expect(wrapper.length).toBe(1);
  });
});
