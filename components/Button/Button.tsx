import React, { FC, ReactNode } from 'react';
import { StyledButton } from './styles';

export interface Props {
  isLoading: boolean;
  isCompleted: boolean;
  disabled: boolean;
  text?: string;
  children?: ReactNode;
}

const Button: FC<Props> = ({
  children,
  isLoading,
  isCompleted,
  text,
  ...rest
}) => {
  return (
    <StyledButton isLoading={isLoading} isCompleted={isCompleted} {...rest}>
      {children}
      {text && text}
    </StyledButton>
  );
};

export default Button;
