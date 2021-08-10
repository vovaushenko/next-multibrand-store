import { shallow } from 'enzyme';
import 'jest-styled-components';
import Image from 'next/image';
import React from 'react';
import renderer from 'react-test-renderer';
import NavbarHeaderLogo from './NavbarHeaderLogo';
import * as Styled from './styles.NavbarHeader';

describe('Navbar Header Logo', () => {
  const navHeader = shallow(<NavbarHeaderLogo />);

  it('should render with no errors', () => {
    expect(navHeader);
    expect(navHeader.length).toBe(1);
  });

  it('should render logo img with correct attributes', () => {
    const logoImg = navHeader.find(Image);

    expect(logoImg.prop('alt')).toBe('sneaker maniacs logo');
    expect(logoImg.prop('src')).toBe('/sneaker-maniacs-logo.png');
    expect(logoImg.prop('height')).toBe(60);
    expect(logoImg.prop('width')).toBe(60);
  });

  it('should render correct logo text', () => {
    const sneaker = navHeader.find(Styled.Sneaker);
    expect(sneaker.text()).toBe('Sneaker');
    const maniacs = navHeader.find(Styled.Maniacs);
    expect(maniacs.text()).toBe('Maniacs');
  });
});

describe('Header logo matches snapshot', () => {
  const tree = renderer.create(<NavbarHeaderLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
