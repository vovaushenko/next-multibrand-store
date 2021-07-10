import styled from 'styled-components';

interface StyledProps {
  fontSize: string;
}

export const StyledRouterLink = styled.div<StyledProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    color: ${({ theme }) => theme.secondaryGolden};
  }
`;
