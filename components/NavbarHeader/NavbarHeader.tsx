import React from 'react';
import styled from 'styled-components';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';
import NavHeaderSearch from '../NavHeaderSearch/NavHeaderSearch';

/**
 * Navbar header - contains MainLogo, Search Input and Action List with Cart and Log In/Out
 *@function NavbarHeader
 *@param {object} props - React.props
 *@returns {JSX.Element} - Rendered NavbarHeader
 */
const NavbarHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <NavbarHeaderLogo headerText={'Sneakers'} />
      <NavHeaderSearch />
      {/* TODO: ACTION LIST */}
      <h4>placeholder</h4>
      <h4>cart</h4>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr 3fr 0.5fr 0.5fr;
  padding: 0.25rem 0.75rem;
`;

export default NavbarHeader;
