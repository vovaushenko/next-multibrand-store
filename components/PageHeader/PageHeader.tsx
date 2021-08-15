import React from 'react';
import styled from 'styled-components';

export interface Props {
  headerText: string;
}

/**
 * Page <h1> Header
 *@function PageHeader
 *@param {string} headerText - Header text content
 *@returns {JSX.Element} - Rendered component (or null if `success` prop is failed)
 */
const PageHeader = ({ headerText }: Props): JSX.Element => {
  return <StyledHeader>{headerText}</StyledHeader>;
};

const StyledHeader = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  margin: 1rem 0;
  @media ${({ theme }) => theme.media.tablet} {
    font-size: 1.25rem;
  }
`;

export default PageHeader;
