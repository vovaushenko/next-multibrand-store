import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { UserShippingInfo } from '../../types';
import Button from '../Button/Button';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.CheckoutShippingInfo';
/**
 *Form to get User's Shipping Information
 *@function CheckoutShippingInfo
 *@returns {JSX.Element} - Rendered CheckoutShippingInfo component
 */
const CheckoutShippingInfo = (): JSX.Element => {
  const router = useRouter();
  const [session] = useSession();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleGetShippingAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userEmail = session !== null ? session.user.email : email;

    const userShippingInformation: UserShippingInfo = {
      firstName,
      lastName,
      email: userEmail,
      city,
      address,
      country,
      state,
      zipCode,
      phone,
    };
    // TODO:Validate and sanitize user input
    //TODO: Connect with redux checkout flow
    console.log(userShippingInformation);
  };

  const proceedToShipping = () => {
    router.push('/checkout/shipping');
  };

  return (
    <Styled.Container onSubmit={handleGetShippingAddress}>
      <Styled.FormControl>
        {/* FIRST AND LAST NAME */}
        <FormTextField
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
          required={true}
        />
        <FormTextField
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
          required={true}
        />
      </Styled.FormControl>
      {/* EMAIL - will be shown only to unauthorized users, if user is logged-in. Data will be received through session */}
      {session === null && (
        <FormTextField
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          required={true}
        />
      )}

      {/* ADDRESS */}
      <FormTextField
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        setValue={setAddress}
        required={true}
      />
      {/* CITY */}
      <FormTextField
        type="text"
        name="city"
        placeholder="City"
        value={city}
        setValue={setCity}
        required={true}
      />
      {/* COUNTRY, STATE AND ZIP-CODE */}
      <Styled.FormControl>
        <FormTextField
          type="text"
          name="country"
          placeholder="Country"
          value={country}
          setValue={setCountry}
          required={true}
        />
        <FormTextField
          type="text"
          name="state"
          placeholder="State"
          value={state}
          setValue={setState}
          required={true}
        />
        <FormTextField
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          value={zipCode}
          setValue={setZipCode}
          required={true}
        />
      </Styled.FormControl>
      {/* PHONE */}
      <FormTextField
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phone}
        setValue={setPhone}
        required={true}
      />

      <Styled.ButtonWrap>
        <Button
          text="Continue to shipping"
          onClick={proceedToShipping}
          type="submit"
        />
        <Link href="/cart" passHref>
          <Styled.ReturnToCart>Return to cart</Styled.ReturnToCart>
        </Link>
      </Styled.ButtonWrap>
    </Styled.Container>
  );
};

export default CheckoutShippingInfo;
