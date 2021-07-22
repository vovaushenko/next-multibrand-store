import { signOut, useSession } from 'next-auth/client';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import Avatar from '../../components/Avatar/Avatar';
import Container from '../../components/Container/Container';
import HR from '../../components/HR/HR';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import PageHeader from '../../components/PageHeader/PageHeader';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import UpdateUserAccount from '../../components/UpdateUserAccount/UpdateUserAccount';
import * as Styled from './styles.UserAccount';

const UserAccount = (): JSX.Element => {
  const [session] = useSession();
  const [contentHeader, setContentHeader] = useState('Orders');
  const [isOrderHistoryOnScreen, setIsOrderHistoryOnScreen] = useState(true);
  const [isUpdateAccountOnScreen, setIsOrderUpdateAccountOnScreen] =
    useState(false);

  const showOrderHistory = useCallback(() => {
    setContentHeader('Orders');
    setIsOrderUpdateAccountOnScreen(false);
    setIsOrderHistoryOnScreen(true);
  }, []);

  const showUpdateAccount = useCallback(() => {
    setContentHeader('Update Account Details');
    setIsOrderHistoryOnScreen(false);
    setIsOrderUpdateAccountOnScreen(true);
  }, []);

  const handleSignOut = () => {
    toast.success('💗 See you later! 💗');
    signOut();
  };

  const rightColumnContent = () => {
    if (isOrderHistoryOnScreen) return <OrderHistory />;
    if (isUpdateAccountOnScreen) return <UpdateUserAccount />;
  };

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.LeftColumn>
          {session && (
            <>
              <Avatar
                src={session.user.avatar.url}
                firstName={session.user.name.split(' ')[0]}
                lastName={session.user.name.split(' ')[1] || ''}
                hasBadge={false}
                isActive={false}
                width={'120px'}
              />
              <Styled.UserName>{session.user.name}</Styled.UserName>
            </>
          )}
          {/* TODO:ADD UPDATE ORDERS CONTENT */}
          <Styled.Button onClick={showOrderHistory}>
            Orders History
          </Styled.Button>
          {/* TODO:ADD UPDATE ACCOUNT CONTENT */}
          <Styled.Button onClick={showUpdateAccount}>
            Update Account
          </Styled.Button>

          <Styled.Button onClick={handleSignOut}>Sign Out</Styled.Button>
        </Styled.LeftColumn>

        {/* Column with content that is controlled through the above buttons */}
        <Styled.ContentColumn>
          <PageHeader headerText={contentHeader} />
          <HR />
          {rightColumnContent()}
        </Styled.ContentColumn>
      </Styled.Wrapper>
      <RecentlyViewed />
    </Container>
  );
};

export default UserAccount;
