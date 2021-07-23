import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import FormCheckboxField from '../FormCheckboxField/FormCheckboxField';
import * as Styled from './styles.CheckoutPayment';

/**
 *Shipping stage of checkout process
 *@function CheckoutShipping
 *@returns {JSX.Element} - Rendered CheckoutShipping component
 */
const CheckoutShipping = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const handlePayment = () => {
    console.log('paid');
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

      <Styled.ShippingInfo>
        <Styled.Header>Method</Styled.Header>
        <Styled.Content>FREE Shipping · Free</Styled.Content>
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Change</Styled.RouterLink>
        </Link>
      </Styled.ShippingInfo>
      {/* Billing Address */}
      <div>
        <CardHeader headerText="Shipping Information" />
        <Styled.Content>
          Select the address that matches your card or payment method.
        </Styled.Content>
      </div>

      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={checked}
          setChecked={toggleCheckbox}
          name="same__billing"
          labelText="	Same as shipping address"
        />
      </Styled.ShippingInfo>
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={checked}
          setChecked={toggleCheckbox}
          name="different"
          labelText="Use a different billing address"
        />
      </Styled.ShippingInfo>
      {/* Remember User */}
      <CardHeader headerText="Remember me" />
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={checked}
          setChecked={toggleCheckbox}
          name="remember__me"
          labelText="	Save my information for a faster checkout"
        />
      </Styled.ShippingInfo>
      {/* Footer */}
      <Styled.ButtonWrap>
        <Button text="Continue to payment" onClick={handlePayment} />
        <Link href="/checkout/shipping" passHref>
          <Styled.RouterLink>Return to shipping</Styled.RouterLink>
        </Link>
      </Styled.ButtonWrap>
    </Styled.Container>
  );
};

export default CheckoutShipping;
