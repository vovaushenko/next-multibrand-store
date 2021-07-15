import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  background: ${({ theme }) => theme.secondaryBg};
  @media ${({ theme }) => theme.media.phone} {
    #quick-view-btn {
      display: none;
    }
  }
`;

export const CardImage = styled.figure`
  flex: 0.7;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  margin-top: 0.5rem;
`;
