import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.primaryGray};

  h2 {
    margin-top: 0;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
