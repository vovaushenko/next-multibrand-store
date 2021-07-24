import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ShippingMethod } from '../../types/checkoutTypes';
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
  const router = useRouter();

  const [freeShippingSelected, setFreeShippingSelected] =
    useState<boolean>(true);
  const [expressShippingSelected, setExpressShippingSelected] =
    useState<boolean>(false);

  const { collectCustomerShippingMethod } = useActions();
  const { userShippingInfo, isLoading, isShippingMethodSelected } =
    useTypedSelector((state) => state.checkout);

  const getUserAddress = () => {
    if (userShippingInfo)
      return `${userShippingInfo?.address}, ${userShippingInfo?.city}, ${userShippingInfo?.zipCode}, ${userShippingInfo?.country}`;

    return 'Not specified';
  };

  const proceedToPayment = async () => {
    const preferredShippingMethod: ShippingMethod = expressShippingSelected
      ? 'expressTwoDay'
      : 'free';

    await collectCustomerShippingMethod(preferredShippingMethod);
    toast.success('🎉 Preferred shipping is saved 🎉');
    setTimeout(() => {
      router.push('/checkout/payment');
    }, 1000);
  };

  const selectFreeShipping = useCallback(() => {
    setFreeShippingSelected(true);
    setExpressShippingSelected(false);
  }, []);

  const selectExpressShipping = useCallback(() => {
    setExpressShippingSelected(true);
    setFreeShippingSelected(false);
  }, []);

  return (
    <Styled.Container>
      <CardHeader headerText="Shipping Information" />
      {/* Shipping info */}
      <Styled.ShippingInfo>
        <Styled.Header>Contact</Styled.Header>
        <Styled.Content>
          {userShippingInfo?.email || 'Not Specified'}
        </Styled.Content>
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Change</Styled.RouterLink>
        </Link>
      </Styled.ShippingInfo>

      <Styled.ShippingInfo>
        <Styled.Header>Ship to</Styled.Header>
        <Styled.Content>{getUserAddress()}</Styled.Content>
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Change</Styled.RouterLink>
        </Link>
      </Styled.ShippingInfo>

      {/* Shipping Methods */}
      <CardHeader headerText="Shipping method" />
      {/* Free shipping */}
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={freeShippingSelected}
          setChecked={selectFreeShipping}
          name="free__shipping"
          labelText="FREE Shipping"
        />

        <Styled.Content>Free</Styled.Content>
      </Styled.ShippingInfo>
      {/* Paid two day shipping */}
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={expressShippingSelected}
          setChecked={selectExpressShipping}
          name="two_day__shipping"
          labelText="2-Day Shipping"
        />

        <Styled.Content>$4.99</Styled.Content>
      </Styled.ShippingInfo>
      {/* Footer */}
      <Styled.ButtonWrap>
        <Button
          text="Continue to payment"
          onClick={proceedToPayment}
          isCompleted={isShippingMethodSelected}
          isLoading={isLoading}
        />
        <Link href="/checkout/information" passHref>
          <Styled.RouterLink>Return to information</Styled.RouterLink>
        </Link>
      </Styled.ButtonWrap>
    </Styled.Container>
  );
};

export default CheckoutShipping;
