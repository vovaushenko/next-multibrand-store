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
  box-shadow: 0 0 12px ${({ theme }) => theme.borderGrayColor};
  box-shadow: ${({ theme }) => theme.mode === 'light' && theme.boxShadow};
`;
