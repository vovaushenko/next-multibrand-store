import styled from 'styled-components';

interface StyledProps {
  fontSize: string;
}

export const StyledRouterLink = styled.div<StyledProps>`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;
