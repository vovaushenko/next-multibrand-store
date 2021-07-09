import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';

describe('Navbar Header Logo', () => {
  const navHeader = mount(<NavbarHeaderLogo headerText="tomato" />);

  it('should render with no errors', () => {
    expect(navHeader);
    expect(navHeader.length).toBe(1);
  });

  it('should render with no errors and with specified alt attribute for image', () => {
    const navHeader = shallow(<NavbarHeaderLogo headerText="tomato" />);
    const brandLogo = navHeader.find('.brand-logo');
    expect(brandLogo);
    expect(brandLogo.prop('alt')).toEqual('tomato');
  });
});
