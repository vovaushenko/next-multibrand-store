import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import HR from '../HR/HR';
import * as Styled from './styles.CheckoutCart';

const CheckoutCart = (): JSX.Element => {
  const { cart, total } = useTypedSelector((state) => state.cart);
  const { shippingMethod } = useTypedSelector((state) => state.checkout);

  const calculateTotal = () => {
    let finalTotal = total;
    if (shippingMethod === 'expressTwoDay') finalTotal += 5;

    return finalTotal;
  };

  return (
    <Styled.Container>
      <Styled.UL>
        {cart.map((cartItem) => (
          <Styled.LI key={cartItem.productID}>
            <CheckoutProduct cartItem={cartItem} />
          </Styled.LI>
        ))}
      </Styled.UL>

      <HR />
      <Styled.TextWrap>
        <Styled.Subtotal>Subtotal</Styled.Subtotal>
        <Styled.BoldTxt>${total}</Styled.BoldTxt>
      </Styled.TextWrap>

      <Styled.TextWrap marginTop="0.5rem">
        <Styled.Shipping>Shipping</Styled.Shipping>
        <Styled.BoldTxt>
          {shippingMethod === 'free' ? 'Free' : '$5'}
        </Styled.BoldTxt>
      </Styled.TextWrap>
      <HR />

      <Styled.TextWrap>
        <Styled.Total>Total</Styled.Total>
        <Styled.TotalPrice>${calculateTotal()}</Styled.TotalPrice>
      </Styled.TextWrap>
    </Styled.Container>
  );
};

export default CheckoutCart;
