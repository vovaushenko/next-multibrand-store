import styled from 'styled-components';

export const TextField = styled.div`
  input {
    background: ${({ theme }) => theme.lightestGray};
    height: 3rem;
    padding: 0.5rem;
    border-radius: 5px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryBg};
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.secondaryGolden};
      border-color: ${({ theme }) => theme.primaryGolden};
    }
  }
`;
