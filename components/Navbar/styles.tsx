import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 5;
  background: ${({ theme }) => theme.primaryBg};
`;
