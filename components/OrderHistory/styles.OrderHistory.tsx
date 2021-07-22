import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .order {
    font-size: 4rem;
    color: ${({ theme }) => theme.primaryGolden};
    margin-bottom: 1rem;
  }
`;
