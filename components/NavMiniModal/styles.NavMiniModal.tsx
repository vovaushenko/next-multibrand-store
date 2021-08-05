import styled from 'styled-components';
import { slideInKeyframes } from '../../styles/reusableStyles';

interface Props {
  isOpen: boolean;
  modalWidth: string;
  top: string;
  right: string;
}

export const Container = styled.div<Props>`
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

  animation: ${slideInKeyframes} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0.75rem;
  }
`;
