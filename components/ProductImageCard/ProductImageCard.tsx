import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import { Image } from '../../types';
import * as Styled from './styles.ProductImageCard';

export interface Props {
  images: Image[];
  sneakerModel: string;
}
/**
 *@function Product Image Card
 *@param {array} images - product images of Cloudinary img objects
 *@returns {JSX.Element} - Rendered Product Image Card component
 */
const ProductImageCard = ({ images, sneakerModel }: Props): JSX.Element => {
  // big image src will be controlled through local state
  const [bigImageSrc, setBigImageSrc] = useState<string>(
    '/images/generic-sneaker.png'
  );
  // product list focus border will be also controlled here
  const [highlightedID, setHighlightedID] = useState<number>(0);
  // onClick we will change image src for big image and id for outline highlight
  const handleChangeBigImage = (src: string, id: number): void => {
    setBigImageSrc(src);
    setHighlightedID(id);
  };

  useEffect(() => {
    setBigImageSrc(images && images[0].url);
  }, []);

  return (
    <Styled.CardContainer>
      {images && (
        <>
          <Styled.ImageList>
            {images.map((image, id) => (
              <Styled.ImageWrapper
                key={id}
                isHighlighted={id === highlightedID}
              >
                <NextImage
                  src={image.url}
                  height={70}
                  width={70}
                  alt={sneakerModel}
                  objectFit="contain"
                  onClick={() => handleChangeBigImage(image.url, id)}
                  className="small-img"
                />
              </Styled.ImageWrapper>
            ))}
          </Styled.ImageList>
          <Styled.BigImage>
            <NextImage
              src={bigImageSrc || images[0].url}
              height={350}
              width={350}
              alt={sneakerModel}
              objectFit="contain"
              className="big-img"
            />
          </Styled.BigImage>
        </>
      )}
    </Styled.CardContainer>
  );
};

export default ProductImageCard;
