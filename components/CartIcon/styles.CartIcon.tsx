import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  .shopping-cart-icon {
    font-size: 1.75rem;
  }
`;

export const ProductQuantity = styled.span`
  position: absolute;
  top: -5px;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryGolden};
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
  color: ${({ theme }) => theme.primaryBg};

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 ${({ theme }) => theme.primaryGolden};
    }

    70% {
      transform: scale(1.4);
      box-shadow: 0 0 0 12px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
  .product-amount {
    display: block;
    height: 1rem;
    width: 1rem;
    font-size: 0.75rem;
    border-radius: 50%;
    animation: pulse 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }
`;
