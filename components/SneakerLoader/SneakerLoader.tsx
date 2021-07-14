import Image from 'next/image';
import React from 'react';
import * as Styled from './styles';
/**
 * Utility Loader
 *@function SneakerLoader
 *@returns {JSX.Element} - Rendered SneakerLoader component
 */
const SneakerLoader = (): JSX.Element => {
  return (
    <Styled.Container>
      <Image
        alt="Sneaker maniacs spinning logo"
        height={200}
        width={240}
        objectFit="contain"
        src="/logo.png"
      />
    </Styled.Container>
  );
};

export default SneakerLoader;
