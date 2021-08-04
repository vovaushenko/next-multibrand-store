import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import WhatsHot from '../components/WhatsHotSection/WhatsHotSection';
import { Product } from '../types';

interface ServerProps {
  trendingProducts: Product[];
}

export default function Home({ trendingProducts }: ServerProps): JSX.Element {
  return (
    <Layout
      title={'Shop The Hottest Sneakers | Nike | Jordan | Adidas | Puma '}
    >
      <Hero
        highlightedSneakers={[
          {
            sneakerModel: 'Air Jordan VI',
            sneakerName: 'Electric Green',
            imgSrc: '/images/hero/aj-6-green.png',
            sneakerLogoGradient: `linear-gradient(
                12deg,
                #00ff00 0%,
                #2bff88 52%,
                #00ff00 90%
              )`,
          },
          {
            sneakerModel: 'Adidas Yeezy Boost',
            sneakerName: '350 V2 Zebra',
            imgSrc: '/images/hero/adidas-yeezy-350.png',
            sneakerLogoGradient: `repeating-linear-gradient(
              20deg,
              transparent,
              transparent 3px,
              #ffffff 11px,
              #000000 5px
            )`,
          },

          {
            sneakerModel: 'Air Jordan 1',
            sneakerName: 'OFF-WHITE NRG',
            imgSrc: '/images/hero/aj1-off-white.png',
            sneakerLogoGradient: `linear-gradient(
              45deg,
              #4594ee 0%,
              #f1f5f7 52%,
              #5dd0f0 92%
            )`,
          },
          {
            sneakerModel: 'AIR JORDAN 6 RETRO SP',
            sneakerName: 'Travis Scott',
            imgSrc: '/images/hero/hero-img.png',
            sneakerLogoGradient: `linear-gradient(
                45deg,
                #78866b 0%,
                #5c7743 52%,
                #4e5349 90%
              )`,
          },
        ]}
      />
      <WhatsHot products={trendingProducts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/products'
      : `${process.env.VERCEL_URL}/api/products`;

  const { data } = await axios.get(url);

  return {
    props: {
      trendingProducts: data.allProducts,
    },
  };
};
