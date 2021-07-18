import React from 'react';
import { PaymentMethod } from '../../types';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import * as Styled from './styles.AllPaymentMethods';

export interface Props {
  paymentMethods: PaymentMethod[];
}
/**
 *Renders Component with all available payment methods
 *@function AllPaymentMethods
 *@param {array} paymentMethods array of img src/name for each payment method
 *@returns {JSX.Element} - Rendered AllPaymentMethods component
 */
const AllPaymentMethods = ({ paymentMethods }: Props): JSX.Element => {
  return (
    <Styled.Container>
      {paymentMethods.map((method) => (
        <Styled.LI key={method.methodName}>
          <PaymentMethodIcon
            iconSrc={method.iconSrc}
            iconAlt={method.methodName}
          />
        </Styled.LI>
      ))}
    </Styled.Container>
  );
};
export default AllPaymentMethods;
