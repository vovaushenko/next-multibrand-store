import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import CheckoutShippingInfo from '../CheckoutShippingInfo/CheckoutShippingInfo';
import ExpressCheckout from '../ExpressCheckout/ExpressCheckout';
import * as Styled from './styles.CheckoutInformation';
/**
 *@function CheckoutInformation
 *@returns {JSX.Element} - Rendered CheckoutInformation component
 */
const CheckoutInformation = (): JSX.Element => {
  return (
    <Styled.Container>
      <CardHeader headerText="Express Checkout" />
      <ExpressCheckout />
      <CardHeader headerText="Shipping Address" />
      <CheckoutShippingInfo />
    </Styled.Container>
  );
};

export default CheckoutInformation;
