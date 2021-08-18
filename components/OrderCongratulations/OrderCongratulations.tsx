import React from 'react';
import * as Styled from './OrderCongratulations.styles';
import CardHeader from '../CardHeader/CardHeader';
import Image from 'next/image';
import { CartItem } from '../../types/cartReduxTypes';
import Button from '../Button/Button';
import { useRouter } from 'next/dist/client/router';
import { UiAction } from '../../types/uiTypes';

export interface Props {
  cart: CartItem[];
  orderID: string;
  closeModal: () => UiAction;
}

/**
 *Renders modal content with congratulations and details of the order after a successful purchase
 *@function OrderCongratulations
 *@returns {JSX.Element} - Rendered CardContent component
 */

const OrderCongratulations = ({
  cart,
  orderID,
  closeModal,
}: Props): JSX.Element => {
  const router = useRouter();

  const proceedToOrderDetails = () => {
    router.push('/account');
    closeModal();
  };
  const proceedToShopping = () => {
    router.push('/products/all/men');
    closeModal();
  };

  return (
    <Styled.Container>
      <Styled.OrderStatus>
        <CardHeader headerText={'Congratulations 🎉'} />
        <p>{`Order #${orderID} is successfully processed`}</p>
      </Styled.OrderStatus>

      {cart.map((order) => (
        <Styled.OrderItem key={order.productID}>
          <Styled.Figure>
            <Image
              src={order.productImg}
              alt={`${order.brand} ${order.model}`}
              height={80}
              width={80}
              objectFit={'contain'}
            />
            <figcaption>
              <h3>
                {order.brand} {order.model}
              </h3>
              <p>{order.size}</p>
            </figcaption>
          </Styled.Figure>

          <div>
            <h4>Bought 🔥</h4>
          </div>
        </Styled.OrderItem>
      ))}

      <Styled.ButtonWrapper>
        <Button text={'Order Details'} onClick={proceedToOrderDetails} />
        <Button text={'Shop More 💛'} onClick={proceedToShopping} />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};
export default OrderCongratulations;
