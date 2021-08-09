import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  align-items: center;
  gap: 3rem;
  grid-template-columns: 1fr 2.25fr 0.75fr;
  padding: 0.5rem 0.75rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
