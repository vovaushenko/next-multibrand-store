import styled, { css } from 'styled-components';

export const Container = styled.fieldset`
  position: relative;
  padding: 0.25rem 0;
  border: 0;
  width: 100%;
`;

const labelWithValueStyles = css`
  top: -11px;
  left: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryGolden};
`;

interface LabelProps {
  hasValue: boolean;
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  color: ${({ theme }) => theme.lightGray};
  text-transform: capitalize;

  // if label is not empty the below styles will override some default styles, thereby positioning label above input
  ${({ hasValue }) => hasValue && labelWithValueStyles};
`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  display: block;
  height: 3rem;
  padding: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme.primaryWhite};
  background: ${({ theme }) => theme.dashboardGrayCard};
  border: 1px solid;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.primaryRed : theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
    border-color: ${({ theme }) => theme.primaryGolden};
  }
`;

interface ErrorProps {
  hasError: boolean;
}

export const Error = styled.div<ErrorProps>`
  visibility: ${({ hasError }) => (hasError ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 1px;
  color: ${({ theme }) => theme.primaryRed};
  font-size: 12px;

  .icon {
    font-size: 12px;
    margin-right: 5px;
    color: ${({ theme }) => theme.primaryRed};
  }
`;
