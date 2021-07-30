import styled from 'styled-components';

export const Navigation = styled.nav`
  background: ${({ theme }) => theme.secondaryBg};
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};

  ul {
    display: flex;
    justify-content: center;
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
