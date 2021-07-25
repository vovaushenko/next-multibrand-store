import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import { Order as OrderType } from '../../types';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.Order';

export interface Props {
  order: OrderType;
  orderID: number;
}

/**
 * Renders Customer Order Details in Account Screen
 *@function Order
 *@param {Order} order - details of order
 *@param {number} orderID - id of order
 *@returns {JSX.Element} - Rendered Order component
 */
const Order = ({ order, orderID }: Props): JSX.Element => {
  const router = useRouter();
  const redirectToProductDetails = (productID: string) =>
    router.push(`/products/${productID}`);

  // TODO: Order again functionality
  // TODO: Submit review functionality
  return (
    <Styled.Container>
      <Styled.LeftColumn>
        <CardHeader headerText="Order History" />
        <Styled.Subheader margin="1rem 0 0 0">
          Order #{orderID}
        </Styled.Subheader>
        <p>From: {new Date(order.paidAt).toLocaleDateString()}</p>
        <Styled.Subheader margin="1rem 0 0 0">
          Delivery Status:
        </Styled.Subheader>
        <Styled.DeliveryStatus
          isDelivered={order.deliveryStatus === 'delivered'}
        >
          {order.deliveryStatus}
        </Styled.DeliveryStatus>

        <Styled.Subheader margin="0.5rem 0 0 0">
          Order Details:
        </Styled.Subheader>
        <p>{order.shippingInfo.city}</p>
        <p>{order.shippingInfo.address}</p>
        <p>
          {order.shippingInfo.firstName} {order.shippingInfo.lastName}
        </p>

        <p>{order.shippingInfo.phone}</p>
        <p>{order.shippingInfo.email}</p>
      </Styled.LeftColumn>
      <Styled.RightColumn>
        <CardHeader headerText="Sneaker Maniac Goods" />
        <ul>
          {order.purchase.map((item) => (
            <Styled.OrderItem
              key={item.productID}
              onClick={() => redirectToProductDetails(item.productID)}
            >
              <Image
                src={item.img}
                alt={`${item.brand} ${item.model}`}
                height={80}
                width={80}
                objectFit="contain"
              />
              <p>{item.brand}</p>
              <p>{item.model}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: 1</p>
              <p>${item.price}</p>
            </Styled.OrderItem>
          ))}
        </ul>
        <Styled.Total>
          <p>Total</p>
          <p>${order.orderTotal}</p>
        </Styled.Total>
        <Styled.ButtonWrapper>
          <Button text="leave review" />
          <Button text="Order Again" />
        </Styled.ButtonWrapper>
      </Styled.RightColumn>
    </Styled.Container>
  );
};
export default Order;
