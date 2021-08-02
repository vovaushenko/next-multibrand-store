import styled from 'styled-components';

export const Container = styled.section`
  cursor: pointer;
  display: flex;

  .star-icon {
    color: ${({ theme }) => theme.primaryGolden};
  }
`;
