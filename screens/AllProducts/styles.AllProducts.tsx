import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 0.25rem;
  }
`;

export const GridWrap = styled.main`
  width: 100%;
`;
