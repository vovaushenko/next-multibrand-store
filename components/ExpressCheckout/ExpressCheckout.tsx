import React from 'react';
import { FaAmazonPay, FaPaypal } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';
import * as Styled from './styles.ExpressCheckout';

/**
 *All available express checkout methods
 *@function ExpressCheckout
 *@returns {JSX.Element} - Rendered ExpressCheckout component
 */
const ExpressCheckout = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.PaymentMethod>
          <SiGooglepay className="payment__icon" />
        </Styled.PaymentMethod>
        <Styled.PaymentMethod>
          <FaAmazonPay className="payment__icon" />
        </Styled.PaymentMethod>
        <Styled.PaymentMethod>
          <FaPaypal className="payment__icon" />
        </Styled.PaymentMethod>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default ExpressCheckout;
