import { UiAction, UiActionsState, UiActionTypes } from '../../types/uiTypes';
/**
 * @method getThemeFromLocalStorage
 * @returns {'dark' | 'light'} - initial state for UI reducer theme.
 */
//TODO: fix server-side issue with themes
const getThemeFromLocalStorage = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined') {
    const persistedTheme = localStorage.getItem('theme');
    console.log(persistedTheme);
    if (persistedTheme) {
      return persistedTheme as 'dark' | 'light';
    }
  }
  return 'dark';
};

const initialState: UiActionsState = {
  theme: 'dark',
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

    case UiActionTypes.CHANGE_THEME:
      const newThemeMode = state.theme === 'dark' ? 'light' : 'dark';
      return {
        ...state,
        theme: newThemeMode,
      };

    default:
      return state;
  }
};
