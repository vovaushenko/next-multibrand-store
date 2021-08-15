import React from 'react';
import * as Styled from './MobileProductCard.styles';
import { Product } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import { MdWhatshot } from 'react-icons/md';

export interface Props {
  product: Product;
}

/**
 *Renders mobile card for a product. Used only on mobile screens.
 *@function MobileProductCard
 *@param {Product} product - object with details of a given product
 *@returns {JSX.Element} - Rendered CardContent component
 */
const MobileProductCard = ({ product }: Props): JSX.Element => {
  return (
    <Styled.CardContainer>
      <Styled.Badge>
        <MdWhatshot className={'icon'} />
      </Styled.Badge>

      <Image
        src={product.images[4]?.url || product.images[0]?.url}
        alt={`${product.brand} ${product.model}`}
        height={120}
        width={120}
        objectFit={'contain'}
        className={'product-img'}
      />

      <Link href={`/products/${product._id}`} passHref>
        <Styled.LinkContent>{product.model}</Styled.LinkContent>
      </Link>
    </Styled.CardContainer>
  );
};

export default MobileProductCard;
