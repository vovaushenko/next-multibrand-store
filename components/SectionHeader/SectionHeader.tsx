import React from 'react';
import styled from 'styled-components';

export interface Props {
  headerText: string;
}

const SectionHeader = ({ headerText }: Props): JSX.Element => {
  return <StyledHeader>{headerText}</StyledHeader>;
};

const StyledHeader = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export default SectionHeader;
