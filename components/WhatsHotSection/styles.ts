import styled from 'styled-components';

export const Wrapper = styled.section`
  background-image: ${({ theme }) => theme.grayToBlackGradient};
  h2 {
    margin-top: 0;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1px;
  overflow: hidden;

  background-image: ${({ theme }) => theme.blackToGrayGradient};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
