import { shallow } from 'enzyme';
import React from 'react';
import Carousel from './Carousel';
import { mockProduct } from '../../test/mockReduxStore';
import * as Styled from './Carousel.styles';
import CarouselCard from '../CarouselCard/CarouselCard';
import PageHeader from '../PageHeader/PageHeader';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <Carousel
      carouselItems={[mockProduct, mockProduct]}
      carouselHeader={'TOMATO'}
    />
  );
};

describe('Carousel', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct header', () => {
    const header = wrap.find(PageHeader);
    expect(header.length).toBe(1);
  });
  it('should render control buttons', () => {
    const controlBtn = wrap.find(Styled.CarouselControlBtn);
    expect(controlBtn.length).toBe(2);
  });
  it('should render all carousel items', () => {
    const carouselCard = wrap.find(CarouselCard);
    expect(carouselCard.length).toBe(2);
  });
});
