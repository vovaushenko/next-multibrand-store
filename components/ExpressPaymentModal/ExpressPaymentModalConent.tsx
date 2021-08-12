import Image from 'next/image';
import React from 'react';
import CardHeader from '../CardHeader/CardHeader';
import * as Styled from './styles.ExpressPaymentModal';

interface Props {
  paymentMethodImageSrc: string;
  imgAlt: string;
}
/**
 *Renders express checkout modal content, currently a placeholder
 *@function ExpressPaymentModal
 *@param {string} paymentMethodImageSrc - image src of payment method svg
 *@param {string} imgAlt - image alt atrribute
 *@returns {JSX.Element} - Rendered ExpressPaymentModal component
 */
const ExpressPaymentModal = ({
  paymentMethodImageSrc,
  imgAlt,
}: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src={paymentMethodImageSrc}
        height={250}
        width={360}
        objectFit="contain"
        alt={imgAlt}
      />
      <CardHeader headerText="Coming soon!" />
    </Styled.Container>
  );
};

export default ExpressPaymentModal;
