import Image from 'next/image';
import React, { useState } from 'react';
import Container from '../Container/Container';
import * as Styled from './Hero.styles';

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
  const [transition, setTransition] = useState<string>('');
  const [translateZ, setTranslateZ] = useState<string>('');
  const [headerTranslate, setHeaderTranslate] = useState<string>('');

  // transition and animation of headers and hero image are controlled through local state, onMouseEnter we will apply effects, onMouseLeave we will revert applied transformations
  const handleAnimateIn = () => {
    setTransition(`none`);
    setTranslateZ('translateZ(120px) rotateZ(-13deg)');
    setHeaderTranslate('translateZ(30px)');
  };

  const handleAnimateOut = () => {
    setTransition('all 0.5s ease');
    setTranslateZ('translateZ(0px) rotateZ(0deg)');
    setHeaderTranslate('translateZ(0px)');
  };
  return (
    <Styled.Container>
      <Container>
        <Styled.ImageWrap
          transition={transition}
          translateZ={translateZ}
          onMouseEnter={handleAnimateIn}
          onMouseLeave={handleAnimateOut}
        >
          <Styled.Figcaption>
            <Styled.Header headerTranslate={headerTranslate}>
              {sneakerModel}
            </Styled.Header>
            <Styled.SubHeader headerTranslate={headerTranslate}>
              {sneakerName}
            </Styled.SubHeader>
          </Styled.Figcaption>

          <Image
            src={imgSrc}
            alt={`${sneakerName} ${sneakerModel}`}
            height={340}
            width={500}
            objectFit="contain"
            className="hero-image"
          />
        </Styled.ImageWrap>
      </Container>
    </Styled.Container>
  );
};

export default Hero;
