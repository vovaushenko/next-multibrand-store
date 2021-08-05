import styled from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';

export const Container = styled.header`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.media.phone} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};

    .mobile-icon {
      display: block;
      font-size: 1.75rem;
      color: 1px solid ${({ theme }) => theme.primaryWhite};
    }
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
