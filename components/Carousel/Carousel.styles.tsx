import styled from 'styled-components';
import { hideScrollbar } from '../../styles/reusableStyles';

export const Container = styled.section`
  width: 95%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  //fixed min-height to prevent layout shift after rendering scrollbar on hover in UL
  min-height: 550px;

  @media ${({ theme }) => theme.media.phone} {
    //carousel only on desktop and tablet
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

export const CarouselControlBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 50%;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.dashboardGrayBg};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  .icon {
    color: ${({ theme }) => theme.primaryGolden};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.dashboardGrayCard};

    .left {
      transform: translateX(-3px);
    }

    .right {
      transform: translateX(3px);
    }
  }
`;

export const UL = styled.ul`
  display: grid;
  grid-auto-flow: column;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  width: auto;
  scroll-behavior: smooth;

  padding: 1rem 1rem;
  gap: 1.5rem;
  height: auto;

  :not(:hover) {
    ${hideScrollbar}
  }
`;

export const LI = styled.li``;
