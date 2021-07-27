import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import NavbarHeaderLogo from './NavbarHeaderLogo';
import * as Styled from './styles.NavbarHeader';

describe('Navbar Header Logo', () => {
  const navHeader = shallow(<NavbarHeaderLogo />);

  it('should render with no errors', () => {
    expect(navHeader);
    expect(navHeader.length).toBe(1);
  });

  it('should render correct logo text', () => {
    const sneaker = navHeader.find(Styled.Sneaker);
    expect(sneaker.text()).toBe('Sneaker');
    const maniacs = navHeader.find(Styled.Maniacs);
    expect(maniacs.text()).toBe('Maniacs');
  });
});
