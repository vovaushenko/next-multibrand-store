import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkContent = styled.a`
  color: ${({ theme }) => theme.primaryWhite};
  &:hover {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
