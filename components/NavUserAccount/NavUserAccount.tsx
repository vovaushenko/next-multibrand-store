import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import SignIn from '../SignIn/SignIn';
import * as Styled from './styles.NavUserAccount';

const NavUserAccount = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleCartModal = () => setIsModalOpen((prev) => !prev);
  return (
    <Styled.Container>
      <span>Sign In</span>
      <Styled.AccountButton
        className="account-button"
        onClick={toggleCartModal}
      >
        My Account <FiChevronDown className="account-icon" />
      </Styled.AccountButton>
      <NavMiniModal
        isOpen={isModalOpen}
        modalContent={<SignIn />}
        modalWidth={'350px'}
      />
    </Styled.Container>
  );
};

export default NavUserAccount;
