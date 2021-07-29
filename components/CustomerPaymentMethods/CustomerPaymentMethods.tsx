import React from 'react';
import CreditCard from '../CreditCard/CreditCard';
import * as Styled from './styled.CustomerPaymentMethods';

interface Props {
  customerName: string;
  customerImg: string;
}

const CustomerPaymentMethods = ({
  customerName,
  customerImg,
}: Props): JSX.Element => {
  return (
    <Styled.Container>
      <CreditCard
        cardHolderName={customerName}
        cardNumber={'5212 1921 0068 4821'}
        cardHolderImd={customerImg}
      />
    </Styled.Container>
  );
};

export default CustomerPaymentMethods;
