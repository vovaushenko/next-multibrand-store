import Image from 'next/image';
import React from 'react';
import * as Styled from './styles.PaymentMethodIcon';

export interface Props {
  iconSrc: string;
  iconAlt: string;
}
/**
 *Renders Component with payment method icon
 *@function PaymentMethodIcon
 *@param {string} iconSrc - img src for icon
 *@param {string} iconAlt - img alt for icon
 *@returns {JSX.Element} - Rendered PaymentMethodIcon component
 */
const PaymentMethodIcon = ({ iconSrc, iconAlt }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        src={iconSrc}
        alt={iconAlt}
        height={20}
        width={40}
        objectFit="contain"
      />
    </Styled.Container>
  );
};
export default PaymentMethodIcon;
