import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const WhatsHotSectionSkeleton = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-image: ${({ theme }) => theme.grayToBlackGradient};
  overflow: hidden;

  h2 {
    margin-left: 2rem;
  }
`;
