import styled from 'styled-components';

export const Container = styled.section`
  @media${({ theme }) => theme.media.desktop} {
    display: none;
  }
  @media${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;

export const UL = styled.ul`
  /* This container is horizontally scrollable */
  /* Component in which it will be injected should have overflow:hidden/clip to prevent overflow */
  display: grid;
  grid-auto-flow: column;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  width: auto;

  padding: 1rem 2rem;
  gap: 0.5rem;
  height: auto;

  /* Hide horizontal scrollbar on mobile devices */
  @media ${({ theme }) => theme.media.tablet} {
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
      /* WebKit */
      width: 0;
      height: 0;
    }
  }
`;

export const LI = styled.li``;

export const BrandLogo = styled.figure`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
