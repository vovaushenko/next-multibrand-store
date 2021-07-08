import * as React from 'react';
import { FC } from 'react';
import { StyledContainer } from './styles';

/**
 * Centered flex container - will center inner content and limit width by the value of theme.maxWidth
 *@function Container
 *@param {object} props - Children Components
 *@returns {JSX.Element} - Rendered Container wrapper with Children React Nodes
 */
const Container: FC = ({ children }): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
