import React, { FC } from 'react';
import * as Styled from './Button.styles';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  text?: string;
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
const Button: FC<Props> = ({
  children,
  isLoading,
  isCompleted,
  text,
  ...rest
}) => {
  return (
    <Styled.BTN
      isLoading={isLoading}
      isCompleted={isCompleted}
      {...rest}
      className="btn"
    >
      {children}
      {text && text}
    </Styled.BTN>
  );
};

export default Button;
