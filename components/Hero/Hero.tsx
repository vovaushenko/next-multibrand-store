import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Container from '../Container/Container';
import * as Styled from './Hero.styles';

interface HighlightedSneaker {
  imgSrc: string;
  sneakerModel: string;
  sneakerName: string;
  sneakerLogoGradient: string;
}

type Props = {
  highlightedSneakers: HighlightedSneaker[];
};
/**
 * Hero Component
 *@function Hero
 *@param {string} imgSrc - src of displayed hero image
 *@param {string} sneakerModel - text that will display model of highlighted sneaker model
 *@param {string} sneakerName - name of highlighted sneaker model
 *@returns {JSX.Element} - Rendered Hero component
 */
const Hero = ({ highlightedSneakers }: Props): JSX.Element => {
  const [id, setId] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);
  const [transition, setTransition] = useState<string>('');
  const [translateZ, setTranslateZ] = useState<string>('');
  const [headerTranslate, setHeaderTranslate] = useState<string>('');

  const nextSneaker = () => {
    let newId = id + 1;
    if (newId >= highlightedSneakers.length) newId = 0;
    if (intervalID !== null) clearInterval(intervalID);
    setId(newId);
  };
  const previousSneaker = () => {
    let newId = id - 1;
    if (newId < 0) newId = highlightedSneakers.length - 1;
    if (intervalID !== null) clearInterval(intervalID);
    setId(newId);
  };
  const { sneakerModel, sneakerName, imgSrc, sneakerLogoGradient } =
    highlightedSneakers[id];

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

  // this useEffect changes index of highlighted sneaker from "highlightedSneakers"
  useEffect(() => {
    const interval = setInterval(() => {
      setId((prev) => (prev + 1 >= highlightedSneakers.length ? 0 : prev + 1));
    }, 10000);

    setIntervalID(interval);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Styled.Container>
      <Container>
        <Styled.ImageWrap
          key={id}
          transition={transition}
          translateZ={translateZ}
          onMouseEnter={handleAnimateIn}
          onMouseLeave={handleAnimateOut}
        >
          <Styled.Figcaption>
            <Styled.Header
              headerTranslate={headerTranslate}
              sneakerLogoGradient={sneakerLogoGradient}
            >
              {sneakerModel}
            </Styled.Header>
            <Styled.SubHeader
              headerTranslate={headerTranslate}
              sneakerLogoGradient={sneakerLogoGradient}
            >
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
            quality={90}
          />
        </Styled.ImageWrap>

        <Styled.PrevSneaker onClick={previousSneaker}>
          <MdKeyboardArrowLeft className="icon" />
        </Styled.PrevSneaker>
        <Styled.NextSneaker onClick={nextSneaker}>
          <MdKeyboardArrowRight className="icon" />
        </Styled.NextSneaker>
      </Container>
    </Styled.Container>
  );
};

export default Hero;
