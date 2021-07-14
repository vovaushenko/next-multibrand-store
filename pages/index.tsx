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
        sneakerModel={'AIR JORDAN 6 RETRO SP'}
        sneakerName={'Travis scott'}
        imgSrc="/images/hero-img.png"
      />
      <WhatsHot products={trendingProducts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //TODO: Implement absolute url instead of localhost
  const { data } = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      trendingProducts: data.allProducts,
    },
  };
};
