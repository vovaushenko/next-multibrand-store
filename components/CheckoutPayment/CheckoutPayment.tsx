import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
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
  const [useShippingAddress, setUseShippingAddress] = useState<boolean>(true);
  const [useAnotherAddress, setUseAnotherAddress] = useState<boolean>(false);
  const [shouldRememberCustomerInfo, setShouldRememberCustomerInfo] =
    useState<boolean>(true);

  const { rememberCustomerInfo, processPayment } = useActions();

  const { isLoading, userShippingInfo, shippingMethod, isPaid, error } =
    useTypedSelector((state) => state.checkout);

  const { total, cart } = useTypedSelector((state) => state.cart);

  const getUserAddress = () => {
    if (userShippingInfo)
      return `${userShippingInfo?.address}, ${userShippingInfo?.city}, ${userShippingInfo?.zipCode}, ${userShippingInfo?.country}`;

    return 'Not specified';
  };
  const getPaymentMethod = () => {
    if (shippingMethod)
      return shippingMethod === 'free'
        ? 'FREE Shipping · Free'
        : 'EXPRESS Shipping · $4.99';

    return 'Not specified';
  };

  const handleSetShippingInfo = useCallback(() => {
    if (useShippingAddress) {
      setUseShippingAddress(false);
      setUseAnotherAddress(true);
    } else {
      setUseShippingAddress(true);
      setUseAnotherAddress(false);
    }
  }, [useShippingAddress]);

  useEffect(() => {
    if (isPaid) toast.success('The purchase was successful');
    if (error) toast.error(error);
  }, [isPaid, error]);

  const handleProcessPayment = () => {
    // if customer has specified that he wants to store shippingInfo for future use
    if (shouldRememberCustomerInfo) {
      console.log('remembered');
      if (userShippingInfo) rememberCustomerInfo(userShippingInfo);
    }

    // console.log(userShippingInfo);
    // console.log(shippingMethod);

    // Process payment
    if (userShippingInfo !== null) {
      const order = {
        customerInfo: userShippingInfo,
        total: total,
        purchasedItems: cart.map((cartItem) => ({
          productID: cartItem.productID,
          brand: cartItem.brand,
          model: cartItem.model,
          size: cartItem.size,
          img: cartItem.productImg,
        })),
      };

      console.log(order);

      processPayment(order);
    }
  };

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

      <Styled.ShippingInfo>
        <Styled.Header>Method</Styled.Header>
        <Styled.Content>{getPaymentMethod()}</Styled.Content>
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
          checked={useShippingAddress}
          setChecked={handleSetShippingInfo}
          name="same__billing"
          labelText="	Same as shipping address"
        />
      </Styled.ShippingInfo>
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={useAnotherAddress}
          setChecked={handleSetShippingInfo}
          name="different"
          labelText="Use a different billing address"
        />
      </Styled.ShippingInfo>
      {/* Remember User */}
      <CardHeader headerText="Remember me" />
      <Styled.ShippingInfo>
        <FormCheckboxField
          checked={shouldRememberCustomerInfo}
          setChecked={() => setShouldRememberCustomerInfo((prev) => !prev)}
          name="remember__me"
          labelText="	Save my information for a faster checkout"
        />
      </Styled.ShippingInfo>
      {/* Footer */}
      <Styled.ButtonWrap>
        <Button
          text="Pay Now"
          isLoading={isLoading}
          onClick={handleProcessPayment}
        />
        <Link href="/checkout/shipping" passHref>
          <Styled.RouterLink>Return to shipping</Styled.RouterLink>
        </Link>
      </Styled.ButtonWrap>
    </Styled.Container>
  );
};

export default CheckoutShipping;
