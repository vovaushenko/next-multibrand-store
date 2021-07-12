import { UiAction, UiActionsState, UiActionTypes } from '../../types/uiTypes';

const initialState: UiActionsState = {
  isModalOpen: false,
  modalYposition: 0,
  modalContent: null,
};

export const uiActionsReducer = (
  state: UiActionsState = initialState,
  action: UiAction
): UiActionsState => {
  switch (action.type) {
    case UiActionTypes.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        modalYposition: action.payload.modalYposition,
        modalContent: action.payload.modalContent,
      };
    case UiActionTypes.SET_MODAL_CLOSED:
      return { ...state, isModalOpen: false, modalYposition: 0 };

    default:
      return state;
  }
};
