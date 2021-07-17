import { signOut, useSession } from 'next-auth/client';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import Avatar from '../../components/Avatar/Avatar';
import Container from '../../components/Container/Container';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as Styled from './styles.UserAccount';

const UserAccount = (): JSX.Element => {
  const [session] = useSession();
  const [contentHeader, setContentHeader] = useState('');
  const [isOrderHistoryOnScreen, setIsOrderHistoryOnScreen] = useState(false);

  const showOrderHistory = useCallback(() => {
    setContentHeader('Orders');
    setIsOrderHistoryOnScreen((prev) => !prev);
  }, []);

  const handleSignOut = () => {
    toast.success('💗 See you later! 💗');
    signOut();
  };

  const rightColumnContent = isOrderHistoryOnScreen ? <OrderHistory /> : '';

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.LeftColumn>
          {session && (
            <Avatar
              src={session.user.avatar.url}
              firstName={session.user.name.split(' ')[0]}
              lastName={session.user.name.split(' ')[1] || ''}
              hasBadge={false}
              isActive={false}
              width={'120px'}
            />
          )}
          {/* TODO:ADD UPDATE ORDERS CONTENT */}
          <Styled.Button onClick={showOrderHistory}>
            Orders History
          </Styled.Button>
          {/* TODO:ADD UPDATE ACCOUNT CONTENT */}
          <Styled.Button>Update Account</Styled.Button>

          <Styled.Button onClick={handleSignOut}>Sign Out</Styled.Button>
        </Styled.LeftColumn>
        {/* Column with content that is controlled through the above buttons */}
        <Styled.ContentColumn>
          <PageHeader headerText={contentHeader} />
          {rightColumnContent}
        </Styled.ContentColumn>
      </Styled.Wrapper>
    </Container>
  );
};

export default UserAccount;
