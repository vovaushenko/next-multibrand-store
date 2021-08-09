import styled, { css } from 'styled-components';

const sharedContainerStyles = css`
  /* Center Icon */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Styles */
  max-width: 4rem;
  padding: 0.5rem;
  background-image: ${({ theme }) => theme.blackToGrayGradient};
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.secondaryGolden};
  cursor: pointer;
`;

export const Container = styled.aside`
  /* is not shown on mobile devices */
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  /* Positioning */
  position: fixed;
  top: 85%;
  z-index: 6;
  left: calc(100% - 4rem);
  /* Shared Styles */
  ${sharedContainerStyles}

  .icon {
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryWhite};
  }
  &:hover {
    .icon {
      transform: rotate(360deg);
    }
  }
`;

export const SettingsContainer = styled.nav`
  /* positioning */
  position: fixed;
  top: 66%;
  z-index: 7;
  left: calc(100% - 9rem);
  /* display */
  display: flex;
  flex-direction: column;
  transform: rotateZ(20deg);

  gap: 0.3rem;
  padding: 1rem;
`;

export const SettingsOption = styled.div`
  /* shared styles */
  ${sharedContainerStyles}
  /* rotation and shape */

  
  .icon {
    transform: rotateZ(-20deg);
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryWhite};
  }

  @keyframes scale-in-ver-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  animation: scale-in-ver-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
