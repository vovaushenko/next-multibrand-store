import React from 'react';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';
import CheckoutPayment from '../../components/CheckoutPayment/CheckoutPayment';

export default function CheckoutPaymentPage(): JSX.Element {
  return (
    <CheckoutLayout title="Payment | Sneaker Maniacs">
      <CheckoutPayment />
    </CheckoutLayout>
  );
}
