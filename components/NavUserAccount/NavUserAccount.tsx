import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Avatar from '../Avatar/Avatar';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import SignIn from '../SignIn/SignIn';
import UserAccountDropdown from '../UserAccountDropdown/UserAccountDropdown';
import * as Styled from './styles.NavUserAccount';

/**
 * Controls User SignIn/Out and Account details in Navbar, content varies on user auth state
 * @function NavUserAccount
 * @returns {ReactNode} - rendered NavUserAccount component
 */
const NavUserAccount = (): JSX.Element => {
  // Controls Modal dropdown
  // TODO: move modal control to global state, or think about this
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleAccountModal = () => setIsModalOpen((prev) => !prev);
  const [session] = useSession();

  // Modal content and width depend on session. If user is authenticated - <UserAccountDropdown /> will be rendered
  // otherwise <SignIn /> will be rendered
  const modalContent = session ? <UserAccountDropdown /> : <SignIn />;
  const modalWidth = session ? '250px' : '350px';

  return (
    <Styled.Container>
      {session ? (
        <Avatar
          src={session.user.avatar.url}
          firstName={session.user.name.split(' ')[0]}
          lastName={session.user.name.split(' ')[1] || ''}
          hasBadge={true}
          isActive={true}
          width={'50px'}
        />
      ) : (
        <span>Sign In</span>
      )}
      <Styled.AccountButton
        className="account-button"
        onClick={toggleAccountModal}
      >
        My Account <FiChevronDown className="account-icon" />
      </Styled.AccountButton>
      <NavMiniModal
        isOpen={isModalOpen}
        modalContent={modalContent}
        modalWidth={modalWidth}
        top="5rem"
        right="4rem"
      />
    </Styled.Container>
  );
};

export default NavUserAccount;
