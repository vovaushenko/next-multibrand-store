import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Modal from '../components/Modal/Modal';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { wrapper } from '../store';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme, secondaryTheme } from '../styles/mainTheme';
import { useRouter } from 'next/dist/client/router';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const router = useRouter();

  useEffect(() => {
    /**
     *@DARK-MAGIC
     *This useEffect fixes existing scroll restoration bug in next.js
     *@details: https://github.com/vercel/next.js/issues/3303
     */
    const cachedPageHeight: number[] = [];
    const html = document.querySelector('html');

    router.events.on('routeChangeStart', () => {
      cachedPageHeight.push(document.documentElement.offsetHeight);
    });

    router.events.on('routeChangeComplete', () => {
      if (html !== null) html.style.height = 'initial';
    });

    router.beforePopState(() => {
      if (html !== null) html.style.height = `${cachedPageHeight.pop()}px`;
      return true;
    });
  }, [router]);

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme === 'dark' ? mainTheme : secondaryTheme}>
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
