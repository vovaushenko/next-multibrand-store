import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0.25rem 0;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  position: absolute;
  color: ${({ theme }) => theme.lightGray};
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
`;

export const TextArea = styled.textarea`
  display: block;
  height: 3rem;
  padding: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.dashboardGrayCard};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:default {
    background-color: red;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
    border-color: ${({ theme }) => theme.primaryGolden};
  }

  [data-empty='false'] + label,
  :valid + label,
  :focus + label {
    top: -11px;
    left: 0px;
    font-size: 12px;
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
