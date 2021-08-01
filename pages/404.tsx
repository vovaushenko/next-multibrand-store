import React from 'react';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout title="404 Not Found | Sneaker Maniacs">
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
