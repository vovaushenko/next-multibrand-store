import React from 'react';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';
import CheckoutShipping from '../../components/CheckoutShipping/CheckoutShipping';

export default function CheckoutShippingPage(): JSX.Element {
  return (
    <CheckoutLayout title="Shipping">
      <CheckoutShipping />
    </CheckoutLayout>
  );
}
