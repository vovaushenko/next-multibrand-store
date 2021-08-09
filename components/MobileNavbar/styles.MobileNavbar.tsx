import styled from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';

export const Container = styled.header`
  /* will not show up on PC and Tablet widths */
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }

  /* will be in DOM only on mobile widths */
  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};

    .mobile-icon {
      display: block;
      font-size: 1.75rem;
      color: 1px solid ${({ theme }) => theme.primaryWhite};
    }
  }
`;

interface Props {
  height: string;
}
export const SearchContainer = styled.div<Props>`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  height: ${({ height }) => height};
`;
