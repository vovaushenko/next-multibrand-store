export interface UiActionsState {
  isModalOpen: boolean;
  modalYposition: number;
  modalContent: React.ReactNode | null;
}

export enum UiActionTypes {
  SET_MODAL_OPEN = 'SET_MODAL_OPEN',
  SET_MODAL_CLOSED = 'SET_MODAL_CLOSED',
}

interface OpenModalAction {
  type: UiActionTypes.SET_MODAL_OPEN;
  payload: { modalYposition: number; modalContent: React.ReactNode };
}
interface CloseModalAction {
  type: UiActionTypes.SET_MODAL_CLOSED;
}

export type UiAction = OpenModalAction | CloseModalAction;
