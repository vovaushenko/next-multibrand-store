import Image from 'next/image';
import React from 'react';
import { CartItem } from '../../types/cartReduxTypes';
import * as Styled from './styles.CheckoutProduct';

export interface Props {
  cartItem: CartItem;
}
/**
 *@component responsible for rendering of the content of cart items in Checkout Process
 *@function CheckoutProduct
 *@param {object} cartItem - cart item details
 *@returns {JSX.Element} - Rendered CardContent component
 */
const CheckoutProduct = ({ cartItem }: Props): JSX.Element => {
  const { brand, model, price, productImg, size } = cartItem;

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
          <Styled.Figcaption>
            <Styled.ProductName>{brand + ' ' + model}</Styled.ProductName>
            <Styled.Size>{size}</Styled.Size>
          </Styled.Figcaption>
        </Styled.Figure>
      </Styled.LeftColumn>

      <Styled.RightColumn>
        <Styled.Price>${price}</Styled.Price>
      </Styled.RightColumn>
    </Styled.Container>
  );
};
export default CheckoutProduct;
