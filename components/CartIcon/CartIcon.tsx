import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';

export interface Props {
  productAmount: number;
}

const CartIcon = ({ productAmount }: Props): JSX.Element => {
  return (
    <StyledCartIcon>
      <FiShoppingCart className="shopping-cart-icon" />
      <span>
        <p className="product-amount">{productAmount}</p>
      </span>
    </StyledCartIcon>
  );
};

const StyledCartIcon = styled.div`
  position: relative;
  .shopping-cart-icon {
    font-size: 1.75rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.primaryGolden};
    border-radius: 50%;
    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    top: -5px;
    left: 2px;
    color: ${({ theme }) => theme.primaryBg};
    .product-amount {
      font-size: 0.75rem;
    }
  }
`;
export default CartIcon;
