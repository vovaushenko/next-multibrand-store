import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
`;

export const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    color: ${({ theme }) => theme.darkGray};
    font-size: 1.25rem;
  }
  .active-icon {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
