import styled from 'styled-components';

interface ModalOverlayProps {
  positionY: number;
}
export const ModalOverlay = styled.div<ModalOverlayProps>`
  z-index: 777;
  position: absolute;
  top: ${({ positionY }) => `${positionY}px`};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.52);
  backdrop-filter: blur(4px);
`;

export const ModalBody = styled.main`
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    cursor: pointer;
    font-size: 1.45rem;
  }
`;

export const Modal = styled.section`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;

  @keyframes showModal {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  animation: showModal 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ModalWrapper = styled.div`
  width: 100%;
`;
