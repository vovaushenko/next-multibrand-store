import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { FaParachuteBox } from 'react-icons/fa';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.OrderHistory';

const OrderHistory = (): JSX.Element => {
  //TODO: Add integration of ORDERS feature when it will be finished on the backend
  const router = useRouter();
  const redirectToAllProducts = () => router.push('/products/all');

  return (
    <Styled.Container>
      <CardHeader headerText="No orders yet ..." />
      <FaParachuteBox className="order" />
      <Button text="Make your first order" onClick={redirectToAllProducts} />
    </Styled.Container>
  );
};

export default OrderHistory;
