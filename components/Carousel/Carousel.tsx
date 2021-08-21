import React, { useRef } from 'react';
import * as Styled from './Carousel.styles';
import PageHeader from '../PageHeader/PageHeader';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Product } from '../../types';
import CarouselCard from '../CarouselCard/CarouselCard';

export interface Props {
  carouselHeader: string;
  carouselItems: Product[];
}

/**
 *Renders horizontally scrollable product carousel
 *@function Carousel
 *@param {string} carouselHeader - carousel text header
 *@param {Product[]} carouselItems - product items to be rendered in carousel cards
 *@returns {JSX.Element} - Rendered Carousel component
 */
const Carousel = ({ carouselHeader, carouselItems }: Props): JSX.Element => {
  const ulRef = useRef<HTMLUListElement>(null);

  const scrollRight = () => {
    if (ulRef.current !== null) ulRef.current.scrollLeft += 455;
  };
  const scrollLeft = () => {
    if (ulRef.current !== null) ulRef.current.scrollLeft -= 455;
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <PageHeader headerText={carouselHeader} />

        <div>
          <Styled.CarouselControlBtn onClick={scrollLeft}>
            <MdKeyboardArrowLeft className="icon left" />
          </Styled.CarouselControlBtn>
          <Styled.CarouselControlBtn onClick={scrollRight}>
            <MdKeyboardArrowRight className="icon right" />
          </Styled.CarouselControlBtn>
        </div>
      </Styled.Header>

      <Styled.UL ref={ulRef}>
        {carouselItems.map((item) => (
          <Styled.LI key={item._id}>
            <CarouselCard carouselItem={item} />
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default Carousel;
