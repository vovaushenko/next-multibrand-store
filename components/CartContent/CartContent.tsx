import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  addToCartType,
  removeFromCartType,
} from '../../store/action-creators/cartActionCreators';
import { CartItem } from '../../types/cartReduxTypes';
import Button from '../Button/Button';
import CartProductItem from '../CartProductItem/CartProductItem';
import * as Styled from './styles.CartContent';

export interface Props {
  cart: CartItem[];
  productAmount: number;
  removeFromCart: removeFromCartType;
  addToCart: addToCartType;
}
/**
 *@function CardContent
 *@param {number} productAmount - amount of products in cart
 *@param {object} cart - cart content
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CardContent = ({
  productAmount,
  cart,
  addToCart,
  removeFromCart,
}: Props): JSX.Element => {
  const router = useRouter();
  // if cart is empty will render button which will redirect Client to products/all
  const handleRedirectToProducts = () => router.push('/products/all');

  return (
    <Styled.Container>
      {productAmount === 0 ? (
        <>
          <FiShoppingCart className="cart_icon" />
          <Styled.Text>Your cart is empty</Styled.Text>
          <Button text={'Fill your cart'} onClick={handleRedirectToProducts} />
        </>
      ) : (
        <Styled.List>
          {cart.map((cartItem, id) => (
            <Styled.ListItem key={id}>
              <CartProductItem
                cartItem={cartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </Styled.ListItem>
          ))}
        </Styled.List>
      )}
    </Styled.Container>
  );
};

export default CardContent;
