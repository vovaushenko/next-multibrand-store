import { signOut, useSession } from 'next-auth/client';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import CardHeader from '../CardHeader/CardHeader';
import CheckoutShippingInfo from '../CheckoutShippingInfo/CheckoutShippingInfo';
import ExpressCheckout from '../ExpressCheckout/ExpressCheckout';
import * as Styled from './styles.CheckoutInformation';
/**
 *@function CheckoutInformation
 *@returns {JSX.Element} - Rendered CheckoutInformation component
 */
const CheckoutInformation = (): JSX.Element => {
  const [session] = useSession();
  const handleSignOut = () => signOut();
  return (
    <Styled.Container>
      <CardHeader headerText="Express Checkout" />
      <ExpressCheckout />
      {/* If user is logged-in we will show avatar section*/}
      {session && (
        <>
          <CardHeader headerText="Contact information" />
          <Styled.UserInformation>
            <Avatar
              src={session.user.avatar.url}
              firstName={session.user.name.split(' ')[0]}
              lastName={session.user.name.split(' ')[1] || ''}
              hasBadge={false}
              isActive={false}
              width={'80px'}
            />
            <div>
              <Styled.UserDetails>
                {session.user.name} ({session.user.email})
              </Styled.UserDetails>

              <Styled.SignOut onClick={() => handleSignOut()}>
                Sign Out
              </Styled.SignOut>
            </div>
          </Styled.UserInformation>
        </>
      )}

      <CardHeader headerText="Shipping Address" />
      <CheckoutShippingInfo />
    </Styled.Container>
  );
};

export default CheckoutInformation;
