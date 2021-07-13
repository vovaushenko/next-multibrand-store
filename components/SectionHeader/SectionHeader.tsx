import React from 'react';
import styled from 'styled-components';

export interface Props {
  headerText: string;
}
/**
 * Reusable Section Header component
 *@function SectionHeader
 *@param {string} headerText - Text content of Section Header
 *@returns {JSX.Element} - Rendered SectionHeader component (
 */
const SectionHeader = ({ headerText }: Props): JSX.Element => {
  return <StyledHeader>{headerText}</StyledHeader>;
};

const StyledHeader = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export default SectionHeader;
