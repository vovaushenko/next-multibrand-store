import styled from 'styled-components';

export const Container = styled.main`
  margin: 4rem 0 2rem 0;
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 2rem 0;
    flex-direction: column;
  }
`;

export const LeftColumn = styled.section`
  flex: 0.5;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RightColumn = styled.section`
  flex: 0.5;
`;
