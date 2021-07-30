export interface UiActionsState {
  theme: 'dark' | 'light';
  isModalOpen: boolean;
  modalYposition: number;
  modalContent: React.ReactNode | null;
}

export enum UiActionTypes {
  SET_MODAL_OPEN = 'SET_MODAL_OPEN',
  SET_MODAL_CLOSED = 'SET_MODAL_CLOSED',

  CHANGE_THEME = 'CHANGE_THEME',
  THEME_WAS_CHANGED = 'THEME_WAS_CHANGED',
}

interface OpenModalAction {
  type: UiActionTypes.SET_MODAL_OPEN;
  payload: { modalYposition: number; modalContent: React.ReactNode };
}
interface CloseModalAction {
  type: UiActionTypes.SET_MODAL_CLOSED;
}

/**
 * Theme Action Creators
 */

interface ChangeThemeAction {
  type: UiActionTypes.CHANGE_THEME;
}
interface ThemeWasChangedAction {
  type: UiActionTypes.THEME_WAS_CHANGED;
}

export type UiAction =
  | OpenModalAction
  | CloseModalAction
  | ChangeThemeAction
  | ThemeWasChangedAction;
