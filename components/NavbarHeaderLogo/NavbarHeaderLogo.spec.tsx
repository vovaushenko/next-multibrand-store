import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';

describe('Navbar Header Logo', () => {
  const wrap = mount(<NavbarHeaderLogo headerText="tomato" />);
  it('should render with no errors', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render specified header text', () => {
    expect(wrap.find('a').text()).toBe('tomato');
  });
});
