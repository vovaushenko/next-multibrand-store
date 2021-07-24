import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import AllPaymentMethods from '../../components/AllPaymentMethods/AllPaymentMethods';
import { allPaymentMethods } from '../../components/AllPaymentMethods/paymentData';
import Button from '../../components/Button/Button';
import CardHeader from '../../components/CardHeader/CardHeader';
import CardContent from '../../components/CartContent/CartContent';
import Container from '../../components/Container/Container';
import {
  addToCartType,
  removeFromCartType,
} from '../../store/action-creators/cartActionCreators';
import { CartItem } from '../../types/cartReduxTypes';
import * as Styled from './styles.UserCart';

interface Props {
  cart: CartItem[];
  total: number;
  productAmount: number;
  removeFromCart: removeFromCartType;
  addToCart: addToCartType;
}

const UserCartScreen = ({
  cart,
  total,
  addToCart,
  productAmount,
  removeFromCart,
}: Props): JSX.Element => {
  const router = useRouter();
  const proceedToCheckout = () => router.push('/checkout/information');

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.LeftColumn>
          <CardContent
            cart={cart}
            total={total}
            showCheckout={false}
            productAmount={productAmount}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Styled.LeftColumn>
        {productAmount > 0 && (
          <Styled.RightColumn>
            <Styled.Checkout>
              <Styled.Total>
                <CardHeader headerText="Total" />
                <CardHeader headerText={`$${total}`} />
              </Styled.Total>
              <p>Taxes and shipping calculated at checkout</p>
              <Button text="checkout" onClick={proceedToCheckout} />
            </Styled.Checkout>
            <Styled.PaymentWrapper>
              <Link href="/sneaker-maniac" passHref>
                <Styled.SneakerManiac>Sneaker Maniac+</Styled.SneakerManiac>
              </Link>
              <p>Enter Code: SNEAKERMANIAC at checkout to save 20%</p>
              <AllPaymentMethods paymentMethods={allPaymentMethods} />
            </Styled.PaymentWrapper>
          </Styled.RightColumn>
        )}
      </Styled.Wrapper>
    </Container>
  );
};
export default UserCartScreen;
