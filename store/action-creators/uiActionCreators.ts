import { ReactNode } from 'react';
import { UiAction, UiActionTypes } from '../../types/uiTypes';
/**
 * @function openModal
 * @param {number} modalYposition equals window.scrollY - used to absolutely position a Modal
 * @param {ReactNode} modalContent takes React component that will be rendered inside of the Modal
 * @example of use - onClick={() => openModal({modalYposition:window.scrollY, modalContent:<SomeComponent/>})} in some component that opens modal
 */
export const openModal = (modalContent: {
  modalYposition: number;
  modalContent: ReactNode;
}): UiAction => ({
  type: UiActionTypes.SET_MODAL_OPEN,
  payload: modalContent,
});
/**
 * @function closeModal
 * @will close modal
 */
export const closeModal = (): UiAction => ({
  type: UiActionTypes.SET_MODAL_CLOSED,
});
