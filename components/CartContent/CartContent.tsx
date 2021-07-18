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
  total: number;
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
  total,
  addToCart,
  removeFromCart,
}: Props): JSX.Element => {
  const router = useRouter();
  // if cart is empty will render button which will redirect Client to products/all
  const handleRedirectToProducts = () => router.push('/products/all');
  // redirect to cart
  const handleRedirectToCart = () => router.push('/cart');
  // redirect to checkout
  const handleRedirectToCheckout = () => router.push('/checkout');

  return (
    <Styled.Container>
      {productAmount === 0 ? (
        <>
          {/* If no products in cart, then we will render call to action button with icon */}
          <FiShoppingCart className="cart_icon" />
          <Styled.Text>Your cart is empty</Styled.Text>
          <Button text={'Fill your cart'} onClick={handleRedirectToProducts} />
        </>
      ) : (
        <>
          {/* If cart has products, we will render the below content */}
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

          <Styled.Totals>
            <Styled.Text fontSize="1rem">Total</Styled.Text>
            <Styled.Text className="total" fontSize="1rem">
              ${total}
            </Styled.Text>
          </Styled.Totals>

          <Styled.BtnWrap>
            <Button
              text="checkout"
              id="btn_checkout"
              onClick={handleRedirectToCheckout}
            />
            <Button text="view cart" onClick={handleRedirectToCart} />
          </Styled.BtnWrap>
        </>
      )}
    </Styled.Container>
  );
};

export default CardContent;
