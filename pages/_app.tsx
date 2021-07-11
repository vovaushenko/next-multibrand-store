import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../store';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
