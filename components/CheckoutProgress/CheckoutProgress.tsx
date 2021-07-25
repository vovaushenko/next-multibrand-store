import Link from 'next/link';
import React from 'react';
import { BsForwardFill } from 'react-icons/bs';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import * as Styled from './styled.CheckoutProgress';

/**
 * @component CheckoutProgress to display current progress in checkout user's checkout process(information, shipping or payment stage)
 * @progress is controlled through redux global state
 * @returns {number} - CheckoutProgress component
 */
const CheckoutProgress = (): JSX.Element => {
  // after passing each step of checkout progress, the color of navigation steps will be changing
  const { isShippingInfoCollected, isShippingMethodSelected, isPaid } =
    useTypedSelector((state) => state.checkout);

  return (
    <Styled.Container>
      <Link href="/cart" passHref>
        <Styled.ProgressLink isStepPassed={isShippingInfoCollected}>
          Cart
        </Styled.ProgressLink>
      </Link>

      <Styled.IconControl isStepPassed={isShippingInfoCollected}>
        <BsForwardFill className="icon first" />
      </Styled.IconControl>

      <Link href="/checkout/information" passHref>
        <Styled.ProgressLink isStepPassed={isShippingInfoCollected}>
          Information
        </Styled.ProgressLink>
      </Link>

      <Styled.IconControl isStepPassed={isShippingInfoCollected}>
        <BsForwardFill className="icon first" />
      </Styled.IconControl>

      <Link href="/checkout/shipping" passHref>
        <Styled.ProgressLink isStepPassed={isShippingMethodSelected}>
          Shipping
        </Styled.ProgressLink>
      </Link>

      <Styled.IconControl isStepPassed={isShippingMethodSelected}>
        <BsForwardFill className="icon first" />
      </Styled.IconControl>

      <Link href="/checkout/payment" passHref>
        <Styled.ProgressLink isStepPassed={isPaid}>Payment</Styled.ProgressLink>
      </Link>
    </Styled.Container>
  );
};

export default CheckoutProgress;
