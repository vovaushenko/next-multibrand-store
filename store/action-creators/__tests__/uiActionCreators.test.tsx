import React from 'react';
import { mockReduxStore } from '../../../test/mockReduxStore';
import { storeFactory } from '../../../test/testUtils';
import { LocalRootState } from '../../reducers';
import { changeTheme, closeModal, openModal } from '../uiActionCreators';

/**
 * Mocked redux store
 *@returns {store} - redux store of the app
 */
const store = storeFactory(mockReduxStore);

describe('closeModal action creator', () => {
  describe('Modal action creators', () => {
    const DummyModalContent = () => <h1>Content</h1>;
    test('opens modal with specified component at specified height', () => {
      store.dispatch(
        openModal({
          modalContent: <DummyModalContent />,
          modalYposition: 500,
        })
      );

      const newState = store.getState();
      const expectedState: LocalRootState = {
        ...mockReduxStore,
        ui: {
          isModalOpen: true,
          modalContent: <DummyModalContent />,
          modalYposition: 500,
          theme: 'light',
        },
      };
      expect(newState).toEqual(expectedState);
    });

    test('closes modal', () => {
      store.dispatch(closeModal());
      const newState = store.getState();
      const expectedState: LocalRootState = {
        ...mockReduxStore,
        ui: {
          isModalOpen: false,
          modalContent: <DummyModalContent />,
          modalYposition: 0,
          theme: 'light',
        },
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe('Change theme action creator', () => {
  store.dispatch(changeTheme());
  const newState = store.getState();
  const expectedState: LocalRootState = {
    ...mockReduxStore,
    ui: {
      isModalOpen: false,
      modalContent: null,
      modalYposition: 0,
      theme: 'light',
    },
  };

  expect(newState).toEqual(expectedState);
});
