import styled from 'styled-components';

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  padding: 1.25rem;

  button {
    justify-self: end;
    width: 70%;
  }
`;

export const Review = styled.p``;
