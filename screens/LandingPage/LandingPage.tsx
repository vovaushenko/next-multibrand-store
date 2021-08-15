import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import { Product } from '../../types';
import { highlightedSneakers } from './landingPageData';
import MobileProducts from '../../components/MobileProducts/MobileProducts';
import * as Styled from './LandingPage.styles';
import PageHeader from '../../components/PageHeader/PageHeader';

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
    <Styled.Container>
      <Hero highlightedSneakers={highlightedSneakers} />
      {areProductsLoading ? (
        <Skeleton variant="whatsHot" />
      ) : (
        <WhatsHot products={products} />
      )}

      <Styled.ProductsSection>
        <PageHeader headerText={`Shop by brand 💣`} />
        <MobileProducts
          products={products}
          brandName={'air jordan'}
          brandImage="/images/brands/jordan-3.png"
          logoParams={{ height: 100, width: 100 }}
        />
        <MobileProducts
          products={products}
          brandName={'nike'}
          brandImage="/images/brands/Nike.svg"
          logoParams={{ height: 100, width: 100 }}
        />

        <MobileProducts
          products={products}
          brandName={'adidas'}
          brandImage="/images/brands/Adidas.svg"
          logoParams={{ height: 100, width: 100 }}
        />
      </Styled.ProductsSection>
    </Styled.Container>
  );
};

export default LandingPage;
