import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CartIcon from '../CartIcon/CartIcon';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import * as Styled from './styles.NavCart';

const DummyContent = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga
    voluptatum, nostrum deleniti magnam illo laboriosam suscipit molestias
    cumque dolore, illum optio harum a quam?
  </p>
);

const NavCart = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleCartModal = () => setIsModalOpen((prev) => !prev);

  const { productAmount } = useTypedSelector((state) => state.cart);

  return (
    <Styled.Container onClick={toggleCartModal}>
      <Styled.CartButton className="cart-button">
        <CartIcon productAmount={productAmount} />
        <span>Cart</span>
      </Styled.CartButton>
      <NavMiniModal
        isOpen={isModalOpen}
        modalContent={<DummyContent />}
        modalWidth={'200px'}
      />
    </Styled.Container>
  );
};

export default NavCart;
