import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.CheckoutShipping';

const CheckoutShipping = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const proceedToPayment = () => {
    router.push('/checkout/payment');
  };
  return (
    <Styled.Container>
      <CardHeader headerText="Shipping Information" />
      <Styled.ShippingInfo>
        <Styled.Header>Contact</Styled.Header>
        <Styled.Content>vovaushenko1989@gmail.com</Styled.Content>
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Change</Styled.RouterLink>
        </Link>
      </Styled.ShippingInfo>

      <Styled.ShippingInfo>
        <Styled.Header>Ship to</Styled.Header>
        <Styled.Content>
          1509 14 Avenue Southwest D, a21, Calgary ID 83646, United States
        </Styled.Content>
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Change</Styled.RouterLink>
        </Link>
      </Styled.ShippingInfo>

      <CardHeader headerText="Shipping method" />

      <Styled.ShippingInfo>
        <Styled.InputControl>
          <input
            type="checkbox"
            id="freeShipping"
            name="freeShipping"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />

          <label htmlFor="freeShipping">FREE Shipping</label>
        </Styled.InputControl>
        <Styled.Content>Free</Styled.Content>
      </Styled.ShippingInfo>

      <Styled.ShippingInfo>
        <Styled.InputControl>
          <input
            type="checkbox"
            id="twoDayShipping"
            name="scales"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="twoDayShipping"> 2-Day Shipping</label>
        </Styled.InputControl>
        <Styled.Content>$4.99</Styled.Content>
      </Styled.ShippingInfo>

      <Styled.ButtonWrap>
        <Button text="Continue to payment" onClick={proceedToPayment} />
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Return to information</Styled.RouterLink>
        </Link>
      </Styled.ButtonWrap>
    </Styled.Container>
  );
};

export default CheckoutShipping;
