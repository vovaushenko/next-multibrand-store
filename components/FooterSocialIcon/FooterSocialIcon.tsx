import React from 'react';
import styled from 'styled-components';

export type Props = {
  href: string;
  icon: JSX.Element;
};
/**
 * Footer social icon link
 *@function FooterSocialIcon
 *@param {string} href - link href
 *@param {JSX.Element} icon - Icon to be displayed
 *@returns {JSX.Element} - Rendered icon-link
 */
const FooterSocialIcon = ({ href, icon }: Props): JSX.Element => {
  return (
    <StyledSocialLink href={href} target="_blank" rel="noreferrer">
      {icon}
    </StyledSocialLink>
  );
};

const StyledSocialLink = styled.a`
  color: ${({ theme }) => theme.darkGray};
  font-size: 2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;

export default FooterSocialIcon;
