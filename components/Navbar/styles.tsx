import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 5;
  height: 6rem;
  background: ${({ theme }) => theme.primaryBg};

  @media ${({ theme }) => theme.media.phone} {
    height: auto;
  }
`;
