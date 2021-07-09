import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export type Props = {
  headerText: string;
};
/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@param {string} headerText - logo text
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = ({ headerText }: Props): JSX.Element => {
  return (
    <StyledHeaderLogo>
      <Link href="/">
        {headerText}
        {/* TODO:Custom SVG/icon component */}
      </Link>
    </StyledHeaderLogo>
  );
};

const StyledHeaderLogo = styled.h1`
  a {
    color: ${({ theme }) => theme.primaryWhite};
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default NavbarHeaderLogo;
