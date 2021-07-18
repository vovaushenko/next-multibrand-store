import Image from 'next/image';
import React, { useState } from 'react';
import { removeFromCartType } from '../../store/action-creators/cartActionCreators';
import { CartItem } from '../../types/cartReduxTypes';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './styles.CartProductItem';

export interface Props {
  cartItem: CartItem;
  removeFromCart: removeFromCartType;
}
/**
 *@component responsible for rendering of the content of cart items
 *@function CartProductItem
 *@param {object} cartItem - cart item details
 *@param {function} removeFromCart - redux action creator to dispatch remove from cart action
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CartProductItem = ({ cartItem, removeFromCart }: Props): JSX.Element => {
  const { brand, model, price, productID, productImg, size } = cartItem;
  const [quantity, setQuantity] = useState(1);
  const handleRemoveFromCart = () => removeFromCart(productID, size);

  return (
    <Styled.Container>
      <Styled.Figure>
        <Image
          src={productImg}
          alt={`${brand} ${model}`}
          width={60}
          height={60}
          objectFit="contain"
        />
      </Styled.Figure>

      <Styled.Wrap>
        <RouterLink
          href={`/products/${productID}`}
        >{`${brand} ${model}-${size}`}</RouterLink>
        <Styled.Price>${price}</Styled.Price>
      </Styled.Wrap>

      <Styled.Wrap>
        <Styled.QuantityController>
          <Styled.ControlButton
            fontSize="1.25rem"
            onClick={() => setQuantity((p) => p + 1)}
          >
            +
          </Styled.ControlButton>
          <Styled.Quantity>{quantity}</Styled.Quantity>
          <Styled.ControlButton fontSize="1.25rem">-</Styled.ControlButton>
        </Styled.QuantityController>
        <Styled.ControlButton fontSize="1rem" onClick={handleRemoveFromCart}>
          Remove
        </Styled.ControlButton>
      </Styled.Wrap>
    </Styled.Container>
  );
};
export default CartProductItem;
