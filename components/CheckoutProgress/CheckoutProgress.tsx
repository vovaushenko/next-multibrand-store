import Link from 'next/link';
import React from 'react';
import { BsForwardFill } from 'react-icons/bs';
import * as Styled from './styled.CheckoutProgress';

/**
 * @component CheckoutProgress to display current progress in checkout user's checkout process(information, shipping or payment stage)
 * @progress is controlled through redux global state
 * @returns {number} - CheckoutProgress component
 */
const CheckoutProgress = (): JSX.Element => {
  return (
    <Styled.Container>
      <Link href="/cart" passHref>
        <Styled.ProgressLink>Cart</Styled.ProgressLink>
      </Link>
      <BsForwardFill className="icon first" />
      <Link href="/checkout/information" passHref>
        <Styled.ProgressLink>Information</Styled.ProgressLink>
      </Link>
      <BsForwardFill className="icon second" />
      <Link href="/checkout/shipping" passHref>
        <Styled.ProgressLink>Shipping</Styled.ProgressLink>
      </Link>
      <BsForwardFill className="icon third" />
      <Link href="/checkout/payment" passHref>
        <Styled.ProgressLink>Payment</Styled.ProgressLink>
      </Link>
    </Styled.Container>
  );
};

export default CheckoutProgress;
