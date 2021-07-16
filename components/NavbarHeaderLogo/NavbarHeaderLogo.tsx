import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as Styled from './styles.NavbarHeader';

export type Props = {
  headerText: string;
  width: number;
  height: number;
  src: string;
};
/**
 * Renders navbar header logo
 *@function NavbarHeaderLogo
 *@param {string} src - logo image src
 *@param {string} headerText - logo text and alt attribute
 *@param {number} width - logo width
 *@param {number} height - logo height
 *@returns {JSX.Element} - Rendered NavbarHeaderLogo
 */
const NavbarHeaderLogo = ({
  headerText,
  height,
  width,
  src,
}: Props): JSX.Element => {
  return (
    <Styled.HeaderLogo>
      <Link href="/" passHref>
        <Image
          className="brand-logo"
          src={src}
          alt={headerText}
          height={height}
          width={width}
          objectFit="contain"
        />
      </Link>
    </Styled.HeaderLogo>
  );
};

export default NavbarHeaderLogo;
