import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';

describe('Navbar Header Logo', () => {
  const navHeader = shallow(
    <NavbarHeaderLogo headerText="tomato" height={1} width={1} src="test" />
  );

  it('should render with no errors', () => {
    expect(navHeader);
    expect(navHeader.length).toBe(1);
  });

  it('should render with no errors and with specified alt attribute for image', () => {
    const brandLogo = navHeader.find('.brand-logo');
    expect(brandLogo);
    expect(brandLogo.prop('alt')).toEqual('tomato');
  });
});
