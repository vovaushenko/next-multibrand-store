import NextImage from 'next/image';
import React, { useRef } from 'react';
import useHover from '../../hooks/useHover';
import { Image } from '../../types';
import * as Styled from './styles';
import Link from 'next/link';

export interface Props {
  productID: string;
  brandName: string;
  productModel: string;
  productPrice: string;
  images: Image[];
}

/**
 *@function HorizontalCard
 *@param {string} brandName - displayed product brand
 *@param {string} productModel - displayed product model
 *@param {string} productPrice - displayed product price
 *@param {array} images - array of Image Objects from cloudinary CDN has .url and public_id
 *@returns {JSX.Element} - Rendered HorizontalCard component to display products on IndexPage
 */
const HorizontalCard = ({
  brandName,
  productModel,
  productPrice,
  images,
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

  return (
    <Styled.CardContainer>
      <Styled.CardImage ref={imageRef}>
        <NextImage
          src={isHovering ? firstImage : secondImage}
          alt={`${brandName} ${productModel}`}
          height={140}
          width={150}
          objectFit="contain"
          className="card-img"
        />
      </Styled.CardImage>

      <Styled.CardText>
        <Link href={`/products/${productID}`} passHref>
          <Styled.A>{`${brandName} ${productModel}`}</Styled.A>
        </Link>

        <Styled.Price>${productPrice}</Styled.Price>
      </Styled.CardText>
    </Styled.CardContainer>
  );
};

export default HorizontalCard;
