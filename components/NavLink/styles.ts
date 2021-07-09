import styled from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.lightGray};
  text-transform: uppercase;
  .link-icon {
    margin-left: 0.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;
