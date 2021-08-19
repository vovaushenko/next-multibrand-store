import React from 'react';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';
import NavHeaderActionList from '../NavHeaderActionList/NavHeaderActionList';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';
import * as Styled from './styles.NavbarHeader';

/**
 * Navbar header - contains MainLogo, Search Input and Action List with Cart and Log In/Out,
 * Will be hidden on mobile width's
 *@function NavbarHeader
 *@returns {JSX.Element} - Rendered NavbarHeader
 */
const NavbarHeader = (): JSX.Element => {
  return (
    <Styled.Container>
      <NavbarHeaderLogo />
      <NavHeaderSearch />
      <NavHeaderActionList />
    </Styled.Container>
  );
};

export default NavbarHeader;
