import { signOut, useSession } from 'next-auth/client';
import React, { useCallback, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  MdAccountCircle,
  MdCreditCard,
  MdShoppingBasket,
} from 'react-icons/md';
import { toast } from 'react-toastify';
import Avatar from '../../components/Avatar/Avatar';
import Container from '../../components/Container/Container';
import CustomerPaymentMethods from '../../components/CustomerPaymentMethods/CustomerPaymentMethods';
import HR from '../../components/HR/HR';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import PageHeader from '../../components/PageHeader/PageHeader';
import RecentlyViewed from '../../components/RecentlyViewed/RecentlyViewed';
import UpdateUserAccount from '../../components/UpdateUserAccount/UpdateUserAccount';
import * as Styled from './styles.UserAccount';

const UserAccount = (): JSX.Element => {
  const [session] = useSession();
  const [contentHeader, setContentHeader] = useState('Payment Methods');
  const [isOrderHistoryOnScreen, setIsOrderHistoryOnScreen] = useState(false);
  const [isUpdateAccountOnScreen, setIsOrderUpdateAccountOnScreen] =
    useState(false);
  const [isPaymentMethodsOnScreen, setIsOrderPaymentMethodsOnScreen] =
    useState(true);

  const showOrderHistory = useCallback(() => {
    setContentHeader('Orders');
    setIsOrderHistoryOnScreen(true);
    setIsOrderUpdateAccountOnScreen(false);
    setIsOrderPaymentMethodsOnScreen(false);
  }, []);

  const showUpdateAccount = useCallback(() => {
    setContentHeader('Update Account Details');
    setIsOrderUpdateAccountOnScreen(true);
    setIsOrderPaymentMethodsOnScreen(false);
    setIsOrderHistoryOnScreen(false);
  }, []);
  const showPaymentMethods = useCallback(() => {
    setContentHeader('Payment Methods');
    setIsOrderPaymentMethodsOnScreen(true);
    setIsOrderUpdateAccountOnScreen(false);
    setIsOrderHistoryOnScreen(false);
  }, []);

  const handleSignOut = () => {
    toast.success('💗 See you later! 💗');
    signOut();
  };

  const rightColumnContent = () => {
    if (isOrderHistoryOnScreen) return <OrderHistory />;
    if (isUpdateAccountOnScreen) return <UpdateUserAccount />;
    if (isPaymentMethodsOnScreen)
      return (
        <CustomerPaymentMethods
          customerName={session?.user.name || ''}
          customerImg={session?.user.avatar.url || ''}
        />
      );
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

          <Styled.Button onClick={showOrderHistory}>
            <MdShoppingBasket className="icon" />
            Orders History
          </Styled.Button>

          <Styled.Button onClick={showUpdateAccount}>
            <MdAccountCircle className="icon" />
            Update Account
          </Styled.Button>

          <Styled.Button onClick={showPaymentMethods}>
            <MdCreditCard className="icon" />
            Payment Methods
          </Styled.Button>

          <Styled.Button onClick={handleSignOut}>
            <FiLogOut className="icon" />
            Sign Out
          </Styled.Button>
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
