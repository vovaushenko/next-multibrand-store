import { signOut } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MdAccountCircle, MdShoppingBasket } from 'react-icons/md';
import * as Styled from './styles.UserAccountDropdown';

/**
 * Content for User Account Details dropdown in <Navbar/>, will not be displayed for not logged-in users
 *@function UserAccountDropdown
 *@returns {JSX.Element} - Rendered UserAccountDropdown component
 */
const UserAccountDropdown = (): JSX.Element => {
  const handleUserSignOut = () => {
    if (confirm('Are you sure want to sign out?')) {
      signOut();
    }
  };

  return (
    <Styled.Container>
      <Link href="/account" passHref>
        <Styled.LinkContent>
          <MdAccountCircle className="icon" />
          Account
        </Styled.LinkContent>
      </Link>
      <Link href="/account" passHref>
        <Styled.LinkContent>
          <MdShoppingBasket className="icon" />
          Orders
        </Styled.LinkContent>
      </Link>

      <Styled.SignOut onClick={handleUserSignOut}>
        <FiLogOut className="icon" />
        Sign Out
      </Styled.SignOut>
    </Styled.Container>
  );
};

export default UserAccountDropdown;
