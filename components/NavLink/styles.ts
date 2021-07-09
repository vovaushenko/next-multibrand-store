import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  color: ${({ theme }) => theme.lightGray};
  text-transform: uppercase;
  .link-icon {
    margin-left: 0.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;
