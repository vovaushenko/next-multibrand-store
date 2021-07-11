import React, { FC, ReactNode } from 'react';
import { StyledButton } from './styles';

export interface Props {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  text?: string;
  children?: ReactNode;
}

/**
 * Reusable generic button
 *@function Button
 *@param {boolean} isLoading - set styles for loading state
 *@param {boolean} isCompleted - set styles for completed state
 *@param {boolean} disabled - set styles for disabled state
 *@param {string} text - set button text
 *@param {children} ReactNode - set button children
 *@returns {JSX.Element} - rendered button
 */
const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props
> = ({ children, isLoading, isCompleted, text, ...rest }: Props) => {
  return (
    <StyledButton
      isLoading={isLoading}
      isCompleted={isCompleted}
      {...rest}
      className="btn"
    >
      {children}
      {text && text}
    </StyledButton>
  );
};

export default Button;
