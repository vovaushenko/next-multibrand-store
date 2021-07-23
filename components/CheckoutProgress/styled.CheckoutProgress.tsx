import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const ProgressLink = styled.a`
  color: ${({ theme }) => theme.primaryWhite};
`;
