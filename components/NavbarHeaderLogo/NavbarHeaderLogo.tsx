import Link from 'next/link';
import React from 'react';
import { MdWhatshot } from 'react-icons/md';
import * as Styled from './styles.NavbarHeader';

/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = (): JSX.Element => {
  return (
    <Styled.HeaderLogo>
      <MdWhatshot className="icon" />
      <Link href="/" passHref>
        <Styled.Sneaker>Sneaker</Styled.Sneaker>
      </Link>
      <Styled.Maniacs>Maniacs</Styled.Maniacs>
    </Styled.HeaderLogo>
  );
};

export default NavbarHeaderLogo;
