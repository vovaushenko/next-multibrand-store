import React, { useEffect, useState } from 'react';
import {
  MdAccessTime,
  MdCreditCard,
  MdPerson,
  MdTimeToLeave,
  MdZoomOutMap,
} from 'react-icons/md';
import { toast } from 'react-toastify';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FormTextField from '../FormTextField/FormTextField';
import Order from '../Order/Order';
import * as Styled from './styles.AdminAllOrders';

/**
 *Renders all renders with filtering and details features
 *@function AdminAllOrders
 *@returns {JSX.Element} - Rendered AdminAllOrders component
 */
const AdminAllOrders = (): JSX.Element => {
  // Parameters for filters
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  const { loadAllOrders, openModal } = useActions();
  const { error, orders } = useTypedSelector((state) => state.orders);

  // By clicking on More Details in Order, Modal will be rendered with the details of the order
  const showOrderDetails = (orderID: string) => {
    const order = orders.find((order) => order._id === orderID);
    if (order !== undefined) {
      openModal({
        modalYposition: window.scrollY,
        modalContent: <Order order={order} orderID={1} />,
      });
    }
  };

  useEffect(() => {
    loadAllOrders();
    if (error) toast.error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  // filter orders by customer name and email
  const filteredOrders = (nameTerm: string, emailTerm: string) => {
    let initOrders = [...orders];
    if (nameTerm !== undefined || emailTerm !== undefined) {
      if (emailTerm !== undefined) {
        emailTerm = emailTerm.toLowerCase();
        initOrders = orders.filter((order) =>
          order.shippingInfo.email.toLowerCase().includes(emailTerm)
        );
      }
      if (nameTerm !== undefined) {
        nameTerm = nameTerm.toLowerCase();
        initOrders = initOrders.filter(
          (order) =>
            order.shippingInfo.firstName.toLowerCase().includes(nameTerm) ||
            order.shippingInfo.lastName.toLowerCase().includes(nameTerm)
        );
      }

      return initOrders;
    }

    return initOrders;
  };

  return (
    <Styled.Container>
      <Styled.Filter>
        <FormTextField
          name="customer__name"
          placeholder="Filter By Customer Name"
          value={customerName}
          setValue={setCustomerName}
          type="text"
          required
        />
        <FormTextField
          name="customer__email"
          placeholder="Filter By Customer Email"
          value={customerEmail}
          setValue={setCustomerEmail}
          type="text"
          required
        />
      </Styled.Filter>
      {filteredOrders(customerName, customerEmail).map((order) => (
        <Styled.Order key={order._id}>
          <Styled.StatWrapper
            className="more__details"
            onClick={() => showOrderDetails(order._id)}
          >
            <MdZoomOutMap className="icon" />
            <p>More details...</p>
          </Styled.StatWrapper>

          <Styled.StatWrapper>
            <MdPerson className="icon" />
            <div>
              <p>
                {order.shippingInfo.firstName} {order.shippingInfo.lastName}
              </p>
            </div>
          </Styled.StatWrapper>

          <Styled.StatWrapper>
            <MdAccessTime className="icon" />
            <p>{new Date(order.paidAt).toLocaleDateString()}</p>
          </Styled.StatWrapper>

          <Styled.StatWrapper>
            <MdTimeToLeave className="icon" />
            <p>{order.deliveryStatus}</p>
          </Styled.StatWrapper>

          <Styled.StatWrapper>
            <MdCreditCard className="icon" />
            <p>{order.paymentInfo.status}</p>
          </Styled.StatWrapper>
        </Styled.Order>
      ))}
    </Styled.Container>
  );
};

export default AdminAllOrders;
