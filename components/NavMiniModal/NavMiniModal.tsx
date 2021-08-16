import React, { FC, ReactNode } from 'react';
import * as Styled from './styles.NavMiniModal';

export interface Props {
  modalContent: ReactNode;
  isOpen: boolean;
  modalWidth: string;
  top: string;
  right: string;
  animationVariant: 'slideIn' | 'slideInTop';
}

/**
 * Wrapper for Navbar Dropdowns with User account/cart info
 * @function NavMiniModal
 * @param  {ReactNode} modalContent - dropdown content
 * @param  {boolean} isOpen - dropdown display mode, isOpen = show, otherwise modal will be hidden
 * @param  {string} width - modal width
 * @param  {string} top - top for absolute positioning
 * @param  {string} right - right for absolute positioning
 * @returns {number} - Rendered NavMiniModal Component
 */
const NavMiniModal: FC<Props> = ({
  modalContent,
  isOpen,
  modalWidth,
  top,
  right,
  animationVariant,
}) => {
  return (
    <Styled.Container
      isOpen={isOpen}
      modalWidth={modalWidth}
      top={top}
      right={right}
      animationVariant={animationVariant}
    >
      {modalContent}
    </Styled.Container>
  );
};
export default NavMiniModal;
