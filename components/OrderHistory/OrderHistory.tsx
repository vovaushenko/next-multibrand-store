import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Button from '../Button/Button';
import * as Styled from './styles.OrderHistory';

const OrderHistory = (): JSX.Element => {
  //TODO: Add integration of ORDERS feature when it will be finished on the backend
  const router = useRouter();
  const redirectToAllProducts = () => router.push('/products/all');

  return (
    <Styled.Container>
      <Button text="Make your first order" onClick={redirectToAllProducts} />
    </Styled.Container>
  );
};

export default OrderHistory;
