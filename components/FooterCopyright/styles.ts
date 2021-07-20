import styled from 'styled-components';

export const FooterCopyrightSection = styled.section`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.lightGray};

  ul {
    display: flex;
    li:nth-child(n + 2) {
      margin-left: 0.75rem;
    }
  }
  .router-link {
    color: ${({ theme }) => theme.lightGray};
  }
`;
