import React from 'react';
import Hero from '../../components/Hero/Hero';
import Skeleton from '../../components/Skeleton/Skeleton';
import WhatsHot from '../../components/WhatsHotSection/WhatsHotSection';
import { Product } from '../../types';
import { highlightedSneakers } from './landingPageData';
import MobileProducts from '../../components/MobileProducts/MobileProducts';
import * as Styled from './LandingPage.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import { getDataForLandingPageSections } from '../../utils/helperFunctions';
import WaveDivider from '../../components/WaveDivider/WaveDivider';
import Carousel from '../../components/Carousel/Carousel';

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
  const { hotProducts, jordanSneakers, adidasSneakers, nikeSneakers } =
    getDataForLandingPageSections(products);

  return (
    <Styled.Container>
      <Hero highlightedSneakers={highlightedSneakers} />
      {areProductsLoading ? (
        <Skeleton variant="whatsHot" />
      ) : (
        <>
          <WhatsHot products={hotProducts} />
          <WaveDivider
            waveImg={'/images/blobs/4.svg'}
            dividerHeight={'200px'}
          />
        </>
      )}

      <Carousel
        carouselHeader={'The Latest And Greatest 🔥'}
        carouselItems={products}
      />
      <Styled.ProductsSection>
        <PageHeader headerText={`Shop by brand 💣`} />
        <MobileProducts
          products={jordanSneakers}
          brandName={'air jordan'}
          brandImage="/images/brands/jordan-3.png"
          logoParams={{ height: 100, width: 100 }}
        />
        <MobileProducts
          products={nikeSneakers}
          brandName={'nike'}
          brandImage="/images/brands/Nike.svg"
          logoParams={{ height: 100, width: 100 }}
        />

        <MobileProducts
          products={adidasSneakers}
          brandName={'adidas'}
          brandImage="/images/brands/Adidas.svg"
          logoParams={{ height: 100, width: 100 }}
        />
      </Styled.ProductsSection>
      <WaveDivider
        waveImg={'/images/blobs/opposite-blob-1.svg'}
        dividerHeight={'150px'}
        margin={'1rem 0 0 0'}
      />
    </Styled.Container>
  );
};

export default LandingPage;
