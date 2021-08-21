import React from 'react';
import * as Styled from './CarouselCard.styles';
import { Product, SneakerBrand } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

export interface Props {
  carouselItem: Product;
}

/**
 *Renders card for Carousel Component
 *@function CarouselCard
 *@param {Product} carouselItem - carousel item info to be mapped to the card
 *@returns {JSX.Element} - Rendered CarouselCard component
 */
const CarouselCard = ({ carouselItem }: Props): JSX.Element => {
  const {
    brand,
    model,
    department,
    price,
    images,
    _id: productID,
  } = carouselItem;
  const departmentText = `${department}'s Shoes`;
  const itemTitle = `${brand} ${model}`;

  //TODO add support of other brands and move to helpers
  const getCarouselItemBrandLogo = (brandName: SneakerBrand): string => {
    if (brandName === 'Nike') return '/images/brands/Nike.svg';
    if (brandName === 'Adidas') return '/images/brands/Adidas.svg';
    return '/images/brands/jordan-3.png';
  };

  return (
    <Styled.Container>
      <Styled.BrandBadge>
        <Image
          height={80}
          width={80}
          src={getCarouselItemBrandLogo(brand)}
          objectFit={'contain'}
          alt={'Nike brand logo'}
        />
      </Styled.BrandBadge>
      <Styled.Figure>
        <Image
          src={images[0].url}
          width={300}
          height={300}
          objectFit="contain"
          alt={itemTitle}
        />
        <Styled.Figcaption>
          <div>
            <Styled.Title>{departmentText}</Styled.Title>
            <Styled.Price>{price}$</Styled.Price>
          </div>
          <Link href={`/products/${productID}`} passHref>
            <Styled.A>{itemTitle}</Styled.A>
          </Link>
        </Styled.Figcaption>
      </Styled.Figure>
    </Styled.Container>
  );
};

export default CarouselCard;
