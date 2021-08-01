import { shallow } from 'enzyme';
import Image from 'next/image';
import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import NotFound from './NotFound';
import * as Styled from './styles.NotFound';

describe('404 page content', () => {
  const wrap = shallow(<NotFound />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render header', () => {
    const header = wrap.find(PageHeader);
    expect(header.length).toBe(1);
  });

  it('should render sneaker loader', () => {
    const sneakerWrapper = wrap.find(Styled.Sneaker);
    expect(sneakerWrapper.length).toBe(1);
    const sneaker = sneakerWrapper.find(Image);
    expect(sneaker.length).toBe(1);
  });

  it('should render sneaker image with proper alt and src', () => {
    const sneakerWrapper = wrap.find(Styled.Sneaker);
    const sneaker = sneakerWrapper.find(Image);
    expect(sneaker.prop('alt')).toBe('Air Jordan 1 Retro High OG');
    expect(sneaker.prop('src')).toBe('/404_sneaker.png');
  });
});
