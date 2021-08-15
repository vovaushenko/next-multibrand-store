import styled from 'styled-components';

export const Container = styled.main``;

export const ProductsSection = styled.section`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
  @media${({ theme }) => theme.media.tablet} {
    h2 {
      margin-left: 10px;
      margin-top: 2rem;
    }
  }
`;
