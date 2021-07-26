import { signOut, useSession } from 'next-auth/client';
import React from 'react';
import { RouterLinkType } from '../../types';
import Avatar from '../Avatar/Avatar';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './styles.AdminNavigation';

export type Props = {
  adminNavLinks: RouterLinkType<string>[];
};

/**
 *@function AdminNavigation
 *@param {array} adminNavLinks - array of objects to render admin router links
 *@returns {JSX.Element} - Rendered component AdminNavigation
 */
const AdminNavigation = ({ adminNavLinks }: Props): JSX.Element => {
  const [session] = useSession();

  const handleSignOut = () => {
    if (confirm('Are you sure want to log out?')) {
      signOut();
    }
  };

  return (
    <Styled.Navigation>
      <Styled.Container>
        {session && (
          <Styled.AvatarWrapper>
            <Avatar
              src={session.user.avatar.url}
              firstName={session.user.name.split(' ')[0]}
              lastName={session.user.name.split(' ')[1] || ''}
              hasBadge={true}
              isActive={false}
              width={'80px'}
            />
            <Styled.AdminName>
              <p>{session.user.name}</p>
              <Styled.SignOut onClick={() => handleSignOut()}>
                Sign Out
              </Styled.SignOut>
            </Styled.AdminName>
          </Styled.AvatarWrapper>
        )}
        <ul>
          {adminNavLinks.map((link) => (
            <li key={link.text}>
              {link.icon}
              <RouterLink href={link.href} fontSize={'1rem'}>
                {link.text}
              </RouterLink>
            </li>
          ))}
        </ul>
      </Styled.Container>
    </Styled.Navigation>
  );
};

export default AdminNavigation;
