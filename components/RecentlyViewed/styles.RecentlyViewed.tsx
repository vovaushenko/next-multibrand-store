import styled from 'styled-components';

export const Container = styled.section`
  /* This container is horizontally scrollable */
  /* Component in which it will be injected should have overflow:hidden/clip to prevent overflow */
  display: grid;
  grid-auto-flow: column;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  width: auto;
  padding: 1rem;
  gap: 1rem;
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

  article {
    width: 250px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.borderGrayColor};
    #quick-view-btn {
      display: none;
    }

    &:hover {
      box-shadow: ${({ theme }) => theme.selectedOutline};
    }
  }
`;
