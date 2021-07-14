import React from 'react';
import NavbarHeader from '../NavbarHeader/NavbarHeader';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';
import * as Styled from './styles';

/**
 * Renders navbar with its composed content
 *@function Navbar
 *@returns {JSX.Element} - Rendered Navbar
 */
const Navbar = (): JSX.Element => {
  return (
    <Styled.Container>
      <NavbarHeader />
      <NavbarNavigation />
    </Styled.Container>
  );
};
export default Navbar;
