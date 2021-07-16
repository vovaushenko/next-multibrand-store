import React, { FC, ReactNode } from 'react';
import * as Styled from './styles.NavMiniModal';

export interface Props {
  modalContent: ReactNode;
  isOpen: boolean;
  modalWidth: string;
}
/**
 * Wrapper for Navbar Dropdowns with User account/cart info
 * @function NavMiniModal
 * @param  {ReactNode} modalContent - dropdown content
 * @param  {boolean} isOpen - dropdown display mode, isOpen = show, otherwise modal will be hidden
 * @param  {string} width - modal width
 * @returns {number} - Rendered NavMiniModal Component
 */
const NavMiniModal: FC<Props> = ({ modalContent, isOpen, modalWidth }) => {
  return (
    <Styled.Container isOpen={isOpen} modalWidth={modalWidth}>
      {modalContent}
    </Styled.Container>
  );
};
export default NavMiniModal;
