import styled from 'styled-components';

export const TextField = styled.div`
  input {
    background: ${({ theme }) => theme.lightestGray};
    height: 3rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.secondaryBg};
    &:focus-visible {
      outline: none;
      border-color: ${({ theme }) => theme.primaryGolden};
    }
  }
`;
