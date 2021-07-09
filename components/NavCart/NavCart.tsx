import React from 'react';
import styled from 'styled-components';
import CartIcon from '../CartIcon/CartIcon';

const NavCart = (): JSX.Element => {
  return (
    <StyledNavCart>
      <button className="cart-button">
        <CartIcon productAmount={1} />
        <span>Cart</span>
      </button>
    </StyledNavCart>
  );
};

const StyledNavCart = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;

  .cart-button {
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.primaryWhite};
    display: flex;
    align-items: center;
    border: none;

    span {
      margin-left: 1.25rem;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }
`;

export default NavCart;
