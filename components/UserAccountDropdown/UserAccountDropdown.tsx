import { signOut } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import * as Styled from './styles.UserAccountDropdown';

/**
 * Content for User Account Details dropdown in <Navbar/>, will not be displayed for not logged-in users
 *@function UserAccountDropdown
 *@returns {JSX.Element} - Rendered UserAccountDropdown component
 */
const UserAccountDropdown = (): JSX.Element => {
  const handleUserSignOut = () => signOut();

  return (
    <Styled.Container>
      <Link href="/account" passHref>
        <Styled.LinkContent>Account</Styled.LinkContent>
      </Link>
      <Link href="/account" passHref>
        <Styled.LinkContent>Orders</Styled.LinkContent>
      </Link>
      <Button text="sign out" onClick={handleUserSignOut} />
    </Styled.Container>
  );
};

export default UserAccountDropdown;
