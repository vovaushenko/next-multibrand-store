import { useMediaQuery } from '@react-hook/media-query';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { MdExpandMore, MdShoppingCart } from 'react-icons/md';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
import CheckoutProgress from '../CheckoutProgress/CheckoutProgress';
import * as Styled from './styles.CheckoutLayout';

interface Props {
  children: ReactNode;
  title: string;
}

const CheckoutLayout = ({ children, title }: Props): JSX.Element => {
  const onMobileWidth = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
      </Head>
      <Styled.Container>
        <Styled.LeftColumn>
          <CheckoutProgress />
          {children}
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {onMobileWidth ? (
            <Styled.Details>
              <summary>
                <MdShoppingCart className="icon" /> Show order summary{' '}
                <MdExpandMore className="icon" />
              </summary>
              <CheckoutCart />
            </Styled.Details>
          ) : (
            <CheckoutCart />
          )}
        </Styled.RightColumn>
      </Styled.Container>
    </>
  );
};

export default CheckoutLayout;
