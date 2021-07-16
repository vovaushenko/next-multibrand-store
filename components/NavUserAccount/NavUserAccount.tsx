import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as Styled from './styles.NavUserAccount';
const NavUserAccount = (): JSX.Element => {
  const openUserAccount = () => {
    // TODO: on click open modal || redirect to account page
    console.log('Open modal with user sign/in details');
  };
  return (
    <Styled.Container>
      <span>Sign In</span>
      <Styled.AccountButton
        className="account-button"
        onClick={() => openUserAccount()}
      >
        My Account <FiChevronDown className="account-icon" />
      </Styled.AccountButton>
    </Styled.Container>
  );
};

export default NavUserAccount;
