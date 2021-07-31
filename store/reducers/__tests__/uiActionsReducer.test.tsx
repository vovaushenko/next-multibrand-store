import React from 'react';
import {
  UiAction,
  UiActionsState,
  UiActionTypes,
} from '../../../types/uiTypes';
import { uiActionsReducer } from '../uiActionsReducer';

const initialState: UiActionsState = {
  theme: 'dark',
  isModalOpen: false,
  modalYposition: 0,
  modalContent: null,
};

test('when previous state is undefined, returns initial state', () => {
  const newState = uiActionsReducer(undefined, {} as UiAction);
  expect(newState).toStrictEqual(initialState);
});

describe('Modal piece of UI state', () => {
  const ModalContent = () => <h1>Hello</h1>;

  test('returns isModalOpen:true for action type SET_MODAL_OPEN and set correct modalYposition and modalContent', () => {
    const newState = uiActionsReducer(initialState, {
      type: UiActionTypes.SET_MODAL_OPEN,
      payload: { modalYposition: 55, modalContent: <ModalContent /> },
    });

    expect(newState).toStrictEqual({
      theme: 'dark',
      isModalOpen: true,
      modalYposition: 55,
      modalContent: <ModalContent />,
    });
  });

  test('return isModalOpen:false and modalYposition:0 for for action type SET_MODAL_CLOSE', () => {
    const newState = uiActionsReducer(initialState, {
      type: UiActionTypes.SET_MODAL_CLOSED,
    });

    expect(newState).toStrictEqual({
      theme: 'dark',
      isModalOpen: false,
      modalYposition: 0,
      modalContent: null,
    });
  });
});

describe('Theme pice of UI state', () => {
  test('should toggle theme on CHANGE_THEME action type', () => {
    const newState = uiActionsReducer(initialState, {
      type: UiActionTypes.CHANGE_THEME,
    });
    expect(newState).toStrictEqual({
      ...initialState,
      theme: 'light',
    });
  });
});
