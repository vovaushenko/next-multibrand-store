import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as Styled from './styles.NavbarHeader';

/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = (): JSX.Element => {
  return (
    <Styled.HeaderLogo>
      <Image
        src="/sneaker-maniacs-logo.png"
        alt="sneaker maniacs logo"
        height={60}
        width={60}
        quality={100}
        objectFit="contain"
      />
      <Link href="/" passHref>
        <Styled.Sneaker>Sneaker</Styled.Sneaker>
      </Link>
      <Styled.Maniacs>Maniacs</Styled.Maniacs>
    </Styled.HeaderLogo>
  );
};

export default NavbarHeaderLogo;
