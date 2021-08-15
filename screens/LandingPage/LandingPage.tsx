import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import { Product } from '../../types';
import { highlightedSneakers } from './landingPageData';
import MobileProducts from '../../components/MobileProducts/MobileProducts';

export interface Props {
  products: Product[];
  areProductsLoading: boolean;
}

/**
 *@function LandingPage
 *@param {Product[]} products - array of highlighted products to be displayed in WhatsHot section
 *@param {boolean} areProductsLoading - state of loading, based on WhatsHot or Skeleton will be rendered
 *@returns {JSX.Element} - Rendered LandingPage component
 */
const LandingPage = ({ products, areProductsLoading }: Props): JSX.Element => {
  return (
    <>
      <Hero highlightedSneakers={highlightedSneakers} />
      {areProductsLoading ? (
        <Skeleton variant="whatsHot" />
      ) : (
        <WhatsHot products={products} />
      )}
      <MobileProducts
        products={products}
        brandName={'Jordan'}
        brandImage="/images/brands/Jordan.svg"
        logoParams={{ height: 100, width: 150 }}
      />
      <MobileProducts
        products={products}
        brandName={'Nike'}
        brandImage="/images/brands/Nike.svg"
        logoParams={{ height: 100, width: 100 }}
      />

      <MobileProducts
        products={products}
        brandName={'Adidas'}
        brandImage="/images/brands/Adidas.svg"
        logoParams={{ height: 100, width: 100 }}
      />
    </>
  );
};

export default LandingPage;
