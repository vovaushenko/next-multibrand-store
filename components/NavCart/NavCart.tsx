import { useMediaQuery } from '@react-hook/media-query';
import React, { useState } from 'react';
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
  // Modal Dropdown will be displayed differently for mobile and pc screens
  const onMobileWidth = useMediaQuery('only screen and (max-width: 500px)');
  const modalTop = onMobileWidth ? '3rem' : '5rem';
  const modalRight = onMobileWidth ? '-5rem' : '-2rem';
  const modalWidth = onMobileWidth ? '330px' : '500px';

  // local state - modal control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleCartModal = () => setIsModalOpen((prev) => !prev);
  // global state - cart content and removeFromCart action creator
  const { productAmount, cart, total } = useTypedSelector(
    (state) => state.cart
  );
  const { addToCart, removeFromCart } = useActions();

  return (
    <Styled.Container>
      <Styled.CartButton className="cart-button" onClick={toggleCartModal}>
        <CartIcon productAmount={productAmount} />
        <span>Cart</span>
      </Styled.CartButton>
      <NavMiniModal
        isOpen={isModalOpen}
        modalWidth={modalWidth}
        top={modalTop}
        right={modalRight}
        modalContent={
          <CartContent
            cart={cart}
            total={total}
            productAmount={productAmount}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        }
      />
    </Styled.Container>
  );
};

export default NavCart;
