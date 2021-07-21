import { shallow } from 'enzyme';
import React from 'react';
import { Product } from '../../types';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import WhatsHotSection from './WhatsHotSection';

/**
 * Setup function for the component
 * @returns {ShallowWrapper}
 */
const setup = (products: Product[]) => {
  return shallow(<WhatsHotSection products={products} />);
};

describe('WhatsHot Section on Index page with no products', () => {
  const wrap = setup([]);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should NOT render product cards if there is no products', () => {
    const productCards = wrap.find(HorizontalCard);
    expect(productCards.length).toBe(0);
  });
});

describe('WhatsHot Section on Index page with 1 product', () => {
  const wrap = setup([
    {
      department: 'men',
      colors: ['Pearl', 'White', ''],
      size: ['10.5'],
      _id: '60ec4b0d182a728b9d356c34',
      brand: 'Air Jordan',
      description:
        "In 1992, Michael Jordan laced up his Air Jordan VII sneakers to win a 2nd consecutive NBA Championship, and a gold medal with the 'Dream Team' in the Olympic Games. For this Air Jordan, Tinker Hatfield drew inspiration from West African tribal art and created a unique design. But the Air Jordan VII isn't just looks, this sneaker was also applauded for comfort on the court due to its neoprene sockliner, which provides a snug fit.",
      images: [
        {
          _id: '60ec4b0d182a728b9d356c35',
          public_id: 'sneaker-maniacs/products/cummusiuf80rolweuzjs',
          url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098444/sneaker-maniacs/products/cummusiuf80rolweuzjs.png',
        },
      ],
      model: 'VII (7) Retro',
      price: 399,
      styleCode: '304775-281',
    },
  ]);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  it('should render 1 product card if there is 1 product', () => {
    const productCards = wrap.find(HorizontalCard);
    expect(productCards.length).toBe(1);
  });
});
