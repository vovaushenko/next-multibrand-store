import React from 'react';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={'Shop The Hottest Sneakers | Nike | Jordan | Adidas | Puma '}
    >
      <h1>Hello World</h1>
      <Button
        text="hello"
        disabled={false}
        isCompleted={false}
        isLoading={false}
      />
    </Layout>
  );
}
