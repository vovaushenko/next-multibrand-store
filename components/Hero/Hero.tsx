import Image from 'next/image';
import React from 'react';
import { StyledHero } from './style';

type Props = {
  imgSrc: string;
  sneakerModel: string;
  sneakerName: string;
};
/**
 * Hero Component
 *@function Hero
 *@param {string} imgSrc - src of displayed hero image
 *@param {string} sneakerModel - text that will display model of highlighted sneaker model
 *@param {string} sneakerName - name of highlighted sneaker model
 *@returns {JSX.Element} - Rendered Hero component
 */
const Hero = ({ imgSrc, sneakerModel, sneakerName }: Props): JSX.Element => {
  return (
    <StyledHero>
      <h1>{sneakerModel}</h1>
      <h2>{sneakerName}</h2>
      <Image
        src={imgSrc}
        alt={sneakerModel}
        height={350}
        width={350}
        className="hero-image"
      />
    </StyledHero>
  );
};

export default Hero;
