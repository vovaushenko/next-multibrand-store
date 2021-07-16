import styled from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';

export const Container = styled.nav`
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.media.phone} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  }
`;

export const LogoWrap = styled.figure``;

export const IconsWrap = styled.section`
  display: flex;

  gap: 1rem;
  .mobile-icon {
    font-size: 1.75rem;
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
