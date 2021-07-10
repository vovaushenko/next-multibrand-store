import Link from 'next/link';
import React, { ReactNode } from 'react';
import { StyledRouterLink } from './styles';

export interface Props {
  href: string;
  children: ReactNode;
  fontSize?: string;
}

/**
 * Reusable utility router link
 *@function RouterLink
 *@param {string} href - link href
 *@param {string} fontSize - link content fontSize, or 1rem by default
 *@param {JSX.Element} children - children to be displayed
 *@returns {JSX.Element} - Rendered router-link
 */
const RouterLink = ({
  href,
  fontSize = '1rem',
  children,
}: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <StyledRouterLink className="router-link" fontSize={fontSize}>
        {children}
      </StyledRouterLink>
    </Link>
  );
};

export default RouterLink;
