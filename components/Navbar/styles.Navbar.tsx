import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 6rem;
  background: ${({ theme }) => theme.primaryBg};

  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
  }
`;
