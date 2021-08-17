import styled, { css } from 'styled-components';
import {
  slideInKeyframes,
  slideInTop,
  slideOutKeyframes,
} from '../../styles/reusableStyles';
import { Props } from './NavMiniModal';

const slideInAnimation = css`
  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

const slideInTopAnimation = css`
  animation: ${slideInTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const slideOutAnimation = css`
  animation: ${slideOutKeyframes} 0.5s ease-in both;
`;

const isOpenStyle = css`
  visibility: visible;
  opacity: 1;
`;

const isClosedStyle = css`
  visibility: hidden;
  transition: visibility 0.5s,
    opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  opacity: 0;
`;

type ContainerProps = Omit<Props, 'modalContent'>;

export const Container = styled.div<ContainerProps>`
  ${({ isOpen }) => (isOpen ? isOpenStyle : isClosedStyle)};

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

  padding: 1.25rem;

  ${({ animationVariant }) =>
    animationVariant === 'slideIn' && slideInAnimation};

  ${({ animationVariant }) =>
    animationVariant === 'slideInTop' && slideInTopAnimation};

  ${({ isOpen }) => isOpen === false && slideOutAnimation};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0.75rem;
  }
`;
