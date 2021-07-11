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

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 600;
`;

export default PageHeader;
