import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Modal from '../components/Modal/Modal';
import { wrapper } from '../store';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme } from '../styles/mainTheme';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Modal />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default wrapper.withRedux(WrappedApp);
