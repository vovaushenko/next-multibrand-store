import { useMediaQuery } from '@react-hook/media-query';
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
  // Modal Dropdown will be displayed differently for mobile and pc screens
  const onMobileWidth = useMediaQuery('only screen and (max-width: 500px)');
  const modalTop = onMobileWidth ? '4rem' : '5rem';
  const modalRight = onMobileWidth ? '2rem' : '4rem';

  // Controls Modal dropdown
  // TODO: move modal control to global state, or think about this
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleAccountModal = () => setIsModalOpen((prev) => !prev);
  const [session] = useSession();

  // Modal content and width depend on session. If user is authenticated - <UserAccountDropdown /> will be rendered
  // otherwise <SignIn /> will be rendered
  const modalContent = session ? <UserAccountDropdown /> : <SignIn />;
  let modalWidth = session ? '250px' : '350px';
  if (onMobileWidth) modalWidth = '300px';

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
        top={modalTop}
        right={modalRight}
      />
    </Styled.Container>
  );
};

export default NavUserAccount;
