import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { FaParachuteBox } from 'react-icons/fa';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import Order from '../Order/Order';
import SneakerLoader from '../SneakerLoader/SneakerLoader';
import * as Styled from './styles.OrderHistory';

/**
 * Renders history of customer's orders or call to action button if there is no orders in DB
 *@function OrderHistory
 *@returns {JSX.Element} - Rendered OrderHistory component
 */
const OrderHistory = (): JSX.Element => {
  //TODO: Add integration of ORDERS feature when it will be finished on the backend
  const router = useRouter();
  const redirectToAllProducts = () => router.push('/products/all');

  const { loadAllCustomerOrders } = useActions();
  const { isLoading, orders } = useTypedSelector((state) => state.orders);

  useEffect(() => {
    loadAllCustomerOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container>
      {isLoading ? (
        <SneakerLoader />
      ) : (
        <>
          {/* If there is no orders, make your first order call to action will be rendered */}
          {orders.length === 0 ? (
            <>
              <CardHeader headerText="No orders yet ..." />
              <FaParachuteBox className="order" />
              <Button
                text="Make your first order"
                onClick={redirectToAllProducts}
              />
            </>
          ) : (
            <Styled.UL>
              {/* This List will be rendered only if customer has history of orders*/}
              {orders.map((order, id) => (
                <Order key={order._id} order={order} orderID={id + 1} />
              ))}
            </Styled.UL>
          )}
        </>
      )}
    </Styled.Container>
  );
};

export default OrderHistory;
