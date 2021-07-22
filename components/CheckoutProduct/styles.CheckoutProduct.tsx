import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.dashboardGrayCard};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const LeftColumn = styled.div``;
export const RightColumn = styled.div``;

export const Figure = styled.figure`
  display: flex;
  gap: 1rem;
`;

export const Figcaption = styled.figcaption``;
export const ProductName = styled.h3`
  color: ${({ theme }) => theme.primaryGolden};
`;
export const Size = styled.p``;

export const Price = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
  font-weight: bold;
  font-size: 1.25rem;
`;
