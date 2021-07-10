import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

interface Props {
  children: ReactNode;
  title: string;
}

const name: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default name;
