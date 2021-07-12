import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import * as Styled from './styles';

/**
 *@Modal component
 *@controlled through redux global UI state
 *@use in order to open modal, import open modal throughout useActions, const { openModal } = useActions();
 *@and set onClick handler with {openModal} on a component that triggers modal
 */
const Modal = (): JSX.Element | null => {
  const [isBrowser, setIsBrowser] = useState(false);
  const { isModalOpen, modalYposition, modalContent } = useTypedSelector(
    (state) => state.ui
  );

  const { closeModal } = useActions();
  const modalWrapperRef = useRef(null);

  const backDropHandler = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-expect-error modalWrapper will always be available
    if (!modalWrapperRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleCloseClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeModal();
  };

  const modalComponent = isModalOpen ? (
    <>
      <Styled.ModalOverlay onClick={backDropHandler} positionY={modalYposition}>
        <Styled.ModalWrapper ref={modalWrapperRef}>
          <Styled.Modal>
            <Styled.ModalHeader>
              <button onClick={handleCloseClick}>
                <FaTimes />
              </button>
            </Styled.ModalHeader>
            <Styled.ModalBody>{modalContent}</Styled.ModalBody>
          </Styled.Modal>
        </Styled.ModalWrapper>
      </Styled.ModalOverlay>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalComponent,
      // @ts-expect-error modal-root div is available in _document.tsx
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
