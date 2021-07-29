import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  padding: 2rem;
  background: ${({ theme }) => theme.secondaryBg};
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const CardImage = styled.figure`
  flex: 0.3;
  align-self: flex-end;
`;

export const CardText = styled.aside`
  flex: 0.7;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .router-link {
    max-width: 70%;
  }
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  margin-top: 0.5rem;
`;
