import NextImage from 'next/image';
import React, { useRef } from 'react';
import useHover from '../../hooks/useHover';
import { Image } from '../../types';
import Button from '../Button/Button';
import RouterLink from '../RouterLink/RouterLink';
import * as Styled from './styles.ProductCard';

export interface Props {
  brandName: string;
  productModel: string;
  productPrice: string;
  images: Image[];
  productID: string;
  isAvailable: boolean;
}

/**
 *@function ProductCard
 *@param {string} brandName - displayed product brand
 *@param {string} productModel - displayed product model
 *@param {string} productPrice - displayed product price
 *@param {array} images - array of Image Objects from cloudinary CDN has .url and public_id
 *@param {boolean} isAvailable - is item in stock
 *@param {string} productID - database product ID
 *@returns {JSX.Element} - Rendered HorizontalCard component to display products on IndexPage
 */
const ProductCard = ({
  brandName,
  productModel,
  productPrice,
  images,
  isAvailable,
  productID,
}: Props): JSX.Element => {
  // We will use image ref to target Image of Card to change img.src on hovering
  const imageRef = useRef<HTMLElement>(null);
  const isHovering = useHover(imageRef);
  // If image has more than two image urls, it will be changing img.src on hovering
  const firstImage = images[0].url;
  let secondImage = firstImage;
  if (images.length >= 2) {
    secondImage = images[1].url;
  }
  //TODO: Add to CART

  return (
    <Styled.Card>
      <Styled.CardImage ref={imageRef}>
        <RouterLink href={`/products/${productID}`}>
          <NextImage
            src={isHovering ? firstImage : secondImage}
            alt={`${brandName} ${productModel}`}
            height={200}
            width={200}
            objectFit="contain"
            className="card-img"
          />
        </RouterLink>
      </Styled.CardImage>
      <RouterLink href={`/products/${productID}`}>
        <a>{brandName + ' ' + productModel}</a>
      </RouterLink>
      <Styled.Price>${productPrice}</Styled.Price>
      <Button disabled={isAvailable === false} className="add-to-cart-btn">
        {isAvailable ? 'add to cart' : 'sold out'}
      </Button>
      <Button text={'quick view'} id="quick-view-btn" />
    </Styled.Card>
  );
};
export default ProductCard;
