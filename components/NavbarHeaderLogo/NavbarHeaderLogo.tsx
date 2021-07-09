import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledHeaderLogo } from './styles';

export type Props = {
  headerText: string;
};
/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@param {string} headerText - logo text and alt attribute
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = ({ headerText }: Props): JSX.Element => {
  return (
    <StyledHeaderLogo>
      <Link href="/">
        <a>
          <Image
            className="brand-logo"
            src={'/images/logo.png'}
            alt={headerText}
            height={66}
            width={321}
          />
        </a>
      </Link>
    </StyledHeaderLogo>
  );
};

export default NavbarHeaderLogo;
