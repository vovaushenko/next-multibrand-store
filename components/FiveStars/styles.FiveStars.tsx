import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const Star = styled.div`
  .icon {
    color: ${({ theme }) => theme.darkGray};
    font-size: 1.25rem;
  }
  .active-icon {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
