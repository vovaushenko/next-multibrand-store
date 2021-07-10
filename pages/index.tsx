import React from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={'Shop The Hottest Sneakers | Nike | Jordan | Adidas | Puma '}
    >
      <Hero
        sneakerModel={'AIR JORDAN 6 RETRO SP'}
        sneakerName={'Travis scott'}
        imgSrc="/images/hero-img.png"
      />
    </Layout>
  );
}
