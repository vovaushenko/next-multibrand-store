import { ReactNode } from 'react';
import { Dispatch } from 'redux';
import { UiAction, UiActionTypes } from '../../types/uiTypes';
import { State } from '../reducers';
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

/**
 *@UI async action creator, will dispatch action to change color theme and persist this change to localStorage
 *@function changeTheme
 *@returns {undefined}
 */
export const changeTheme = () => {
  return async (
    dispatch: Dispatch<UiAction>,
    getState: () => State
  ): Promise<void> => {
    dispatch({ type: UiActionTypes.CHANGE_THEME });

    localStorage.setItem('theme', getState().ui.theme);

    dispatch({ type: UiActionTypes.THEME_WAS_CHANGED });
  };
};
