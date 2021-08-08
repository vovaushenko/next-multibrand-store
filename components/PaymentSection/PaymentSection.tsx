import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import FormCheckboxField from '../FormCheckboxField/FormCheckboxField';
import FormTextField from '../FormTextField/FormTextField';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import * as Styled from './styles.PaymentSection';

/**
 *Renders PaymentMethods in the final step of process checkout
 *@function PaymentSection
 *@returns {JSX.Element} - Rendered PaymentSection component
 */

const PaymentSection = (): JSX.Element => {
  const [isCreditCardSelected, setIsCreditCardSelected] =
    useState<boolean>(true);
  const [isPayPalSelected, setIsPayPalSelected] = useState<boolean>(false);
  const [isAmazonSelected, setIsAmazonSelected] = useState<boolean>(false);
  const [creditCardNumber, setCreditCardNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');

  const selectCreditCard = useCallback(() => {
    setIsCreditCardSelected(true);
    setIsPayPalSelected(false);
    setIsAmazonSelected(false);
  }, []);
  const selectPayPal = useCallback(() => {
    setIsPayPalSelected(true);
    setIsCreditCardSelected(false);
    setIsAmazonSelected(false);
  }, []);
  const selectAmazonPay = useCallback(() => {
    setIsAmazonSelected(true);
    setIsPayPalSelected(false);
    setIsCreditCardSelected(false);
  }, []);

  return (
    <Styled.Container>
      <Styled.FormControl>
        <FormCheckboxField
          checked={isCreditCardSelected}
          setChecked={selectCreditCard}
          name="credit__card"
          labelText="Pay with Credit Card"
        />

        <Styled.CreditCardProviders>
          <PaymentMethodIcon
            iconSrc="/images/payment-icons/visa.svg"
            iconAlt="visa"
          />
          <PaymentMethodIcon
            iconSrc="/images/payment-icons/maste.svg"
            iconAlt="master"
          />
          <PaymentMethodIcon
            iconSrc="/images/payment-icons/amex.svg"
            iconAlt="visa"
          />
          <PaymentMethodIcon
            iconSrc="/images/payment-icons/jcb.svg"
            iconAlt="visa"
          />
        </Styled.CreditCardProviders>
      </Styled.FormControl>
      {isCreditCardSelected && (
        <>
          <FormTextField
            name="card__number"
            placeholder="Card Number"
            value={creditCardNumber}
            setValue={setCreditCardNumber}
            type="tel"
            required={true}
          />
          <FormTextField
            name="name"
            placeholder="Name on Card"
            value={name}
            setValue={setName}
            type="text"
            required={true}
          />
          <Styled.FormTextControl>
            <FormTextField
              name="expiration__date"
              placeholder="Expiration Date(MM / YY)"
              value={expirationDate}
              setValue={setExpirationDate}
              type="text"
              required={true}
            />
            <FormTextField
              name="security__code"
              placeholder="Security Code"
              value={securityCode}
              setValue={setSecurityCode}
              type="text"
              required={true}
            />
          </Styled.FormTextControl>
        </>
      )}

      <Styled.FormControl>
        <FormCheckboxField
          checked={isPayPalSelected}
          setChecked={selectPayPal}
          name="paypal"
          labelText="Pay with PayPal"
        />

        <PaymentMethodIcon
          iconSrc="/images/payment-icons/paypal.svg"
          iconAlt="paypal"
        />
      </Styled.FormControl>

      {isPayPalSelected && (
        <Styled.PaymentContainer>
          <Image
            src="/images/payment-icons/credit-card.png"
            alt="Pay with PayPal service"
            height={140}
            width={170}
            objectFit="cover"
            quality={100}
          />
          <p>
            After clicking “Complete order”, you will be redirected to PayPal to
            complete your purchase securely.
          </p>
        </Styled.PaymentContainer>
      )}

      <Styled.FormControl>
        <FormCheckboxField
          checked={isAmazonSelected}
          setChecked={selectAmazonPay}
          name="amazon"
          labelText="Pay with Amazon"
        />

        <Image
          src="/images/payment-icons/amazon-pay.svg"
          alt="amazon-pay"
          height={60}
          width={80}
          className="amazon__pay"
        />
      </Styled.FormControl>
      {isAmazonSelected && (
        <Styled.PaymentContainer>
          <Image
            src="/images/payment-icons/credit-card.png"
            alt="Pay with Amazon service"
            height={140}
            width={170}
            objectFit="cover"
            quality={100}
          />
          <p>You will be asked to login with Amazon.</p>
        </Styled.PaymentContainer>
      )}
    </Styled.Container>
  );
};

export default PaymentSection;
