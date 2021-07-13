import React from 'react';
import styled from 'styled-components';

export interface Props {
  headerText: string;
}
/**
 * Reusable Card Header component
 *@function CardHeader
 *@param {string} headerText - Text content of Card Header
 *@returns {JSX.Element} - Rendered CardHeader component (
 */
const CardHeader = ({ headerText }: Props): JSX.Element => {
  return <StyledHeader>{headerText}</StyledHeader>;
};

const StyledHeader = styled.h3`
  font-size: 1.25rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export default CardHeader;
