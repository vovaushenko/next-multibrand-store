import styled from 'styled-components';

export const CardContainer = styled.article`
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;
`;
export const Description = styled.p``;
