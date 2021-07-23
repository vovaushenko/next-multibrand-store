import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormCheckboxField from '../FormCheckboxField/FormCheckboxField';
import * as Styled from './styles.CheckoutShipping';

/**
 *Shipping stage of checkout process
 *@function CheckoutShipping
 *@returns {JSX.Element} - Rendered CheckoutShipping component
 */
const CheckoutShipping = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  const router = useRouter();

  const proceedToPayment = () => {
    router.push('/checkout/payment');
  };

  const toggleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Styled.Container>
      <CardHeader headerText="Shipping Information" />
      {/* Shipping info */}
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

      {/* Shipping Methods */}
      <CardHeader headerText="Shipping method" />
      {/* Free shipping */}
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={checked}
          setChecked={toggleCheckbox}
          name="free__shipping"
          labelText="FREE Shipping"
        />

        <Styled.Content>Free</Styled.Content>
      </Styled.ShippingInfo>
      {/* Paid two day shipping */}
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={checked}
          setChecked={toggleCheckbox}
          name="two_day__shipping"
          labelText="2-Day Shipping"
        />

        <Styled.Content>$4.99</Styled.Content>
      </Styled.ShippingInfo>
      {/* Footer */}
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
