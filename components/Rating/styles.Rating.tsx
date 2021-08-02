import styled from 'styled-components';

export const StarContainer = styled.section`
  cursor: pointer;
  display: flex;
`;

export const Star = styled.div`
  .star-icon {
    color: ${({ theme }) => theme.primaryGolden};
    font-size: 2rem;
  }
`;

export const Rating = styled.p`
  color: ${({ theme }) => theme.lightGray};
  display: block;
`;
