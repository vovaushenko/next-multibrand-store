import React from 'react';
import * as Styled from './MobileProducts.styles';
import { Product } from '../../types';
import MobileProductCard from '../MobileProductCard/MobileProductCard';
import Image from 'next/image';

export interface Props {
  products: Product[];
  brandImage: string;
  brandName: string;
  logoParams: { height: number; width: number };
}

/**
 *Renders horizontally scrollable products list. Visible only on mobile screens.
 *@function MobileProducts
 *@param {Product[]} products - array of products to be displayed in section
 *@param {string} brandName - name of brand section
 *@param {string} brandImage - image of brand logo
 *@param {object} logoParams - logo img width and height
 *@returns {JSX.Element} - Rendered CardContent component
 */
const MobileProducts = ({
  products,
  brandImage,
  brandName,
  logoParams,
}: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.UL>
        <Styled.BrandLogo href={`products/shoes/men/${brandName}`}>
          <Image
            src={brandImage}
            alt={brandName}
            height={logoParams.height}
            width={logoParams.width}
            objectFit={'contain'}
          />
        </Styled.BrandLogo>
        {products.map((product) => (
          <Styled.LI key={product._id}>
            <MobileProductCard product={product} />
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default MobileProducts;
