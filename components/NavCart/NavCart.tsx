import { useMediaQuery } from '@react-hook/media-query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CartContent from '../CartContent/CartContent';
import CartIcon from '../CartIcon/CartIcon';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import * as Styled from './styles.NavCart';

/**
 *@component responsible for NavContent, contains all redux-logic for child components
 *@function NavCart
 *@returns {JSX.Element} - Rendered NavCart component
 */
const NavCart = (): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Modal Dropdown will be displayed differently for mobile and pc screens
  const onMobileWidth = useMediaQuery('only screen and (max-width: 500px)');
  const modalTop = onMobileWidth ? '3rem' : '5rem';
  const modalRight = onMobileWidth ? '-5.5rem' : '0rem';
  const modalWidth = onMobileWidth ? '350px' : '500px';

  // local state - modal control
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCartModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);
  // global state - cart content and removeFromCart action creator
  const { productAmount, cart, total } = useTypedSelector(
    (state) => state.cart
  );
  const { addToCart, removeFromCart } = useActions();

  // this useEffect is responsible for closing results modal dropdown if user clicked outside of modal
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isModalOpen &&
        !buttonRef.current?.contains(e.target as Node) &&
        !modalRef.current?.contains(e.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isModalOpen]);

  return (
    <Styled.Container>
      <Styled.CartButton
        className="cart-button"
        onClick={toggleCartModal}
        ref={buttonRef}
      >
        <CartIcon productAmount={productAmount} />
        <span>Cart</span>
      </Styled.CartButton>
      <NavMiniModal
        isOpen={isModalOpen}
        modalWidth={modalWidth}
        top={modalTop}
        right={modalRight}
        modalContent={
          <Styled.ModalContentWrap ref={modalRef}>
            <CartContent
              cart={cart}
              total={total}
              productAmount={productAmount}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </Styled.ModalContentWrap>
        }
      />
    </Styled.Container>
  );
};

export default NavCart;
