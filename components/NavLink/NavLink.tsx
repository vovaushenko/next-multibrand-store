import Link from 'next/link';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { StyledLink } from './styles';

export type Props = {
  linkText: string;
  href: string;
};
/**
 * NavLink built on top of Next/link
 *@function NavLink
 *@param {string} href - href of the link
 *@param {string} linkText - text content of the link
 *@returns {JSX.Element} - Rendered NavLink component
 */
const NavLink = ({ href, linkText }: Props): JSX.Element => {
  return (
    <>
      <Link href={href} passHref={true}>
        <StyledLink className="link-text">
          {linkText}
          <FiChevronDown className="link-icon" href={href} />
        </StyledLink>
      </Link>
    </>
  );
};

export default NavLink;
