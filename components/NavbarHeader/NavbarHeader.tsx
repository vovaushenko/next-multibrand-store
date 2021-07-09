import React from 'react';
import styled from 'styled-components';
import NavbarHeaderLogo from '../NavbarHeaderLogo/NavbarHeaderLogo';

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
      {/* TODO: SEARCH INPUT */}
      {/* TODO: ACTION LIST */}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border: 1px solid white;
  padding: 0.5rem 1rem;
`;

export default NavbarHeader;
