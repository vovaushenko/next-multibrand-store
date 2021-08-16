import styled, { css } from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';
import { Props } from './NavMiniModal';

const slideInAnimation = css`
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

const slideInTopAnimation = css`
  /**
   * ----------------------------------------
   * animation slide-in-top
   * ----------------------------------------
   */
  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

type ContainerProps = Omit<Props, 'modalContent'>;

export const Container = styled.div<ContainerProps>`
  z-index: 6;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  min-width: ${({ modalWidth }) => modalWidth || '250px'};
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.secondaryBg};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1.25rem;

  ${({ animationVariant }) =>
    animationVariant === 'slideIn' && slideInAnimation};

  ${({ animationVariant }) =>
    animationVariant === 'slideInTop' && slideInTopAnimation};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0.75rem;
  }
`;
