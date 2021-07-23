import React from 'react';
import CheckoutInformation from '../../components/CheckoutInformation/CheckoutInformation';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';

export default function CheckoutInformationPage(): JSX.Element {
  return (
    <CheckoutLayout title="Checkout">
      <CheckoutInformation />
    </CheckoutLayout>
  );
}
