import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
const NavUserAccount = (): JSX.Element => {
  const openUserAccount = () => {
    // TODO: on click open modal || redirect to account page
    console.log('Open modal with user sign/in details');
  };
  return (
    <UserAccount>
      <span>Sign In</span>
      <button className="account-button" onClick={() => openUserAccount()}>
        My Account <FiChevronDown className="account-icon" />
      </button>
    </UserAccount>
  );
};

const UserAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .account-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.primaryWhite};
    font-size: 1.125rem;
    font-weight: 600;
  }

  .account-icon {
    margin-left: 0.5rem;
  }
`;

export default NavUserAccount;
