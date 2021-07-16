import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  .shopping-cart-icon {
    font-size: 1.75rem;
  }
`;

export const ProductQuantity = styled.span`
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
`;
