import Image from 'next/image';
import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import ExpressPaymentModal from '../ExpressPaymentModal/ExpressPaymentModalConent';
import { expressCheckoutPaymentMethods } from './expressCherckout.data';
import * as Styled from './styles.ExpressCheckout';

/**
 *All available express checkout methods
 *@function ExpressCheckout
 *@returns {JSX.Element} - Rendered ExpressCheckout component
 */
const ExpressCheckout = (): JSX.Element => {
  const { openModal } = useActions();

  const processExpressPayment = useCallback(
    (paymentIcon: string, alt: string) => {
      openModal({
        modalYposition: window.scrollY,
        modalContent: (
          <ExpressPaymentModal
            paymentMethodImageSrc={paymentIcon}
            imgAlt={alt}
          />
        ),
      });
    },
    [openModal]
  );

  return (
    <Styled.Container>
      <Styled.Wrapper>
        {expressCheckoutPaymentMethods.map((paymentMethod) => (
          <Styled.PaymentMethod key={paymentMethod.alt}>
            <Image
              src={paymentMethod.src}
              alt={paymentMethod.alt}
              width={paymentMethod.width}
              height={paymentMethod.height}
              onClick={() =>
                processExpressPayment(paymentMethod.src, paymentMethod.alt)
              }
            />
          </Styled.PaymentMethod>
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default ExpressCheckout;
