import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import PageHeader from '../PageHeader/PageHeader';
import * as Styled from './styles.NotFound';

/**
 *Renders content for 404 page
 *@function NotFound
 *@returns {JSX.Element} - Rendered NotFound component
 */

const NotFound = (): JSX.Element => {
  const router = useRouter();

  const redirectToProducts = () => {
    router.push('/products/all');
  };

  return (
    <Styled.Container>
      <PageHeader headerText="Page not found" />

      <Styled.Text>
        The page you are looking for cannot be found. Like this rare pair of
        Jordans.
      </Styled.Text>

      <Styled.Sneaker>
        <Image
          src="/404_sneaker.png"
          alt="Air Jordan 1 Retro High OG"
          height={250}
          width={260}
          objectFit="contain"
        />
      </Styled.Sneaker>

      <Button
        text={`Hurry up! Don't miss the latest drops!`}
        onClick={redirectToProducts}
      />
    </Styled.Container>
  );
};

export default NotFound;
