import React from 'react';
import styled from 'styled-components';
export type ButtonProps = {
  text: string;
  bgColor: string;
};

const TestButton: React.FC<ButtonProps> = ({ text, bgColor }) => (
  <StyledButton bgColor={bgColor}>{text}</StyledButton>
);

type StyledProps = {
  bgColor: string;
};

const StyledButton = styled.button<StyledProps>`
  background-color: ${({ bgColor }) => bgColor || 'green'};
`;

export default TestButton;
