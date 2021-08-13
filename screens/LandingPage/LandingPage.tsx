import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import { Product } from '../../types';
import { highlightedSneakers } from './landingPageData';

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
    </>
  );
};

export default LandingPage;
