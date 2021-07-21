import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  padding: 1rem;

  background: ${({ theme }) => theme.secondaryBg};
`;

export const CardImage = styled.figure`
  flex: 0.3;
`;

export const CardText = styled.aside`
  flex: 0.7;

  .router-link {
    max-width: 70%;
  }
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  margin-top: 0.5rem;
`;
