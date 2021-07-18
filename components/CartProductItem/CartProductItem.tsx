import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';
import {
  addToCartType,
  removeFromCartType,
} from '../../store/action-creators/cartActionCreators';
import { CartItem } from '../../types/cartReduxTypes';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './styles.CartProductItem';

export interface Props {
  cartItem: CartItem;
  removeFromCart: removeFromCartType;
  addToCart: addToCartType;
}
/**
 *@component responsible for rendering of the content of cart items
 *@function CartProductItem
 *@param {object} cartItem - cart item details
 *@param {function} removeFromCart - redux action creator to dispatch remove from cart action
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CartProductItem = ({
  cartItem,
  removeFromCart,
  addToCart,
}: Props): JSX.Element => {
  const { brand, model, price, productID, productImg, size } = cartItem;
  const handleRemoveFromCart = () => {
    removeFromCart(productID, size);
    toast.warning('Product was removed from cart 💫 Shop other products 😉');
  };

  const handleAddMore = () => {
    addToCart({ ...cartItem });
    toast.success('🤙 Product was added to cart 💫');
  };

  return (
    <Styled.Container>
      <Styled.LeftColumn>
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
          >{`${brand} ${model}`}</RouterLink>
          <Styled.Price>${price}</Styled.Price>
        </Styled.Wrap>
      </Styled.LeftColumn>

      <Styled.RightColumn>
        <Styled.Wrap>
          <p>Size</p>
          <Styled.Price>{size}</Styled.Price>
        </Styled.Wrap>

        <Styled.ControlButton btnType="add" onClick={handleAddMore}>
          Add more
        </Styled.ControlButton>
        <Styled.ControlButton btnType="remove" onClick={handleRemoveFromCart}>
          Remove
        </Styled.ControlButton>
      </Styled.RightColumn>
    </Styled.Container>
  );
};
export default CartProductItem;
